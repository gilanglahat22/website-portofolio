"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, File, Folder, TerminalSquare, X } from "lucide-react";
import { CodeLabEntry, codeLabEntries } from "@/data/codeLab";
import { CODE_TOKEN_CLASSES, tokenizeLines } from "@/lib/highlightCode";

const SOLID_ORDER = ["srp", "ocp", "lsp", "isp", "dip"];

const CodeBlock = ({ code }: { code: string }) => {
  const lines = useMemo(() => tokenizeLines(code), [code]);

  return (
    <pre className="whitespace-pre">
      <code>
        {lines.map((tokens, index) => (
          <div key={index} className="flex">
            <span className="mr-4 inline-block w-7 shrink-0 select-none text-right text-white/25">
              {index + 1}
            </span>
            <span className="flex-1">
              {tokens.length === 0
                ? " "
                : tokens.map((token, tokenIndex) => (
                    <span key={tokenIndex} className={CODE_TOKEN_CLASSES[token.type]}>
                      {token.text}
                    </span>
                  ))}
            </span>
          </div>
        ))}
      </code>
    </pre>
  );
};

const TerminalPane = ({ entry }: { entry: CodeLabEntry }) => {
  return (
    <motion.div
      key={entry.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="space-y-1.5"
    >
      <div className="flex items-center gap-2 text-white/70">
        <span className="text-lime-300">$</span>
        <span>{entry.terminalCommand}</span>
      </div>
      {entry.terminalOutput.map((line, index) => (
        <motion.p
          key={`${entry.id}-${index}`}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25, delay: 0.15 + index * 0.12 }}
          className={line.startsWith("✓") ? "text-emerald-300" : "text-white/60"}
        >
          {line || " "}
        </motion.p>
      ))}
      <motion.span
        aria-hidden="true"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="inline-block h-4 w-2 translate-y-0.5 bg-lime-300/80"
      />
    </motion.div>
  );
};

const FolderGroup = ({
  title,
  entries,
  activeId,
  onSelect,
}: {
  title: string;
  entries: CodeLabEntry[];
  activeId: string;
  onSelect: (id: string) => void;
}) => {
  return (
    <div className="mb-4">
      <div className="mb-1.5 flex items-center gap-1.5 px-1 text-white/50">
        <ChevronRight className="h-3.5 w-3.5" />
        <Folder className="h-3.5 w-3.5" />
        <span className="terminal-label text-[11px] uppercase tracking-wide">{title}</span>
      </div>
      <div className="space-y-0.5">
        {entries.map((entry) => (
          <button
            key={entry.id}
            type="button"
            onClick={() => onSelect(entry.id)}
            className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[13px] transition-colors ${
              activeId === entry.id
                ? "bg-lime-300/10 text-lime-100"
                : "text-white/60 hover:bg-white/5 hover:text-white/85"
            }`}
          >
            <File className="h-3.5 w-3.5 shrink-0 opacity-70" />
            <span className="truncate">{entry.fileName}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const CodeLabWorkspace = () => {
  const [activeId, setActiveId] = useState(codeLabEntries[0].id);
  const [openTabs, setOpenTabs] = useState([codeLabEntries[0].id]);

  const solidEntries = useMemo(
    () =>
      SOLID_ORDER.map((id) => codeLabEntries.find((entry) => entry.id === id)).filter(
        (entry): entry is CodeLabEntry => Boolean(entry),
      ),
    [],
  );
  const patternEntries = useMemo(() => codeLabEntries.filter((entry) => entry.group === "pattern"), []);

  const activeEntry = codeLabEntries.find((entry) => entry.id === activeId) ?? codeLabEntries[0];

  const openFile = (id: string) => {
    setActiveId(id);
    setOpenTabs((current) => (current.includes(id) ? current : [...current, id]));
  };

  const closeTab = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenTabs((current) => {
      const next = current.filter((tabId) => tabId !== id);
      if (next.length === 0) return [id];
      if (activeId === id) setActiveId(next[next.length - 1]);
      return next;
    });
  };

  return (
    <div className="space-y-6">
      <div className="terminal-shell overflow-hidden rounded-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="terminal-label ml-3 truncate text-xs text-white/50">
            gilang@code-lab — {activeEntry.fileName}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr]">
          <aside className="border-b border-white/10 p-3 lg:max-h-[600px] lg:overflow-y-auto lg:border-b-0 lg:border-r">
            <FolderGroup title="SOLID" entries={solidEntries} activeId={activeId} onSelect={openFile} />
            <FolderGroup title="design-patterns" entries={patternEntries} activeId={activeId} onSelect={openFile} />
          </aside>

          <div className="flex min-w-0 flex-col">
            <div className="flex items-center gap-1 overflow-x-auto border-b border-white/10 px-2 py-1.5">
              {openTabs.map((id) => {
                const tabEntry = codeLabEntries.find((entry) => entry.id === id);
                if (!tabEntry) return null;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveId(id)}
                    className={`group flex shrink-0 items-center gap-2 rounded-t-lg border-b-2 px-3 py-2 text-xs transition-colors ${
                      activeId === id
                        ? "border-lime-300 bg-white/[0.04] text-lime-100"
                        : "border-transparent text-white/50 hover:text-white/80"
                    }`}
                  >
                    <File className="h-3.5 w-3.5" />
                    {tabEntry.fileName}
                    <span
                      role="button"
                      tabIndex={-1}
                      onClick={(event) => closeTab(id, event)}
                      className="rounded p-0.5 opacity-0 transition-opacity hover:bg-white/10 group-hover:opacity-100"
                    >
                      <X className="h-3 w-3" />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="max-h-[420px] overflow-auto px-4 py-4 font-mono text-[13px] leading-6 sm:text-sm">
              <CodeBlock code={activeEntry.code} />
            </div>

            <div className="border-t border-white/10 bg-black/30 px-4 py-3 font-mono text-[12.5px] sm:text-[13px]">
              <div className="mb-2 flex items-center gap-2 text-white/40">
                <TerminalSquare className="h-3.5 w-3.5" />
                <span className="terminal-label text-[11px] uppercase tracking-wide">terminal</span>
              </div>
              <TerminalPane entry={activeEntry} />
            </div>
          </div>
        </div>
      </div>

      <div className="terminal-card rounded-2xl p-6">
        <p className="terminal-kicker text-xs">best practice notes — {activeEntry.title}</p>
        <p className="mt-2 text-sm leading-6 text-white/75">{activeEntry.summary}</p>
        <ul className="mt-4 space-y-2.5">
          {activeEntry.keyPoints.map((point) => (
            <li key={point} className="flex gap-2.5 text-sm leading-6 text-white/70">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300/80" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CodeLabWorkspace;
