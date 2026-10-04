import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  achievements,
  experiences,
  portfolio,
  projects,
} from "@/data/portfolio";

const workNotes: Record<string, string> = {
  "Nexius AI":
    "From a financial document to data you can actually use. OCR, distributed workers, and the details between them.",
  TELISIK:
    "A free place for Indonesian students to prepare for UTBK. Built around access to learning.",
  Hashigake:
    "Connecting businesses in Japan. Real-time meetings, messaging, and services across a multi-tenant platform.",
};

export default function ThemeAwareContent() {
  return (
    <div className="field-home">
      <section className="field-hero">
        <div className="field-hero-copy">
          <p className="folio-meta">
            Software engineer <span>Jakarta, Indonesia</span>
          </p>
          <h1>
            Gilang
            <br />
            <em>Ramadhan.</em>
            <span className="name-period" aria-hidden="true" />
          </h1>
          <p className="field-intro">
            I’m a passionate Software Engineer with expertise in backend
            development, distributed systems, mathematics, and competitive
            programming, dedicated to delivering value through technology.
          </p>
          <div className="field-hero-links">
            <Link href="/projects" className="ink-link">
              Selected work <ArrowUpRight size={18} />
            </Link>
            <Link href="/about" className="quiet-link">
              A little about me ↗
            </Link>
          </div>
          <div className="field-current">
            <span className="status-dot" />
            <div>
              <span>Currently building at</span>
              <p>
                Bukalapak <span className="current-divider">/</span> LnData Inc
              </p>
            </div>
          </div>
        </div>
        <div className="field-drawing">
          <div className="drawing-caption">
            <span>Fig. 01</span>
            <span>A few connected ideas</span>
          </div>
          <Image
            src="/illustrations/systems-notes.svg"
            alt="Hand-drawn cartoon of an API, a queue, and connected workers, with notes about reliability and algorithms"
            width={620}
            height={490}
            priority
          />
          <figure className="portrait-note">
            <Image
              src="/main_profile.jpeg"
              alt={portfolio.name}
              width={88}
              height={105}
              className="object-cover"
            />
            <figcaption>
              Gilang, away
              <br />
              from the editor.
            </figcaption>
          </figure>
          <p className="drawing-footnote">Queues, workers & feedback.</p>
        </div>
      </section>
      <div className="field-interests">
        <span className="folio-meta">Things I keep returning to</span>
        <p>
          Backend development <i>/</i> Distributed systems <i>/</i> Mathematics{" "}
          <i>/</i> Competitive programming
        </p>
      </div>
      <section className="field-work">
        <div className="field-section-heading">
          <span className="section-index">01 / Selected work</span>
          <h2>
            In production.
            <br />
            <em>And in progress.</em>
          </h2>
          <Link href="/projects" className="quiet-link">
            Full project index ↗
          </Link>
        </div>
        <div className="field-work-list">
          {projects.slice(0, 3).map((project, index) => (
            <Link
              key={project.title}
              href={project.link ?? "/projects"}
              target={project.link ? "_blank" : undefined}
              rel="noreferrer"
              className={`field-work-row work-${project.category}`}
            >
              <span className="work-index">0{index + 1}</span>
              <div className="work-identity">
                <span className="folio-meta">
                  {project.category === "ai"
                    ? "Applied AI · Financial data"
                    : project.category === "web"
                      ? "Backend · B2B platform"
                      : "Education · Independent project"}
                </span>
                <h3>{project.title}</h3>
                <span className="work-stack">
                  {project.tags.slice(0, 3).join(" / ")}
                </span>
              </div>
              <p>{workNotes[project.title]}</p>
              <div className="work-thumbnail">
                <Image
                  src={project.image}
                  alt=""
                  width={150}
                  height={110}
                  className="object-contain"
                />
              </div>
              <ArrowUpRight className="work-arrow" size={24} />
            </Link>
          ))}
        </div>
      </section>
      <section className="field-background">
        <div>
          <span className="section-index">02 / Along the way</span>
          <h2>
            The work
            <br />
            <em>behind the work.</em>
          </h2>
          <p className="field-section-note">
            Informatics Engineering at ITB. Algorithmic puzzles, production
            systems, and learning from both.
          </p>
          <Link href="/about" className="quiet-link">
            Read my story ↗
          </Link>
        </div>
        <div className="field-career">
          {experiences.slice(0, 3).map((item) => (
            <div key={item.company} className="field-career-row">
              <span>{item.date}</span>
              <h3>{item.company}</h3>
              <p>{item.title}</p>
            </div>
          ))}
          <Link href="/experience" className="ink-link">
            All experience <ArrowUpRight size={17} />
          </Link>
        </div>
        <aside className="contest-note">
          <span className="note-pin" aria-hidden="true" />
          <p className="folio-meta">Outside the day job</p>
          <h3>
            Thinking
            <br />
            <em>under a clock.</em>
          </h3>
          <p>
            {achievements.find((item) => item.title.includes("ICPC"))?.title}
          </p>
          <p className="contest-description">
            Competitive programming is where I learned to reason from
            constraints. I still come back to it.
          </p>
          <Link href="/skills" className="quiet-link">
            Skills & contest notes ↗
          </Link>
          <span className="contest-doodle" aria-hidden="true">
            O(n log n)
          </span>
        </aside>
      </section>
      <section className="field-contact">
        <span className="section-index">03 / Get in touch</span>
        <h2>
          Have something
          <br />
          <em>in mind?</em>
        </h2>
        <div>
          <p>
            I’m happy to talk about engineering, collaboration, or an
            interesting problem.
          </p>
          <Link href={`mailto:${portfolio.email}`} className="contact-address">
            {portfolio.email}
            <ArrowUpRight size={24} />
          </Link>
          <Link href="/contact" className="quiet-link">
            More ways to connect ↗
          </Link>
        </div>
      </section>
    </div>
  );
}
