"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppleDock from "@/components/AppleDock";
import MacOSWindow from "@/components/MacOSWindow";
import { ProjectItem, projects } from "@/data/portfolio";

const filters = [
  { key: null, label: "All" },
  { key: "ai", label: "AI" },
  { key: "web", label: "Web" },
  { key: "open-source", label: "Open Source" },
];

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isSvg = project.image.endsWith(".svg");

  return (
    <div
      className={`transition-all duration-300 ${isHovered ? "scale-[1.02]" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MacOSWindow title={`~/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`} variant="system" className="h-full">
        <div className="space-y-4">
          <div className="relative h-48 w-full overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/5">
            {isSvg ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain p-6"
              />
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            )}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`} />
          </div>

          <div>
            <p className="terminal-kicker text-xs">{project.subtitle}</p>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-white/70">{project.description}</p>
          </div>

          <ul className="space-y-2 list-disc pl-5">
            {project.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight} className="text-sm text-white/65">{highlight}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="terminal-pill px-2.5 py-1">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex justify-end">
            {project.link ? (
              <Link
                href={project.link}
                target="_blank"
                className="terminal-command px-4 py-2 text-sm font-medium transition-colors hover:border-lime-200/60"
              >
                {project.linkLabel ?? "View Project"}
              </Link>
            ) : (
              <span className="terminal-pill px-4 py-2 opacity-70">
                Private or in progress
              </span>
            )}
          </div>
        </div>
      </MacOSWindow>
    </div>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  const filteredProjects = filter ? projects.filter((project) => project.category === filter) : projects;

  return (
    <div className="min-h-screen">
      <main className="pt-8 px-6 pb-32">
        <div className="max-w-6xl mx-auto space-y-8">
          <MacOSWindow title="~/projects/index" variant="system">
            <div className="space-y-4">
              <p className="terminal-kicker text-xs">domain catalog</p>
              <h1 className="text-3xl font-bold">Selected Projects</h1>
              <p className="text-white/70">
                Selected project work from the CV: AI-powered financial document processing, education
                platforms, a Japanese B2B matching product, internal voting workflows, and an AI mental
                wellness chatbot.
              </p>

              <div className="flex justify-center my-6">
                <div className="terminal-card flex flex-wrap justify-center gap-2 rounded-xl p-1 w-full sm:w-auto">
                  {filters.map((item) => (
                    <button
                      key={item.label}
                      className={`terminal-label rounded-lg px-4 py-2 text-sm font-medium transition-all ${filter === item.key ? "bg-lime-200/20 shadow-sm text-lime-50" : "text-white/70 hover:text-white"}`}
                      onClick={() => setFilter(item.key)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </MacOSWindow>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </main>

      <AppleDock />
    </div>
  );
}
