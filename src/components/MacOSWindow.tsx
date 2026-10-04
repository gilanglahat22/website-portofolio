"use client";

import { ReactNode } from "react";
import { BookOpen, X } from "lucide-react";

interface Props {
  title: string;
  children: ReactNode;
  className?: string;
  variant?: "system" | "dark" | "transparent";
  onClose?: () => void;
}

export default function MacOSWindow({
  title,
  children,
  className = "",
  onClose,
}: Props) {
  const label = title
    .replace(/^~\//, "")
    .split("/")
    .join(" / ")
    .replace(/-/g, " ");
  return (
    <section className={`window-container ${className}`}>
      <div className="sketch-window-heading">
        <BookOpen size={16} aria-hidden="true" />
        <span>{label}</span>
        <span className="sketch-window-dots" aria-hidden="true">
          ● ● ●
        </span>
        {onClose ? (
          <button onClick={onClose} aria-label="Close panel">
            <X size={18} />
          </button>
        ) : null}
      </div>
      <div className="sketch-window-content">{children}</div>
    </section>
  );
}
