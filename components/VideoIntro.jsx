"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VideoIntro = ({ onComplete }) => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Ensure video plays immediately
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay was prevented:", error);
        // If autoplay fails, we might still want to trigger onComplete after some time
        // or show a play button. But usually, muted autoplay works.
      });
    }
  }, [isVideoLoaded]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: "blur(20px)",
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
    >
      <video
        ref={videoRef}
        src="/v2.mp4"
        autoPlay
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        onEnded={onComplete}
        className="h-full w-full object-cover"
      />
      
      {/* Premium overlay to blend with the site's aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 pointer-events-none" />
      
      {/* Subtle loader if video takes a moment */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-2 border-purple-500 border-t-transparent rounded-full"
          />
        </div>
      )}
    </motion.div>
  );
};

export default VideoIntro;
