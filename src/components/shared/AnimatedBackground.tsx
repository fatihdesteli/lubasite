"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedBackground = () => {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-void-950 pointer-events-none">
      {/* 1. Deep Space Base Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-950 via-[#1a103c] to-void-950 opacity-90" />

      {/* 2. Interactive Spotlight Follower */}
      <motion.div
        className="absolute w-[800px] h-[800px] bg-violet-500/15 rounded-full blur-[120px] opacity-50"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* 3. Floating Ambient Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-violet-900/20 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-20%] right-[-20%] w-[70vw] h-[70vw] rounded-full bg-teal-900/15 blur-[130px]"
      />

      {/* 4. Mouse-Responsive Particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <Particle key={i} mouseX={mouseX} mouseY={mouseY} />
        ))}
      </div>
    </div>
  );
};

const Particle = ({ mouseX, mouseY }: { mouseX: any; mouseY: any }) => {
  const [initialX] = useState(Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000));
  const [initialY] = useState(Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000));
  const size = Math.random() * 2 + 1;
  const duration = Math.random() * 20 + 10;

  // Create a slight parallax effect based on mouse position
  const x = useMotionValue(initialX);
  const y = useMotionValue(initialY);

  useEffect(() => {
    // Optional: Add more complex physics if needed, currently just drifting
  }, []);

  return (
    <motion.div
      className="absolute rounded-full bg-white/40"
      style={{
        width: size,
        height: size,
        x,
        y,
      }}
      animate={{
        y: [initialY, initialY - 100, initialY],
        opacity: [0.2, 0.8, 0.2],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};
