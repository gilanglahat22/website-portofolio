"use client";

import Image from "next/image";
import AppleDock from "@/components/AppleDock";
import MacOSWindow from "@/components/MacOSWindow";
import { motion } from "framer-motion";
import { ExperienceItem, experiences, portfolio } from "@/data/portfolio";

const ExperienceCard = ({ item }: { item: ExperienceItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="w-12 h-12 card overflow-hidden flex-shrink-0">
          <Image
            src={item.logo}
            alt={item.company}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm">{item.company} | {item.date}</p>
          </div>

          <ul className="space-y-2 list-disc pl-5">
            {item.description.map((desc) => (
              <li key={desc} className="text-sm">{desc}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span key={skill} className="card px-2 py-1 text-xs rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <MacOSWindow title="Professional Experience" variant="system">
          <div className="p-6">
            <div className="mb-8 max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold mb-4">Professional Experience</h1>
              <p className="text-lg">{portfolio.summary}</p>
            </div>

            <div className="space-y-6">
              {experiences.map((experience) => (
                <ExperienceCard
                  key={`${experience.company}-${experience.date}`}
                  item={experience}
                />
              ))}
            </div>
          </div>
        </MacOSWindow>
      </main>

      <AppleDock />
    </div>
  );
}
