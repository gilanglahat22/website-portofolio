"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ProfileHighlightProps {
  src: string;
  alt: string;
  badge?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}

const ProfileHighlight = ({
  src,
  alt,
  badge,
  className = "",
  imageClassName = "",
  priority = false,
}: ProfileHighlightProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 150, damping: 18, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [10, -10]);
  const rotateY = useTransform(smoothX, [0, 1], [-12, 12]);
  const glowX = useTransform(smoothX, [0, 1], ["10%", "90%"]);
  const glowY = useTransform(smoothY, [0, 1], ["10%", "90%"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((event.clientX - rect.left) / rect.width);
    mouseY.set((event.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div
      className={`group relative ${className}`}
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[2rem] opacity-70 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "conic-gradient(from 180deg, rgba(163,230,53,0.55), rgba(34,211,238,0.5), rgba(163,230,53,0.55))",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        ref={ref}
        className="relative"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className={`relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] ${imageClassName}`}
          style={{ transform: "translateZ(0)" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            className="object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/5" />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(255,255,255,0.22), transparent 55%)`,
            }}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10"
          style={{ transform: "translateZ(20px)" }}
        />

        {badge ? (
          <motion.div
            style={{ transform: "translateZ(48px)" }}
            className="terminal-card absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-lime-200/30 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-lime-100 shadow-lg"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_8px_rgba(163,230,53,0.9)]" />
            {badge}
          </motion.div>
        ) : null}
      </motion.div>
    </div>
  );
};

export default ProfileHighlight;
