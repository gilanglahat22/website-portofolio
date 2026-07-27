"use client";

import AppleDock from "@/components/AppleDock";
import MacOSWindow from "@/components/MacOSWindow";
import CodeLabWorkspace from "@/components/codelab/CodeLabWorkspace";

export default function CodeLab() {
  return (
    <div className="min-h-screen">
      <main className="pt-8 px-6 pb-32">
        <div className="mx-auto max-w-6xl space-y-8">
          <MacOSWindow title="~/code-lab/readme" variant="system">
            <div className="space-y-4">
              <p className="terminal-kicker text-xs">hands-on guide</p>
              <h1 className="text-3xl font-bold">Code Lab: SOLID &amp; Design Patterns</h1>
              <p className="text-white/70">
                A small VSCode-style workspace for the principles and patterns I actually reach for when
                writing backend code. Pick a file from the explorer to read the before/after example, then
                check the terminal panel and the notes below for the reasoning behind it.
              </p>
            </div>
          </MacOSWindow>

          <CodeLabWorkspace />
        </div>
      </main>

      <AppleDock />
    </div>
  );
}
