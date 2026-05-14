"use client";

import AppleDock from "@/components/AppleDock";
import MacOSWindow from "@/components/MacOSWindow";
import SkillsGrid from "@/components/SkillsGrid";
import { achievements, portfolio, skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <div className="min-h-screen">
      <main className="pt-8 px-6 pb-32">
        <div className="max-w-6xl mx-auto space-y-8">
          <MacOSWindow title="My Skills" variant="system">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">Technical Skills</h1>
              <p>
                {portfolio.summary} My technical foundation includes Object-Oriented Programming,
                SOLID Design Principle, Data Structures and Algorithms, System Design, REST API design,
                cloud computing, and production-oriented web development.
              </p>
            </div>
          </MacOSWindow>

          <MacOSWindow title="Skills Overview" variant="system" className="w-full">
            <SkillsGrid />
          </MacOSWindow>

          <MacOSWindow title="Achievements & Competitions" variant="system">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Competitive Programming Achievements</h2>
              <p>Programming competition achievements listed in the CV.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                {achievements.map((achievement) => {
                  const content = (
                    <>
                      <h3 className="font-semibold text-lg">{achievement.title}</h3>
                      <p className="text-sm mt-1">{achievement.description}</p>
                      {achievement.linkLabel ? (
                        <span className="text-xs text-lime-200 mt-2 inline-block">
                          {achievement.linkLabel}
                        </span>
                      ) : null}
                    </>
                  );

                  return achievement.link ? (
                    <a
                      key={achievement.title}
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card p-4 border-l-4 border-lime-200/70 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={achievement.title} className="card p-4 border-l-4 border-lime-200/70">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </MacOSWindow>

          <MacOSWindow title="Core Competencies" variant="system">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Technologies & Expertise</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                {skillGroups.map((group) => (
                  <div key={group.title} className="card p-4 rounded-lg">
                    <h3 className="font-semibold text-lime-100">{group.title}</h3>
                    <p className="text-sm mt-2">{group.items.join(", ")}.</p>
                  </div>
                ))}
              </div>
            </div>
          </MacOSWindow>
        </div>
      </main>

      <AppleDock />
    </div>
  );
}
