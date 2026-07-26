"use client";

import { useEffect, useState } from "react";
import { slugifyHeading } from "@/lib/utils";

interface ArticleTOCProps {
  headings: string[];
}

const ArticleTOC = ({ headings }: ArticleTOCProps) => {
  const [activeId, setActiveId] = useState<string>(slugifyHeading(headings[0] ?? ""));

  useEffect(() => {
    const elements = headings
      .map((heading) => document.getElementById(slugifyHeading(heading)))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: [0, 1] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <nav aria-label="Table of contents" className="sticky top-28 hidden lg:block">
      <p className="terminal-kicker text-xs">on this page</p>
      <ul className="mt-4 space-y-3 border-l border-white/10 pl-4">
        {headings.map((heading) => {
          const id = slugifyHeading(heading);
          const isActive = id === activeId;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(event) => handleClick(event, id)}
                className={`block text-sm leading-5 transition-colors ${
                  isActive ? "font-semibold text-lime-100" : "text-white/50 hover:text-white/80"
                }`}
              >
                {heading}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ArticleTOC;
