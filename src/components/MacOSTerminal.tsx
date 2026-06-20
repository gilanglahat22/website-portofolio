import React from 'react';

interface MacOSTerminalProps {
  title: string;
  children: React.ReactNode;
}

const MacOSTerminal: React.FC<MacOSTerminalProps> = ({ title, children }) => {
  return (
    <div className="terminal-card overflow-hidden rounded-2xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-amber-300"></div>
          <div className="w-3 h-3 rounded-full bg-lime-300"></div>
        </div>
        <div className="terminal-label flex-1 text-center text-xs font-medium text-white/60">{title}</div>
        <div className="w-4"></div> {/* Empty div for balance */}
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm text-white/75">
        {children}
      </div>
    </div>
  );
};

export default MacOSTerminal; 