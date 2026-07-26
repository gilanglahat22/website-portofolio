"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ReadingProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-lime-300 via-emerald-300 to-cyan-300"
      style={{ scaleX }}
    />
  );
};

export default ReadingProgressBar;
