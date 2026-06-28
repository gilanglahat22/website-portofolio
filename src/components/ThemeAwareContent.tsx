// @ts-nocheck
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Cpu,
  DatabaseZap,
  Github,
  Network,
  ServerCog,
} from "lucide-react";
import MacOSWindow from "@/components/MacOSWindow";
import { achievements, experiences, portfolio, projects, skillGroups } from "@/data/portfolio";

const ProjectVisual = ({ project, className = "" }) => {
  if (project.image.endsWith(".svg")) {
    return <img src={project.image} alt={project.title} className={className} />;
  }

  return (
    <Image
      src={project.image}
      alt={project.title}
      width={360}
      height={280}
      className={className}
    />
  );
};

const systemStats = [
  { label: "Experience", value: "2+ years", detail: "learning by building" },
  { label: "Current", value: "Bukalapak", detail: "gaming marketplace" },
  { label: "Mindset", value: "Stay curious", detail: "think, build, learn, repeat" },
];

const systemSignals = [
  { icon: ServerCog, label: "engineering.work", value: "APIs, web apps, and product systems" },
  { icon: Network, label: "learning.mode", value: "Read, ask, build, and iterate" },
  { icon: Cpu, label: "ai.sandbox", value: "LLMs, OCR, and small experiments" },
  { icon: DatabaseZap, label: "off.hours", value: "Algorithms, contests, and side projects" },
];

