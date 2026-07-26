"use client";

import { ReactNode, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import AppleDock from "@/components/AppleDock";
import PortfolioTerminal from "@/components/PortfolioTerminal";
import PortfolioTopNav, { DockItem } from "@/components/PortfolioTopNav";

const ThreeBackground = dynamic(() => import("@/components/ThreeBackground"), {
  ssr: false,
});

interface PortfolioChromeProps {
  children: ReactNode;
  dockItems: DockItem[];
}

export default function PortfolioChrome({ children, dockItems }: PortfolioChromeProps) {
  const [dockVisible, setDockVisible] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    try {
      const storedDock = localStorage.getItem("portfolio-dock-visible");
      if (storedDock !== null) {
        setDockVisible(storedDock === "true");
      }
    } catch {
      // Ignore storage errors in restricted browser contexts.
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "`") {
        event.preventDefault();
        setTerminalOpen((current) => !current);
      }

      if (event.key === "Escape") {
        setTerminalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleDock = () => {
    setDockVisible((current) => {
      const nextValue = !current;

      try {
        localStorage.setItem("portfolio-dock-visible", String(nextValue));
      } catch {
        // Ignore storage errors in restricted browser contexts.
      }

      return nextValue;
    });
  };

  return (
    <div className="portfolio-app-shell min-h-screen relative overflow-x-hidden transition-colors duration-300">
      <PortfolioTopNav
        dockItems={dockItems}
        dockVisible={dockVisible}
        onToggleDock={toggleDock}
        terminalOpen={terminalOpen}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      <div className={`relative z-10 pt-20 transition-[padding] duration-300 ${dockVisible ? "pb-24 sm:pb-32" : "pb-10"}`}>
        {children}
      </div>

      {mounted ? <ThreeBackground /> : null}

      <div className="portfolio-backdrop fixed inset-0 z-0">
        <div className="portfolio-backdrop-grid" />
      </div>

      <AnimatePresence>
        {mounted && dockVisible ? (
          <motion.div
            key="apple-dock"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.18 }}
          >
            <AppleDock items={dockItems} className="z-50" />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <PortfolioTerminal
        open={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        dockItems={dockItems}
      />
    </div>
  );
}
