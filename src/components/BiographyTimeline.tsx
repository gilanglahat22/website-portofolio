"use client";

import { motion } from "framer-motion";
import type { LifeChapter } from "@/data/portfolio";

const BiographyTimeline = ({ chapters }: { chapters: LifeChapter[] }) => {
  return (
    <div className="relative pl-10 sm:pl-12">
      <div className="absolute bottom-1 left-[15px] top-1 w-px bg-gradient-to-b from-lime-200/70 via-cyan-300/40 to-transparent sm:left-[19px]" />
      <motion.div
        aria-hidden="true"
        className="absolute left-[11px] h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_14px_rgba(163,230,53,0.9)] sm:left-[15px]"
        animate={{ top: ["2%", "98%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatType: "loop" }}
      />

      <div className="space-y-8">
        {chapters.map((chapter, index) => (
          <motion.div
            key={chapter.year}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: Math.min(index, 4) * 0.06, ease: "easeOut" }}
            className="relative"
          >
            <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-lime-200 bg-black sm:-left-[31px]" />

            <div className="terminal-card rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
              <p className="terminal-kicker text-xs">{chapter.year}</p>
              <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">{chapter.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{chapter.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {chapter.tags.map((tag) => (
                  <span key={tag} className="terminal-pill px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BiographyTimeline;
