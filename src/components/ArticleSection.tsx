"use client";

import { motion } from "framer-motion";
import { slugifyHeading } from "@/lib/utils";

interface ArticleSectionProps {
  heading: string;
  body: string[];
  bullets?: string[];
  index: number;
}

const ArticleSection = ({ heading, body, bullets, index }: ArticleSectionProps) => {
  return (
    <motion.section
      id={slugifyHeading(heading)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: Math.min(index, 3) * 0.05, ease: "easeOut" }}
      className="scroll-mt-28 space-y-4"
    >
      <h2 className="flex items-center gap-3 text-2xl font-bold text-white sm:text-[1.7rem]">
        <span className="h-6 w-1 rounded-full bg-gradient-to-b from-lime-300 to-cyan-300" />
        {heading}
      </h2>
      <div className="space-y-4">
        {body.map((paragraph) => (
          <p key={paragraph} className="font-serif text-[1.05rem] leading-8 text-white/78">
            {paragraph}
          </p>
        ))}
      </div>
      {bullets ? (
        <ul className="space-y-3 pt-1">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 font-serif text-[1.02rem] leading-7 text-white/75">
              <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lime-300/80" />
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
    </motion.section>
  );
};

export default ArticleSection;
