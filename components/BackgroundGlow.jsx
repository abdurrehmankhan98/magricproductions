"use client";

import React, { useEffect, useRef } from 'react';

const BackgroundGlow = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const orbs = containerRef.current.querySelectorAll('.orb');
    
    orbs.forEach((orb, i) => {
      const duration = 15 + i * 5;
      const delay = i * -7;
      
      orb.animate([
        { transform: 'translate(0, 0) scale(1)' },
        { transform: `translate(${i % 2 === 0 ? '20vw' : '-20vw'}, ${i % 3 === 0 ? '20vh' : '-20vh'}) scale(1.2)` },
        { transform: 'translate(0, 0) scale(1)' }
      ], {
        duration: duration * 1000,
        iterations: Infinity,
        delay: delay * 1000,
        easing: 'ease-in-out'
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-[#030303]">
      <div className="orb absolute top-[10%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="orb absolute bottom-[10%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-purple-800/10 blur-[120px]" />
      <div className="orb absolute top-[40%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-purple-700/8 blur-[120px]" />
      <div className="orb absolute bottom-[30%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-purple-900/12 blur-[120px]" />
      
      {/* Mesh Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` }} />
    </div>
  );
};

export default BackgroundGlow;
