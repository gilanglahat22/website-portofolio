import Link from "next/link";
import { Compass, ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <main className="flex items-center justify-center px-5 py-20">
      <div className="terminal-card text-center max-w-lg p-8 sm:p-12">
        <div className="interest-icon tone-yellow">
          <Compass size={42} />
        </div>
        <p className="sketch-eyebrow">A SMALL DETOUR · 404</p>
        <h1 className="text-3xl font-extrabold mt-4">
          This page wandered off.
        </h1>
        <p className="mt-4 mb-7 text-white/70">
          Let’s get you back to the sketchbook. There’s plenty more to explore.
        </p>
        <Link href="/" className="sketch-button">
          <ArrowLeft size={17} /> Back home
        </Link>
      </div>
    </main>
  );
}
