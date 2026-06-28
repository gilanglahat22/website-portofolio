"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  ExternalLink,
  Menu,
  Search,
  Terminal,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { achievements, caseStudies, experiences, portfolio, projects, skillGroups } from "@/data/portfolio";

export interface DockItem {
  name: string;
  icon: string;
  href: string;
}

interface PortfolioTopNavProps {
  dockItems: DockItem[];
  dockVisible: boolean;
  onToggleDock: () => void;
  terminalOpen: boolean;
  onOpenTerminal: () => void;
}

interface SearchItem {
  title: string;
  description: string;
  href: string;
  section: string;
  keywords: string;
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects", hasMenu: true },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

const buildSearchIndex = (): SearchItem[] => {
  const pageItems: SearchItem[] = [
    {
      title: "Home",
      description: portfolio.headline,
      href: "/",
      section: "Page",
      keywords: `${portfolio.name} ${portfolio.title} ${portfolio.summary}`,
    },
    {
      title: "About",
      description: "Profile, education, location, and professional story.",
      href: "/about",
      section: "Page",
      keywords: `${portfolio.education.institution} ${portfolio.education.thesis} ${portfolio.location}`,
    },
    {
      title: "Experience",
      description: "Professional experience and company history.",
      href: "/experience",
      section: "Page",
      keywords: experiences.map((item) => `${item.company} ${item.title}`).join(" "),
    },
    {
      title: "Projects",
      description: "Selected projects and production systems.",
      href: "/projects",
      section: "Page",
      keywords: projects.map((item) => `${item.title} ${item.tags.join(" ")}`).join(" "),
    },
    {
      title: "Skills",
      description: "Technical skills, achievements, and engineering competencies.",
      href: "/skills",
      section: "Page",
      keywords: skillGroups.map((group) => `${group.title} ${group.items.join(" ")}`).join(" "),
    },
    {
      title: "Case Studies",
      description: "Notes on projects, engineering decisions, and lessons learned.",
      href: "/blog",
      section: "Page",
      keywords: caseStudies.map((item) => `${item.title} ${item.categories.join(" ")}`).join(" "),
    },
    {
      title: "Contact",
      description: `${portfolio.email} | ${portfolio.phone}`,
      href: "/contact",
      section: "Page",
      keywords: `${portfolio.email} ${portfolio.phone} ${portfolio.location}`,
    },
    {
      title: "GitHub",
      description: "GitHub profile and repository activity.",
      href: "/github",
      section: "Page",
      keywords: portfolio.githubLabel,
    },
  ];

  const projectItems = projects.map((project) => ({
    title: project.title,
    description: project.description,
    href: "/projects",
    section: "Project",
    keywords: `${project.subtitle} ${project.highlights.join(" ")} ${project.tags.join(" ")}`,
  }));

  const experienceItems = experiences.map((experience) => ({
    title: experience.company,
    description: `${experience.title} | ${experience.date}`,
    href: "/experience",
    section: "Experience",
    keywords: `${experience.description.join(" ")} ${experience.skills.join(" ")}`,
  }));

  const skillItems = skillGroups.map((group) => ({
    title: group.title,
    description: group.items.slice(0, 5).join(", "),
    href: "/skills",
    section: "Skill",
    keywords: group.items.join(" "),
  }));

  const achievementItems = achievements.map((achievement) => ({
    title: achievement.title,
    description: achievement.description,
    href: "/skills",
    section: "Achievement",
    keywords: achievement.description,
  }));

  const caseStudyItems = caseStudies.map((study) => ({
    title: study.title,
    description: study.excerpt,
    href: `/blog/${study.slug}`,
    section: "Case Study",
    keywords: `${study.categories.join(" ")} ${study.sections.map((section) => section.heading).join(" ")}`,
  }));

  return [...pageItems, ...projectItems, ...experienceItems, ...skillItems, ...achievementItems, ...caseStudyItems];
};

export default function PortfolioTopNav({
  dockItems,
  dockVisible,
  onToggleDock,
  terminalOpen,
  onOpenTerminal,
}: PortfolioTopNavProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const currentPath = pathname ?? "/";
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchIndex = useMemo(() => buildSearchIndex(), []);

  const filteredResults = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return searchIndex.slice(0, 6);
    }

