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
          <MacOSWindow title="~/skills/profile" variant="system">
            <div className="space-y-4">
              <p className="terminal-kicker text-xs">capability map</p>
              <h1 className="text-3xl font-bold">Technical Skills</h1>
              <p className="text-white/70">
                {portfolio.summary} The CV groups my skill set across full stack UI, backend architecture,
                AI/data analytics, and infrastructure delivery.
              </p>
            </div>
          </MacOSWindow>

          <MacOSWindow title="~/skills/modules" variant="system" className="w-full">
            <SkillsGrid />
          </MacOSWindow>

          <MacOSWindow title="~/skills/achievements" variant="system">
            <div className="space-y-4">
              <p className="terminal-kicker text-xs">proof of work</p>
              <h2 className="text-2xl font-bold">Achievements</h2>
              <p className="text-white/70">Programming competition achievements listed in the CV.</p>

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
                      className="terminal-card block rounded-2xl border-l-4 border-lime-200/70 p-4 transition-all duration-300 hover:scale-[1.02] hover:border-lime-200/70"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={achievement.title} className="terminal-card rounded-2xl p-4 border-l-4 border-lime-200/70">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </MacOSWindow>

          <MacOSWindow title="~/skills/core-competencies" variant="system">
            <div className="space-y-4">
              <p className="terminal-kicker text-xs">stack trace</p>
              <h2 className="text-2xl font-bold">Technologies & Expertise</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                {skillGroups.map((group) => (
                  <div key={group.title} className="terminal-card p-4 rounded-2xl">
                    <h3 className="font-semibold text-lime-100">{group.title}</h3>
                    <p className="text-sm mt-2 text-white/65">{group.items.join(", ")}.</p>
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
