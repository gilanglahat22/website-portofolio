"use client";

import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PortfolioTerminal from "@/components/PortfolioTerminal";
import PortfolioTopNav, { DockItem } from "@/components/PortfolioTopNav";
import { portfolio } from "@/data/portfolio";

export default function PortfolioChrome({
  children,
  dockItems,
}: {
  children: ReactNode;
  dockItems: DockItem[];
}) {
  const pathname = usePathname();
  const [terminalOpen, setTerminalOpen] = useState(false);
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "`") {
        event.preventDefault();
        setTerminalOpen((value) => !value);
      }
      if (event.key === "Escape") setTerminalOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);
  return (
    <div
      className="portfolio-app-shell min-h-screen"
      data-section={pathname?.split("/")[1] || "home"}
    >
      <a href="#page-content" className="skip-link">
        Skip to content
      </a>
      <PortfolioTopNav
        dockItems={dockItems}
        terminalOpen={terminalOpen}
        onOpenTerminal={() => setTerminalOpen(true)}
      />
      <div id="page-content" className="portfolio-page-content">
        {children}
      </div>
      <footer className="sketch-footer">
        <Link href="/" className="font-extrabold">
          Muhammad Gilang Ramadhan
        </Link>
        <p>Software engineer · Jakarta, Indonesia</p>
        <div className="flex gap-5">
          <Link href={portfolio.githubUrl} target="_blank" rel="noreferrer">
            GitHub ↗
          </Link>
          <Link href="/contact">Say hello ↗</Link>
        </div>
      </footer>
      <PortfolioTerminal
        open={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        dockItems={dockItems}
      />
    </div>
  );
}
