"use client";

import Image from "next/image";
import { skillGroups } from "@/data/portfolio";

export default function SkillsGrid() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="portfolio-section-title text-2xl">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400">
            CV-backed engineering skills grouped by practical working area.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="portfolio-glass-card relative overflow-hidden rounded-[2rem] p-5 text-white transition hover:-translate-y-1 hover:border-lime-200/40"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-2xl border border-lime-200/20 bg-lime-200/10 backdrop-blur">
                  <Image
                    src={group.icon}
                    alt=""
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-lg">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs font-medium text-white/75">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