    return searchIndex
      .filter((item) => {
        const haystack = `${item.title} ${item.description} ${item.section} ${item.keywords}`.toLowerCase();
        return haystack.includes(normalizedQuery);
      })
      .slice(0, 8);
  }, [query, searchIndex]);

  const openSearch = () => {
    setSearchOpen((current) => {
      const next = !current;
      if (!current) {
        setMenuOpen(false);
        window.setTimeout(() => searchInputRef.current?.focus(), 60);
      }
      return next;
    });
  };

  const goToResult = (href: string) => {
    setSearchOpen(false);
    setMenuOpen(false);
    setQuery("");
    router.push(href);
  };

  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    const firstResult = filteredResults[0];
    if (firstResult) {
      goToResult(firstResult.href);
    }
  };

  const menuLinks = dockVisible
    ? dockItems.slice(0, 6)
    : dockItems;

  return (
    <header className="portfolio-top-nav fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="Go to home">
          <span className="portfolio-logo-mark">
            <Code2 className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="terminal-label text-lg font-extrabold tracking-tight text-white sm:text-xl">
            GilangOS
          </span>
        </Link>

        <nav className="terminal-label hidden items-center gap-8 text-sm font-medium text-white/70 md:flex lg:gap-12">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? currentPath === "/" : currentPath.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1.5 transition-colors hover:text-white ${isActive ? "text-white" : ""}`}
              >
                {item.label}
                {item.hasMenu ? <ChevronDown className="h-3.5 w-3.5" /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="relative flex items-center gap-2 text-white/80 sm:gap-3">
          <button
            type="button"
            onClick={openSearch}
            className={`portfolio-icon-button ${searchOpen ? "portfolio-icon-button-active" : ""}`}
            aria-label="Search website content"
            aria-expanded={searchOpen}
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => {
              setSearchOpen(false);
              setMenuOpen(false);
              onOpenTerminal();
            }}
            className={`portfolio-icon-button ${terminalOpen ? "portfolio-icon-button-active" : ""}`}
            aria-label="Open hacker terminal navigation"
            aria-expanded={terminalOpen}
            title="Open terminal (Ctrl+`)"
          >
            <Terminal className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={onToggleDock}
            className={`portfolio-icon-button ${dockVisible ? "portfolio-icon-button-active" : ""}`}
            aria-label={dockVisible ? "Hide Apple bottom dock" : "Show Apple bottom dock"}
            title={dockVisible ? "Hide Apple dock" : "Show Apple dock"}
          >
            <BriefcaseBusiness className="h-5 w-5" />
          </button>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => {
              setMenuOpen((current) => !current);
              setSearchOpen(false);
            }}
            className={`portfolio-icon-button ${menuOpen ? "portfolio-icon-button-active" : ""}`}
            aria-label={dockVisible ? "Open compact menu" : "Open menu options"}
            aria-expanded={menuOpen}
          >
            <Menu className="h-5 w-5" />
          </button>

          {searchOpen ? (
            <div className="portfolio-popover right-0 top-14 w-[min(92vw,28rem)]">
              <form onSubmit={handleSearchSubmit}>
                <label className="sr-only" htmlFor="portfolio-search">
                  Search website content
                </label>
                <div className="portfolio-search-bar flex items-center gap-2 rounded-2xl border border-[rgba(var(--surface-border))] bg-[rgba(var(--surface-color),0.82)] px-3 py-2">
                  <Search className="h-4 w-4 shrink-0 text-current opacity-60" />
                  <input
                    ref={searchInputRef}
                    id="portfolio-search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search projects, skills, experience..."
                    className="min-w-0 flex-1 border-0 bg-transparent px-0 py-1 text-sm shadow-none outline-none"
                  />
                  <kbd className="hidden rounded-md border border-current/10 px-1.5 py-0.5 text-[10px] opacity-55 sm:inline">
                    Enter
                  </kbd>
                </div>
              </form>

              <div className="mt-3 max-h-[22rem] overflow-y-auto pr-1">
                {filteredResults.length ? (
                  <div className="space-y-1.5">
                    {filteredResults.map((result) => (
                      <button
                        key={`${result.section}-${result.title}`}
                        type="button"
                        onClick={() => goToResult(result.href)}
                        className="portfolio-search-result group"
                      >
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-bold">{result.title}</span>
                          <span className="mt-0.5 block line-clamp-2 text-xs opacity-65">{result.description}</span>
                        </span>
                        <span className="ml-3 shrink-0 rounded-full border border-current/10 px-2 py-1 text-[10px] font-semibold opacity-70">
                          {result.section}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-current/10 p-4 text-sm opacity-70">
                    No matching content found.
                  </div>
                )}
              </div>
            </div>
          ) : null}

          {menuOpen ? (
            <div className="portfolio-popover right-0 top-14 w-[min(92vw,22rem)]">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <p className="terminal-label text-sm font-extrabold">Menu Options</p>
                  <p className="text-xs opacity-65">
                    {dockVisible ? "Compact shortcuts" : "Apple dock is hidden"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onToggleDock}
                  className="rounded-full border border-current/15 px-3 py-1.5 text-xs font-bold transition hover:bg-current/5"
                >
                  {dockVisible ? "Hide Dock" : "Show Dock"}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {menuLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="portfolio-menu-option"
                  >
                    <img src={item.icon} alt="" className="h-7 w-7 object-contain" />
                    <span className="truncate text-xs font-bold">{item.name}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <Link
                  href={portfolio.githubUrl}
                  target="_blank"
                  onClick={() => setMenuOpen(false)}
                  className="portfolio-menu-command"
                >
                  GitHub <ExternalLink className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href={portfolio.linkedinUrl}
                  target="_blank"
                  onClick={() => setMenuOpen(false)}
                  className="portfolio-menu-command"
                >
                  LinkedIn <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
