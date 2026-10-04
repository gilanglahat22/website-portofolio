import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Braces,
  Network,
  Sigma,
  Trophy,
  Github,
  ArrowRight,
} from "lucide-react";
import {
  achievements,
  experiences,
  portfolio,
  projects,
} from "@/data/portfolio";

const interests = [
  {
    icon: Braces,
    title: "Backend development",
    text: "Reliable APIs, clear boundaries, and services built to last.",
    tone: "sage",
  },
  {
    icon: Network,
    title: "Distributed systems",
    text: "Connecting services. Making complex systems work together.",
    tone: "blue",
  },
  {
    icon: Sigma,
    title: "Mathematics",
    text: "Reasoning from fundamentals, one useful abstraction at a time.",
    tone: "peach",
  },
  {
    icon: Trophy,
    title: "Competitive programming",
    text: "A love of algorithms, constraints, and that aha! moment.",
    tone: "yellow",
  },
];

export default function ThemeAwareContent() {
  return (
    <div className="sketch-home max-w-6xl mx-auto">
      <section className="sketch-hero">
        <div className="hero-copy">
          <p className="sketch-eyebrow">
            <span className="status-dot" /> SOFTWARE ENGINEER & CURIOUS BUILDER
          </p>
          <h1>
            Hi, I’m Gilang.
            <br />I build things
            <br />
            <span className="hero-highlight">that matter.</span>
            <span className="hero-star" aria-hidden="true">
              ✦
            </span>
          </h1>
          <p className="hero-description">{portfolio.headline}</p>
          <div className="flex flex-wrap gap-3 mt-7">
            <Link className="sketch-button" href="/projects">
              Explore my work <ArrowUpRight size={18} />
            </Link>
            <Link className="sketch-button secondary" href="/contact">
              Let’s talk <ArrowRight size={18} />
            </Link>
          </div>
          <div className="hero-note">
            <span aria-hidden="true">↳</span> A little curiosity. A lot of
            building.
          </div>
        </div>
        <div className="hero-art">
          <span className="art-note">my happy place</span>
          <Image
            src="/illustrations/engineer-desk.svg"
            alt="Cartoon engineering workspace with a laptop, connected services, books, a plant, and a cup of tea"
            width={600}
            height={490}
            priority
          />
          <div className="hero-profile">
            <Image
              src="/main_profile.jpeg"
              alt={portfolio.name}
              width={46}
              height={46}
            />
            <div>
              <strong>{portfolio.name}</strong>
              <p>Jakarta, Indonesia · Building with purpose</p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="sketch-eyebrow">WHAT MAKES ME TICK</p>
            <h2>Big ideas. Thoughtful engineering.</h2>
          </div>
          <span className="handwritten" aria-hidden="true">
            always learning ↙
          </span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {interests.map(({ icon: Icon, title, text, tone }) => (
            <article key={title} className={`interest-card tone-${tone}`}>
              <span className="interest-icon">
                <Icon size={26} strokeWidth={1.8} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="home-section">
        <div className="section-heading">
          <div>
            <p className="sketch-eyebrow">FROM IDEA TO IMPACT</p>
            <h2>A few things I’ve built</h2>
          </div>
          <Link className="text-link" href="/projects">
            All projects <ArrowUpRight size={17} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <article key={project.title} className="terminal-card home-project">
              <div
                className={`project-cover tone-${["blue", "yellow", "peach"][index]}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={220}
                  height={130}
                  className="object-contain max-h-32 w-auto"
                />
                <span className="project-number">0{index + 1}</span>
              </div>
              <div className="p-5">
                <p className="terminal-kicker text-xs">
                  {project.category === "ai"
                    ? "APPLIED AI"
                    : project.category === "web"
                      ? "PLATFORM ENGINEERING"
                      : "EDUCATION"}
                </p>
                <h3 className="mt-2 text-xl font-extrabold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span className="terminal-pill px-2 py-1" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link ?? "/projects"}
                  target={project.link ? "_blank" : undefined}
                  rel="noreferrer"
                  className="text-link mt-5"
                >
                  {project.linkLabel ?? "Explore project"}{" "}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="home-section grid lg:grid-cols-2 gap-7">
        <div className="terminal-card p-6 sm:p-8">
          <p className="sketch-eyebrow">THE JOURNEY SO FAR</p>
          <h2 className="text-2xl font-extrabold mt-3 mb-6">
            Learning through real work
          </h2>
          <div className="space-y-5">
            {experiences.slice(0, 3).map((item) => (
              <div key={item.company} className="career-preview">
                <Image
                  src={item.logo}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-lg object-contain"
                />
                <div>
                  <h3 className="font-bold">{item.company}</h3>
                  <p className="text-sm">{item.title}</p>
                  <p className="text-xs mt-1 opacity-70">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/experience" className="text-link mt-6">
            My full journey <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="terminal-card p-6 sm:p-8 tone-yellow">
          <p className="sketch-eyebrow">A PROBLEM-SOLVER AT HEART</p>
          <h2 className="text-2xl font-extrabold mt-3 mb-6">
            Small wins, big motivation.
          </h2>
          {achievements.slice(0, 3).map((item) => (
            <div key={item.title} className="achievement-preview">
              <Trophy size={20} className="shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm leading-6 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
          <Link href="/skills" className="text-link mt-5">
            Skills & achievements <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <section className="home-cta tone-sage">
        <span className="cta-spark" aria-hidden="true">
          ✦
        </span>
        <p className="sketch-eyebrow">GOOD THINGS START WITH A CONVERSATION</p>
        <h2>Let’s build something useful.</h2>
        <p>
          Have a problem to solve, an idea to explore, or just want to say hi?
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <Link href="/contact" className="sketch-button">
            Say hello <ArrowUpRight size={18} />
          </Link>
          <Link
            href={portfolio.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="sketch-button secondary"
          >
            <Github size={18} /> Find me on GitHub
          </Link>
        </div>
      </section>
    </div>
  );
}
