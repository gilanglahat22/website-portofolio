"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
const filters = [
  { key: null, label: "Everything" },
  { key: "ai", label: "Applied AI" },
  { key: "web", label: "Web & platforms" },
  { key: "open-source", label: "Independent" },
];
export default function Projects() {
  const [filter, setFilter] = useState<string | null>(null);
  const selected = filter
    ? projects.filter((project) => project.category === filter)
    : projects;
  return (
    <main className="project-index max-w-6xl mx-auto px-6 py-12">
      <header className="editorial-intro">
        <p className="section-index">
          The project index / {String(projects.length).padStart(2, "0")} entries
        </p>
        <h1>
          Things I’ve
          <br />
          <em>put into the world.</em>
        </h1>
        <p>
          Financial data pipelines, business platforms, and independent
          experiments. A selection of the systems I’ve worked on.
        </p>
      </header>
      <div className="index-filters" aria-label="Filter projects">
        {filters.map((item) => (
          <button
            key={item.label}
            aria-pressed={filter === item.key}
            onClick={() => setFilter(item.key)}
          >
            {item.label}
            <span>
              {String(
                item.key
                  ? projects.filter((project) => project.category === item.key)
                      .length
                  : projects.length,
              ).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
      <div>
        {selected.map((project) => (
          <article key={project.title} className="project-index-entry">
            <span className="work-index">
              {String(projects.indexOf(project) + 1).padStart(2, "0")}
            </span>
            <div className={`index-project-art work-${project.category}`}>
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={260}
                className="object-contain"
              />
            </div>
            <div className="index-project-copy">
              <p className="folio-meta">{project.subtitle}</p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p className="work-stack">{project.tags.join(" / ")}</p>
              <details className="project-notes">
                <summary>Engineering notes</summary>
                <ul>
                  {project.highlights.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </details>
              {project.link ? (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="ink-link"
                >
                  {project.linkLabel ?? "View project"}
                  <ArrowUpRight size={17} />
                </Link>
              ) : (
                <span className="folio-meta">Private / In progress</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
