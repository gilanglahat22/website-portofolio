import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <main className="max-w-6xl mx-auto px-5 py-10 sm:px-8">
      <div className="page-intro">
        <p className="sketch-eyebrow">MY ENGINEERING JOURNEY</p>
        <h1>Experience, one chapter at a time.</h1>
        <p>
          From first production code to shared platforms and distributed systems
          — a continuing journey of building, learning, and delivering value.
        </p>
      </div>
      <div className="career-timeline">
        {experiences.map((item, index) => (
          <article key={item.company} className="career-entry">
            <div className="career-date">
              <span className="career-dot" /> <span>{item.date}</span>
              {item.date.endsWith("Present") ? (
                <span className="current-badge">Current</span>
              ) : null}
            </div>
            <div className="terminal-card career-card">
              <div className="flex items-start gap-4">
                <div
                  className={`company-icon tone-${["blue", "peach", "sage", "yellow"][index % 4]}`}
                >
                  <Image
                    src={item.logo}
                    alt=""
                    width={42}
                    height={42}
                    className="object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h2 className="text-xl sm:text-2xl font-extrabold">
                    {item.company}
                  </h2>
                  {item.subtitle ? (
                    <p className="text-xs mt-1 opacity-70">{item.subtitle}</p>
                  ) : null}
                  <h3 className="font-semibold mt-2">{item.title}</h3>
                  <p className="inline-flex items-center gap-1.5 text-sm mt-2 opacity-75">
                    <MapPin size={14} />
                    {item.location}
                  </p>
                </div>
              </div>
              <ul className="career-details">
                {item.description.map((desc) => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span key={skill} className="terminal-pill px-3 py-1">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/contact" className="sketch-button">
          Let’s work together <ArrowUpRight size={18} />
        </Link>
      </div>
    </main>
  );
}
