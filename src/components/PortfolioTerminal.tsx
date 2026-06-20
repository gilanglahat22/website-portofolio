"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { DockItem } from "@/components/PortfolioTopNav";
import { portfolio, projects, skillGroups } from "@/data/portfolio";

interface PortfolioTerminalProps {
  open: boolean;
  onClose: () => void;
  dockItems: DockItem[];
}

interface TerminalLine {
  id: number;
  type: "input" | "output" | "error" | "success";
  text: string;
}

const aliases: Record<string, string> = {
  case: "/blog",
  cases: "/blog",
  casestudies: "/blog",
  "case-studies": "/blog",
  work: "/projects",
  project: "/projects",
  projects: "/projects",
  skill: "/skills",
  skills: "/skills",
  exp: "/experience",
  experience: "/experience",
  about: "/about",
  home: "/",
  contact: "/contact",
  github: "/github",
};

const initialLines: TerminalLine[] = [
  {
    id: 1,
    type: "success",
    text: "GilangOS terminal online. Type `help` to list available commands.",
  },
  {
    id: 2,
    type: "output",
    text: "Shortcut: Ctrl+` or Cmd+` to toggle this console.",
  },
];

export default function PortfolioTerminal({ open, onClose, dockItems }: PortfolioTerminalProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [command, setCommand] = useState("");
  const [lines, setLines] = useState<TerminalLine[]>(initialLines);

  const routes = useMemo(() => {
    return dockItems.map((item) => ({
      name: item.name.toLowerCase().replace(/\s+/g, "-"),
      label: item.name,
      href: item.href,
    }));
  }, [dockItems]);

  useEffect(() => {
    if (!open) return;

    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 80);

    return () => window.clearTimeout(focusTimer);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [lines, open]);

  const pushLines = (newLines: Omit<TerminalLine, "id">[]) => {
    setLines((current) => {
      const startId = current.length ? current[current.length - 1].id + 1 : 1;
      return [
        ...current,
        ...newLines.map((line, index) => ({
          ...line,
          id: startId + index,
        })),
      ];
    });
  };

  const resolveRoute = (target: string) => {
    const normalizedTarget = target.toLowerCase().replace(/^\//, "").trim();
    const directAlias = aliases[normalizedTarget];

    if (directAlias) {
      return directAlias;
    }

    const route = routes.find((item) => {
      const normalizedLabel = item.label.toLowerCase().replace(/\s+/g, "-");
      return item.name === normalizedTarget || normalizedLabel === normalizedTarget;
    });

    return route?.href ?? null;
  };

  const runCommand = (rawCommand: string) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    const normalized = trimmed.toLowerCase();
    const [baseCommand, ...args] = normalized.split(/\s+/);
    const target = args.join(" ");

    pushLines([{ type: "input", text: trimmed }]);

    if (baseCommand === "clear") {
      setLines(initialLines);
      return;
    }

    if (baseCommand === "close" || baseCommand === "exit") {
      pushLines([{ type: "success", text: "Closing terminal session..." }]);
      window.setTimeout(onClose, 180);
      return;
    }

    if (baseCommand === "help" || baseCommand === "?") {
      pushLines([
        { type: "output", text: "Available commands:" },
        { type: "output", text: "  ls                         list all portfolio routes" },
        { type: "output", text: "  open <page>                open page: home, about, projects, skills, experience, contact, github" },
        { type: "output", text: "  cd <page> / go <page>      aliases for open" },
        { type: "output", text: "  domains                    show domain experience" },
        { type: "output", text: "  skills                     show core technical modules" },
        { type: "output", text: "  projects                   open selected projects" },
        { type: "output", text: "  github / linkedin / email  external profile actions" },
        { type: "output", text: "  clear / close              reset or close terminal" },
      ]);
      return;
    }

    if (baseCommand === "ls") {
      pushLines(routes.map((route) => ({
        type: "output",
        text: `${route.href.padEnd(14, " ")} ${route.label}`,
      })));
      return;
    }

    if (baseCommand === "whoami") {
      pushLines([
        { type: "success", text: portfolio.name },
        { type: "output", text: portfolio.title },
        { type: "output", text: portfolio.summary },
      ]);
      return;
    }

    if (baseCommand === "domains") {
      pushLines([
        { type: "success", text: "Domain experience loaded:" },
        { type: "output", text: "accounting, consulting, AI, gaming, marketplace, C2C, B2B companies" },
      ]);
      return;
    }

    if (baseCommand === "skills") {
      pushLines(skillGroups.map((group) => ({
        type: "output",
        text: `${group.title}: ${group.items.slice(0, 6).join(", ")}`,
      })));
      return;
    }

    if (baseCommand === "projects") {
      router.push("/projects");
      pushLines([
        { type: "success", text: "Opening /projects" },
        { type: "output", text: projects.slice(0, 4).map((project) => project.title).join(" | ") },
      ]);
      return;
    }

    if (baseCommand === "github" && !target) {
      window.open(portfolio.githubUrl, "_blank", "noopener,noreferrer");
      pushLines([{ type: "success", text: `Opening ${portfolio.githubLabel}` }]);
      return;
    }

    if (baseCommand === "linkedin") {
      window.open(portfolio.linkedinUrl, "_blank", "noopener,noreferrer");
      pushLines([{ type: "success", text: "Opening LinkedIn profile" }]);
      return;
    }

    if (baseCommand === "email") {
      window.location.href = `mailto:${portfolio.email}`;
      pushLines([{ type: "success", text: `Preparing email to ${portfolio.email}` }]);
      return;
    }

    if (["open", "go", "cd"].includes(baseCommand)) {
      const route = resolveRoute(target);

      if (!route) {
        pushLines([
          { type: "error", text: `Unknown route: ${target || "(empty)"}` },
          { type: "output", text: "Try `ls` or `open projects`." },
        ]);
        return;
      }

      router.push(route);
      pushLines([{ type: "success", text: `Opening ${route}` }]);
      return;
    }

    const fallbackRoute = resolveRoute(baseCommand);
    if (fallbackRoute) {
      router.push(fallbackRoute);
      pushLines([{ type: "success", text: `Opening ${fallbackRoute}` }]);
      return;
    }

    pushLines([
      { type: "error", text: `Command not found: ${trimmed}` },
      { type: "output", text: "Type `help` to see supported commands." },
    ]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runCommand(command);
    setCommand("");
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-black/45 px-4 pt-24 backdrop-blur-sm sm:pt-28"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            className="terminal-shell w-full max-w-4xl overflow-hidden rounded-[1.5rem]"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-lime-300" />
                </div>
                <div>
                  <p className="terminal-label text-sm font-bold text-white">GilangOS Terminal</p>
                  <p className="terminal-label text-xs text-white/45">fullstack-ai-shell</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="portfolio-icon-button"
                aria-label="Close terminal"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={scrollRef} className="relative z-10 max-h-[58vh] overflow-y-auto px-4 py-4 font-mono text-sm">
              <div className="space-y-2">
                {lines.map((line) => (
                  <p
                    key={line.id}
                    className={
                      line.type === "input"
                        ? "text-cyan-200"
                        : line.type === "error"
                          ? "text-red-300"
                          : line.type === "success"
                            ? "text-lime-200"
                            : "text-white/68"
                    }
                  >
                    {line.type === "input" ? <span className="text-lime-200">guest@gilangos:~$ </span> : null}
                    {line.text}
                  </p>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10 border-t border-white/10 bg-black/20 px-4 py-3">
              <label className="sr-only" htmlFor="portfolio-terminal-command">
                Terminal command
              </label>
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="shrink-0 text-lime-200">guest@gilangos:~$</span>
                <input
                  ref={inputRef}
                  id="portfolio-terminal-command"
                  value={command}
                  onChange={(event) => setCommand(event.target.value)}
                  placeholder="type `help`, `ls`, or `open projects`"
                  className="min-w-0 flex-1 border-0 bg-transparent px-0 py-2 text-white shadow-none outline-none placeholder:text-white/35"
                  autoComplete="off"
                />
                <kbd className="hidden rounded-md border border-white/10 px-2 py-1 text-[10px] text-white/45 sm:inline">
                  Enter
                </kbd>
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
