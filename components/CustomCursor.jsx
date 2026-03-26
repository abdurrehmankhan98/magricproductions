"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, select, label, .cursor-hover, [data-cursor], [data-cursor-mode]";

function isInteractive(target) {
  return Boolean(target?.closest?.(INTERACTIVE_SELECTOR));
}

function resolveCursorMeta(element) {
  if (!element) {
    return { label: "", mode: "" };
  }

  const explicitLabel = element.getAttribute("data-cursor");
  const explicitMode = element.getAttribute("data-cursor-mode");

  if (explicitLabel) {
    return { label: explicitLabel, mode: explicitMode || "" };
  }

  if (element.matches("[data-cursor-mode='drag'], .cursor-drag")) {
    return { label: "Drag", mode: "drag" };
  }

  if (element.matches("a")) {
    return { label: "Open", mode: "open" };
  }

  if (element.matches("button, [role='button']")) {
    return { label: "Tap", mode: "tap" };
  }

  return { label: "", mode: explicitMode || "" };
}

export default function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");

  const hoverTargetRef = useRef(null);
  const hoverModeRef = useRef("");
  const visibleRef = useRef(false);

  const ringTargetX = useMotionValue(0);
  const ringTargetY = useMotionValue(0);
  const dotTargetX = useMotionValue(0);
  const dotTargetY = useMotionValue(0);
  const auraTargetX = useMotionValue(0);
  const auraTargetY = useMotionValue(0);
  const labelTargetX = useMotionValue(0);
  const labelTargetY = useMotionValue(0);

  const ringX = useSpring(ringTargetX, { stiffness: 260, damping: 32, mass: 0.35 });
  const ringY = useSpring(ringTargetY, { stiffness: 260, damping: 32, mass: 0.35 });
  const dotX = useSpring(dotTargetX, { stiffness: 520, damping: 38, mass: 0.18 });
  const dotY = useSpring(dotTargetY, { stiffness: 520, damping: 38, mass: 0.18 });
  const auraX = useSpring(auraTargetX, { stiffness: 110, damping: 22, mass: 0.9 });
  const auraY = useSpring(auraTargetY, { stiffness: 110, damping: 22, mass: 0.9 });
  const labelX = useSpring(labelTargetX, { stiffness: 300, damping: 30, mass: 0.3 });
  const labelY = useSpring(labelTargetY, { stiffness: 300, damping: 30, mass: 0.3 });

  useEffect(() => {
    const supportsDesktopPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const shouldEnable = supportsDesktopPointer && !prefersReducedMotion;

    if (!shouldEnable) {
      return undefined;
    }

    document.documentElement.classList.add("has-custom-cursor");

    function updateTargets(clientX, clientY) {
      let followX = clientX;
      let followY = clientY;

      if (hoverTargetRef.current) {
        const rect = hoverTargetRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        followX = clientX * 0.72 + centerX * 0.28;
        followY = clientY * 0.72 + centerY * 0.28;
      }

      ringTargetX.set(followX - 16);
      ringTargetY.set(followY - 16);
      dotTargetX.set(clientX - 3);
      dotTargetY.set(clientY - 3);
      auraTargetX.set(followX - 30);
      auraTargetY.set(followY - 30);
      labelTargetX.set(clientX + 18);
      labelTargetY.set(clientY - 18);
    }

    function onMouseMove(event) {
      updateTargets(event.clientX, event.clientY);

      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
    }

    function onMouseEnter(event) {
      updateTargets(event.clientX, event.clientY);
      visibleRef.current = true;
      setVisible(true);
    }

    function onMouseLeave() {
      visibleRef.current = false;
      setVisible(false);
      setHovering(false);
      setPressed(false);
      setDragging(false);
      setShowLabel(false);
      setCursorLabel("");
      hoverTargetRef.current = null;
      hoverModeRef.current = "";
    }

    function onMouseDown() {
      setPressed(true);
      setDragging(Boolean(hoverTargetRef.current) && hoverModeRef.current === "drag");
    }

    function onMouseUp() {
      setPressed(false);
      setDragging(false);
    }

    function onMouseOver(event) {
      const interactiveElement = event.target?.closest?.(INTERACTIVE_SELECTOR) || null;
      hoverTargetRef.current = interactiveElement;
      setHovering(Boolean(interactiveElement));

      if (!interactiveElement) {
        setShowLabel(false);
        setCursorLabel("");
        hoverModeRef.current = "";
        return;
      }

      const meta = resolveCursorMeta(interactiveElement);
      hoverModeRef.current = meta.mode;
      setCursorLabel(meta.label);
      setShowLabel(Boolean(meta.label));
    }

    function onMouseOut(event) {
      const fromInteractive = isInteractive(event.target);
      const toInteractive = isInteractive(event.relatedTarget);

      if (fromInteractive && !toInteractive) {
        hoverTargetRef.current = null;
        hoverModeRef.current = "";
        setHovering(false);
        setDragging(false);
        setShowLabel(false);
        setCursorLabel("");
      }
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseenter", onMouseEnter, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mouseout", onMouseOut, { passive: true });
    window.addEventListener("blur", onMouseLeave, { passive: true });

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("blur", onMouseLeave);
    };
  }, [
    auraTargetX,
    auraTargetY,
    dotTargetX,
    dotTargetY,
    labelTargetX,
    labelTargetY,
    prefersReducedMotion,
    ringTargetX,
    ringTargetY,
  ]);

  return (
    <div
      className={`cursor-layer ${visible ? "is-visible" : ""} ${hovering ? "is-hover" : ""} ${pressed ? "is-pressed" : ""} ${dragging ? "is-drag" : ""}`}
    >
      <motion.div className="cursor-aura" style={{ x: auraX, y: auraY }} />
      <motion.div className="cursor-ring" style={{ x: ringX, y: ringY }}>
        <div className="cursor-ring-spin" />
        <div className="cursor-ring-spin-alt" />
        <div className="cursor-ring-grid" />
        <div className="cursor-ring-orbit">
          <span className="orbit-dot od-1" />
          <span className="orbit-dot od-2" />
          <span className="orbit-dot od-3" />
        </div>
      </motion.div>
      <motion.div className="cursor-dot" style={{ x: dotX, y: dotY }}>
        <span className="cursor-dot-pulse" />
      </motion.div>
      <motion.div
        className={`cursor-label ${showLabel ? "is-on" : ""}`}
        style={{ x: labelX, y: labelY }}
      >
        {cursorLabel}
      </motion.div>
    </div>
  );
}
