import React from 'react';

interface MacOSTerminalProps {
  title: string;
  children: React.ReactNode;
}

const MacOSTerminal: React.FC<MacOSTerminalProps> = ({ title, children }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-neutral-800 dark:bg-neutral-900 bg-white">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-neutral-800 border-b border-gray-200 dark:border-neutral-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm font-medium text-center flex-1">{title}</div>
        <div className="w-4"></div> {/* Empty div for balance */}
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 font-mono text-sm">
        {children}
      </div>
    </div>
  );
};

export default MacOSTerminal; 