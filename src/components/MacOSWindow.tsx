"use client";

import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

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
  
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; // "Closed" state

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
    // Exit minimization if maximizing
    if (isMinimized) setIsMinimized(false); 
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    // Exit maximization if minimizing
    if (isMaximized) setIsMaximized(false);
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      setIsVisible(false);
    }
  };
  
  // Animation variants
  const variants = {
    initial: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20,
      filter: "blur(10px)"
    },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      filter: "blur(10px)",
      transition: { duration: 0.2 }
    },
    minimized: {
      opacity: 0,
      scale: 0.1,
      y: 400, // Move down towards dock
      x: 0,   // Center (simplified genie effect)
      transition: { 
        duration: 0.4, 
        ease: [0.32, 0.72, 0, 1] 
      }
    },
    maximized: {
      borderRadius: 0,
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      margin: 0,
      position: "fixed" as const,
      zIndex: 50,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }
    },
    windowed: {
      borderRadius: "0.75rem",
      position: "relative" as const,
      zIndex: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 30 
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className={`window-container overflow-hidden border shadow-lg ${getBgStyle()} ${className}`}
          initial="initial"
          animate={isMinimized ? "minimized" : isMaximized ? "maximized" : "animate"}
          exit="exit"
          variants={variants}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsCloseHovered(false);
            setIsMinimizeHovered(false);
            setIsMaximizeHovered(false);
          }}
          style={isMaximized ? { width: '100vw', height: '100vh', top: 0, left: 0, margin: 0, maxWidth: 'none', maxHeight: 'none' } : {}}
        >
          {/* Window Header */}
          <div 
            className="flex items-center px-4 py-3 border-b border-inherit bg-opacity-50 select-none cursor-default"
            onDoubleClick={toggleMaximize}
          >
            {/* Traffic Light Controls */}
            <div className="flex space-x-2 mr-4 min-w-[60px]">
              {/* Close Button */}
              <button 
                onClick={handleClose}
                onMouseEnter={() => setIsCloseHovered(true)}
                onMouseLeave={() => setIsCloseHovered(false)}
                className={`relative w-3 h-3 rounded-full transition-all duration-150 flex items-center justify-center
                  ${isHovered 
                    ? 'bg-[#FF5F57] shadow-sm' 
                    : 'bg-[#FF5F57] opacity-60 hover:opacity-100'}`}
                aria-label="Close window"
              >
                <span className={`transition-opacity duration-150 ${isCloseHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5M5 1L1 5" stroke="#4c0000" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              
              {/* Minimize Button */}
              <button 
                onClick={toggleMinimize}
                onMouseEnter={() => setIsMinimizeHovered(true)}
                onMouseLeave={() => setIsMinimizeHovered(false)}
                className={`relative w-3 h-3 rounded-full transition-all duration-150 flex items-center justify-center
                  ${isHovered 
                    ? 'bg-[#FEBC2E] shadow-sm' 
                    : 'bg-[#FEBC2E] opacity-60 hover:opacity-100'}`}
                 aria-label="Minimize window"
              >
                <span className={`transition-opacity duration-150 ${isMinimizeHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <svg width="6" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H5" stroke="#995700" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              
              {/* Maximize Button */}
              <button 
                onClick={toggleMaximize}
                onMouseEnter={() => setIsMaximizeHovered(true)}
                onMouseLeave={() => setIsMaximizeHovered(false)}
                className={`relative w-3 h-3 rounded-full transition-all duration-150 flex items-center justify-center
                  ${isHovered 
                    ? 'bg-[#28C840] shadow-sm' 
                    : 'bg-[#28C840] opacity-60 hover:opacity-100'}`}
                 aria-label="Maximize window"
              >
                <span className={`transition-opacity duration-150 ${isMaximizeHovered ? 'opacity-100' : 'opacity-0'}`}>
                   {isMaximized ? (
                     <svg width="6" height="6" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M1 7V5M1 7H3M7 1V3M7 1H5" stroke="#006500" strokeWidth="1.2" strokeLinecap="round"/>
                     </svg>
                   ) : (
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L1 3M1 1H3M5 1V3M5 1L1 5" stroke="#006500" strokeWidth="1.2" strokeLinecap="round"/>
                     </svg>
                   )}
                </span>
              </button>
            </div>
            
            {/* Window Title */}
            <div className="flex-1 text-center pr-14">
              <h3 className="text-sm font-medium tracking-wide opacity-90 drop-shadow-sm">
                {title}
              </h3>
            </div>
          </div>
          
          {/* Window Content */}
          <div className={`transition-all duration-300 ${isMaximized ? 'h-[calc(100vh-45px)]' : ''} overflow-auto p-4`}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MacOSWindow; 