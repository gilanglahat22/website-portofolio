"use client";

import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'system' | 'dark' | 'transparent';
  onClose?: () => void;
}

const MacOSWindow = ({ 
  title, 
  children, 
  className = '',
  variant = 'system',
  onClose
}: Props) => {
  // Try to use Theme context but fallback gracefully if not available
  let theme = "light";
  
  try {
    const themeContext = useTheme();
    if (themeContext) {
      theme = themeContext.theme;
    }
  } catch (error) {
    console.log("ThemeContext not available, using fallback");
  }
  
  const [isHovered, setIsHovered] = useState(false);
  const [isCloseHovered, setIsCloseHovered] = useState(false);
  const [isMinimizeHovered, setIsMinimizeHovered] = useState(false);
  const [isMaximizeHovered, setIsMaximizeHovered] = useState(false);
  
  // Background styles based on variant and theme
  const getBgStyle = () => {
    // If variant is 'system', use the current theme
    const currentVariant = variant === 'system' ? theme : variant;
    
    switch(currentVariant) {
      case 'dark':
        return 'text-white border-gray-700/50 backdrop-blur-md';
      case 'transparent':
        return 'bg-white/10 border-white/20 text-white backdrop-blur-md';
      case 'light':
      default:
        return 'text-gray-900 border-gray-200/50 backdrop-blur-md';
    }
  };
  
  return (
    <div 
      className={`window-container rounded-xl overflow-hidden border shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.002] hover:shadow-xl ${getBgStyle()} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsCloseHovered(false);
        setIsMinimizeHovered(false);
        setIsMaximizeHovered(false);
      }}
    >
      {/* Window Header */}
      <div className="flex items-center px-4 py-2 border-b border-inherit bg-opacity-50">
        {/* Traffic Light Controls */}
        <div className="flex space-x-2 mr-4">
          {/* Close Button */}
          <button 
            onClick={onClose}
            onMouseEnter={() => setIsCloseHovered(true)}
            onMouseLeave={() => setIsCloseHovered(false)}
            className={`relative w-3 h-3 rounded-full transition-all duration-150
              ${isHovered 
                ? 'bg-red-500 hover:bg-red-600' 
                : theme === 'dark' || variant === 'dark'
                  ? 'bg-gray-600' 
                  : 'bg-gray-300'}`}
            aria-label="Close window"
          >
            {isCloseHovered && (
              <span className="absolute inset-0 flex items-center justify-center">
                <svg className="w-2 h-2" viewBox="0 0 12 12" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="2">
                  <path d="M3 3l6 6M9 3l-6 6" />
                </svg>
              </span>
            )}
          </button>
          
          {/* Minimize Button */}
          <div 
            onMouseEnter={() => setIsMinimizeHovered(true)}
            onMouseLeave={() => setIsMinimizeHovered(false)}
            className={`relative w-3 h-3 rounded-full transition-all duration-150
              ${isHovered 
                ? 'bg-yellow-500 hover:bg-yellow-600' 
                : theme === 'dark' || variant === 'dark'
                  ? 'bg-gray-600' 
                  : 'bg-gray-300'}`}
          >
            {isMinimizeHovered && (
              <span className="absolute inset-0 flex items-center justify-center">
                <svg className="w-2 h-2" viewBox="0 0 12 12" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="2">
                  <path d="M3 6h6" />
                </svg>
              </span>
            )}
          </div>
          
          {/* Maximize Button */}
          <div 
            onMouseEnter={() => setIsMaximizeHovered(true)}
            onMouseLeave={() => setIsMaximizeHovered(false)}
            className={`relative w-3 h-3 rounded-full transition-all duration-150
              ${isHovered 
                ? 'bg-green-500 hover:bg-green-600' 
                : theme === 'dark' || variant === 'dark'
                  ? 'bg-gray-600' 
                  : 'bg-gray-300'}`}
          >
            {isMaximizeHovered && (
              <span className="absolute inset-0 flex items-center justify-center">
                <svg className="w-2 h-2" viewBox="0 0 12 12" fill="none" stroke="rgba(0,0,0,0.4)" strokeWidth="2">
                  <path d="M3.5 3.5h5v5h-5z" />
                </svg>
              </span>
            )}
          </div>
        </div>
        
        {/* Window Title */}
        <div className="flex-1 text-center">
          <h3 className="text-sm font-medium truncate">
            {title}
          </h3>
        </div>
        
        {/* Right spacing to balance the traffic lights */}
        <div className="w-14" />
      </div>
      
      {/* Window Content */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
};

export default MacOSWindow; 