// @ts-nocheck
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, BriefcaseBusiness, Github, Play, ServerCog } from "lucide-react";
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
        <MacOSWindow title="Portfolio Desktop" variant="system" className="w-full">
          <div className="space-y-16 px-2 py-4 sm:px-4 lg:px-6">
            <section className="grid min-h-[620px] grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-8">
                <div className="space-y-5">
                  <p className="inline-flex max-w-full items-start gap-2 rounded-full border border-lime-200/20 bg-white/5 px-4 py-2 text-left text-sm font-semibold leading-5 text-lime-100">
                    <ServerCog className="mt-0.5 h-4 w-4 shrink-0" />
                    {portfolio.title}
                  </p>
                  <h1 className="max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                    Build Reliable
                    <span className="block text-white/75">Systems</span>
                  </h1>
                  <p className="max-w-2xl text-base font-medium leading-7 text-white/70 sm:text-lg">
                    {portfolio.headline} I turn backend architecture, distributed processing, and
                    AI document workflows into production software that teams can operate with confidence.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/projects"
                    className="inline-flex min-w-36 items-center justify-center rounded-xl border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-lime-200 hover:bg-lime-200/10"
                  >
                    Explore
                  </Link>
                  <Link
                    href={portfolio.githubUrl}
                    target="_blank"
                    className="inline-flex items-center gap-3 text-sm font-semibold text-white/80"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/60">
                      <Play className="h-5 w-5 fill-white" />
                    </span>
                    GitHub Profile
                  </Link>
                </div>

                <div className="portfolio-glass-card max-w-md rounded-[2rem] p-5">
                  <div className="flex items-center gap-4">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/20">
                      <Image src="/main_profile.jpeg" alt={portfolio.name} fill className="object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-bold text-white">{portfolio.name}</p>
                      <p className="text-sm text-lime-200">{portfolio.location}</p>
                    </div>
                  </div>
                <p className="mt-5 text-sm leading-6 text-white/70">
                    {portfolio.summary}
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="portfolio-glass-card ml-auto max-w-md rounded-[4rem] p-8">
                  <div className="mx-auto mb-8 h-56 w-56 overflow-hidden rounded-[3rem] border border-white/20 bg-white/5">
                    <Image
                      src="/main_profile.jpeg"
                      alt={portfolio.name}
                      width={360}
                      height={360}
                      priority
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <p className="text-base font-medium text-white/75">Current Role</p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-3xl font-light text-white">{experiences[0].company}</h2>
                      <p className="mt-2 text-sm text-white/60">{experiences[0].title}</p>
                    </div>
                    <ArrowUpRight className="h-7 w-7 text-white/70" />
                  </div>
                  <div className="mt-8 flex justify-center gap-2">
                    <span className="h-1.5 w-8 rounded-full bg-white/80" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                  </div>
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <div className="text-center">
                <h2 className="portfolio-section-title text-3xl">Selected Work</h2>
              </div>

              <div className="space-y-8">
                {featuredProjects.map((project, index) => (
                  <div
                    key={project.title}
                    className={`portfolio-glass-card grid items-center gap-8 rounded-[3.5rem] p-6 sm:p-8 lg:grid-cols-2 ${index % 2 ? "" : "lg:grid-cols-[0.9fr_1.1fr]"}`}
                  >
                    <div className={`${index % 2 ? "lg:order-2" : ""}`}>
                      <div className="mx-auto flex h-64 max-w-sm items-center justify-center overflow-hidden rounded-[2.5rem] bg-white/5 p-8">
                        <ProjectVisual project={project} className="max-h-full w-auto object-contain" />
                      </div>
                    </div>
                    <div className="space-y-5">
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-200/75">{project.subtitle}</p>
                      <h3 className="text-3xl font-extrabold text-white">{project.title}</h3>
                      <p className="max-w-xl text-sm leading-6 text-white/70">{project.description}</p>
                      <p className="max-w-xl text-sm leading-6 text-white/60">{project.highlights[0]}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 5).map((tag) => (
                          <span key={tag} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.link ? (
                        <Link
                          href={project.link}
                          target="_blank"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-lime-200 hover:bg-lime-200/10"
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
                <h2 className="portfolio-section-title text-3xl">CV Selected Projects</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projectCards.map((project) => (
                  <Link
                    key={project.title}
                    href={project.link ?? "/projects"}
                    target={project.link ? "_blank" : undefined}
                    className="portfolio-glass-card group rounded-[2rem] p-6 transition hover:-translate-y-1 hover:border-lime-200/50"
                  >
                    <div className="mb-6 flex h-40 items-center justify-center rounded-[1.5rem] bg-white/5 p-6">
                      <ProjectVisual project={project} className="max-h-full w-auto object-contain transition group-hover:scale-105" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 min-h-16 text-sm leading-6 text-white/60">{project.description}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-sm font-semibold text-lime-100">{project.category}</span>
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
                <h2 className="portfolio-section-title text-3xl">Achievements</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {achievements.slice(0, 3).map((achievement) => (
                  <div key={achievement.title} className="portfolio-glass-card rounded-[2rem] p-6">
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

            <section className="portfolio-glass-card grid items-center gap-10 rounded-[3.5rem] p-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="flex justify-center">
                <div className="relative h-72 w-72 overflow-hidden rounded-[3rem] border border-white/20">
                  <Image src="/main_profile.jpeg" alt={portfolio.name} fill className="object-cover object-top" />
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-lime-200/75">Core Skills</p>
                <h2 className="text-3xl font-extrabold text-white">Full stack, AI, backend, and cloud-native delivery</h2>
                <p className="max-w-2xl text-sm leading-6 text-white/70">
                  {skillGroups[0].items.slice(0, 5).join(", ")}. I pair those fundamentals with
                  {` ${skillGroups[1].items.slice(0, 6).join(", ")} `}
                  to ship maintainable production platforms.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/experience" className="rounded-xl border border-white/60 px-5 py-2.5 text-sm font-semibold text-white">
                    Explore
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