const ThemeAwareContent = () => {
  const featuredProjects = projects.slice(0, 2);
  const projectCards = projects.slice(0, 6);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MacOSWindow title="~/portfolio/software-engineer" variant="system" className="w-full">
          <div className="space-y-14 px-2 py-4 sm:px-4 lg:px-6">
            <section className="terminal-shell rounded-[2rem] px-5 py-7 sm:px-8 lg:px-10">
              <div className="relative z-10 grid min-h-[620px] grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-8">
                  <div className="space-y-5">
                    <p className="terminal-command px-4 py-2 text-xs font-semibold">
                      boot --profile curious-software-engineer
                    </p>
                    <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                      Software engineer,
                      <span className="block bg-gradient-to-r from-lime-200 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                        always learning
                      </span>
                    </h1>
                    <p className="max-w-2xl text-base font-medium leading-7 text-white/72 sm:text-lg">
                      {portfolio.headline} My work has taken me through backend services, web applications,
                      distributed systems, and a few useful AI experiments along the way.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {systemStats.map((stat) => (
                      <div key={stat.label} className="terminal-stat p-4">
                        <p className="terminal-label text-[11px] uppercase tracking-[0.18em] text-white/45">{stat.label}</p>
                        <p className="mt-2 text-2xl font-extrabold text-white">{stat.value}</p>
                        <p className="mt-1 text-xs text-white/50">{stat.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/projects"
                      className="terminal-command px-5 py-3 text-sm font-semibold transition hover:border-lime-200/60 hover:bg-lime-200/10"
                    >
                      open projects
                    </Link>
                    <Link
                      href="/experience"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/75 transition hover:border-cyan-300/50 hover:text-white"
                    >
                      View experience <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={portfolio.githubUrl}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/75 transition hover:border-lime-200/50 hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="terminal-card rounded-[1.5rem] p-4">
                    <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-400" />
                        <span className="h-3 w-3 rounded-full bg-amber-300" />
                        <span className="h-3 w-3 rounded-full bg-lime-300" />
                      </div>
                      <p className="terminal-label text-xs text-white/50">runtime.status</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-[0.76fr_1fr]">
                      <div className="relative aspect-square overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/5">
                        <Image
                          src="/main_profile.jpeg"
                          alt={portfolio.name}
                          fill
                          priority
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="terminal-kicker text-xs">operator</p>
                          <h2 className="mt-2 text-2xl font-bold text-white">{portfolio.name}</h2>
                          <p className="mt-1 text-sm text-white/55">{portfolio.location}</p>
                        </div>
                        <div className="space-y-2 text-sm">
                          <p className="terminal-prompt-line">role: {experiences[0].title}</p>
                          <p className="terminal-prompt-line">company: {experiences[0].company}</p>
                          <p className="terminal-prompt-line">status: learning while shipping</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {systemSignals.map((signal) => {
                      const Icon = signal.icon;
                      return (
                        <div key={signal.label} className="terminal-card rounded-2xl p-4">
                          <Icon className="h-5 w-5 text-lime-200" />
                          <p className="terminal-label mt-3 text-xs text-lime-100">{signal.label}</p>
                          <p className="mt-1 text-sm leading-6 text-white/62">{signal.value}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <div className="text-center">
                <p className="terminal-kicker text-xs">featured deployments</p>
                <h2 className="portfolio-section-title mt-3 text-3xl">Selected Work</h2>
              </div>

              <div className="space-y-8">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.title}
                    className={`terminal-card grid items-center gap-8 rounded-[2rem] p-6 sm:p-8 lg:grid-cols-2 ${index % 2 ? "" : "lg:grid-cols-[0.9fr_1.1fr]"}`}
                  >
                    <div className={`${index % 2 ? "lg:order-2" : ""}`}>
                      <div className="mx-auto flex h-64 max-w-sm items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-8">
                        <ProjectVisual project={project} className="max-h-full w-auto object-contain" />
                      </div>
                    </div>
                    <div className="space-y-5">
                      <p className="terminal-kicker text-xs">{project.subtitle}</p>
                      <h3 className="text-3xl font-extrabold text-white">{project.title}</h3>
                      <p className="max-w-xl text-sm leading-6 text-white/70">{project.description}</p>
                      <p className="max-w-xl text-sm leading-6 text-white/60">{project.highlights[0]}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 5).map((tag) => (
                          <span key={tag} className="terminal-pill px-3 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.link ? (
                        <Link
                          href={project.link}
                          target="_blank"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-lime-200/60 hover:bg-lime-200/10"
                        >
                          {project.linkLabel ?? "Explore"} <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <div className="text-center">
                <p className="terminal-kicker text-xs">project index</p>
                <h2 className="portfolio-section-title mt-3 text-3xl">CV Selected Projects</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projectCards.map((project) => (
                  <Link
                    key={project.title}
                    href={project.link ?? "/projects"}
                    target={project.link ? "_blank" : undefined}
                    className="terminal-card group rounded-[1.5rem] p-6 transition hover:-translate-y-1 hover:border-lime-200/50"
                  >
                    <div className="mb-6 flex h-40 items-center justify-center rounded-[1.1rem] border border-white/10 bg-white/5 p-6">
                      <ProjectVisual project={project} className="max-h-full w-auto object-contain transition group-hover:scale-105" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 min-h-16 text-sm leading-6 text-white/60">{project.description}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="terminal-pill px-3 py-1">{project.category}</span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 text-white/70">
                        <BriefcaseBusiness className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <div className="text-center">
                <p className="terminal-kicker text-xs">proof of work</p>
                <h2 className="portfolio-section-title mt-3 text-3xl">Achievements</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {achievements.slice(0, 3).map((achievement) => (
                  <div key={achievement.title} className="terminal-card rounded-[1.5rem] p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-lime-200/25 bg-lime-200/10">
                        <BadgeCheck className="h-5 w-5 text-lime-200" />
                      </span>
                      <p className="font-bold text-white">{achievement.title}</p>
                    </div>
                    <p className="text-sm leading-6 text-white/60">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="terminal-shell grid items-center gap-10 rounded-[2rem] p-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="relative z-10 grid gap-3">
                {skillGroups.map((group) => (
                  <div key={group.title} className="terminal-card rounded-2xl p-4">
                    <p className="terminal-label text-xs text-lime-100">{group.title}</p>
                    <p className="mt-2 text-sm leading-6 text-white/60">{group.items.slice(0, 5).join(" / ")}</p>
                  </div>
                ))}
              </div>
              <div className="relative z-10 space-y-6">
                <p className="terminal-kicker text-xs">working toolkit</p>
                <h2 className="text-3xl font-extrabold text-white">A practical toolkit that keeps growing</h2>
                <p className="max-w-2xl text-sm leading-6 text-white/70">
                  I have worked with {skillGroups[0].items.slice(0, 5).join(", ")}, alongside
                  {` ${skillGroups[1].items.slice(0, 6).join(", ")} `}
                  to solve everyday product and engineering problems. The list changes as I learn; the fundamentals stay important.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/skills" className="terminal-command px-5 py-2.5 text-sm font-semibold">
                    inspect skills
                  </Link>
                  <Link href={portfolio.githubUrl} target="_blank" className="inline-flex items-center gap-2 text-sm font-semibold text-white/75">
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </MacOSWindow>
      </motion.div>
    </div>
  );
};

export default ThemeAwareContent;
