"use client";

import { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// @ts-ignore
const DockIcon = ({ name, icon, link, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Custom background colors for each icon to match macOS style
  const getBgColor = () => {
    switch (icon) {
      case 'home': return 'bg-gradient-to-b from-blue-500 to-blue-600';
      case 'user': return 'bg-gradient-to-b from-yellow-500 to-yellow-600';
      case 'projects': return 'bg-gradient-to-b from-blue-400 to-blue-500';
      case 'skills': return 'bg-gradient-to-b from-purple-500 to-purple-600';
      case 'experience': return 'bg-gradient-to-b from-green-500 to-green-600';
      case 'contact': return 'bg-gradient-to-b from-blue-600 to-blue-700';
      case 'blog': return 'bg-gradient-to-b from-orange-500 to-orange-600';
      case 'dashboard': return 'bg-gradient-to-b from-red-500 to-red-600';
      case 'github': return 'bg-gradient-to-b from-gray-700 to-gray-800';
      default: return 'bg-gradient-to-b from-gray-500 to-gray-600';
    }
  };
  
  return (
    // @ts-ignore
    <Link href={link} passHref>
      {/* @ts-ignore */}
      <div 
        className={`relative flex flex-col items-center group transition-all duration-300 ease-out`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* @ts-ignore */}
        <div 
          className={`
            w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 
            flex items-center justify-center 
            transition-all duration-300 
            ${isHovered ? 'scale-125' : 'scale-100'}
            ${getBgColor()}
            rounded-xl sm:rounded-2xl
            shadow-lg
          `}
        >
          <Image 
            src={`/icons/custom/${icon}.svg`}
            alt={name}
            width={36}
            height={36}
            className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
          />
        </div>
        
        {/* Bottom indicator for active item */}
        {isActive && (
          // @ts-ignore
          <div className="absolute -bottom-1 h-1 w-1 xs:h-1.5 xs:w-1.5 rounded-full bg-white"/>
        )}
        
        {/* Floating name label */}
        {/* @ts-ignore */}
        <div 
          className={`
            absolute -top-6 xs:-top-7 sm:-top-8 
            px-2 xs:px-2.5 sm:px-3 py-0.5 xs:py-0.5 sm:py-1 
            bg-black/70 
            backdrop-blur-lg 
            rounded-md sm:rounded-lg 
            text-white text-[10px] xs:text-[11px] sm:text-xs
            transition-all duration-300
            opacity-0 translate-y-1
            ${isHovered ? 'opacity-100 translate-y-0' : ''}
            whitespace-nowrap
          `}
        >
          {name}
        </div>
      </div>
    </Link>
  );
};

// @ts-ignore
export default function AppleDock() {
  const pathname = usePathname();
  
  const dockItems = useMemo(() => [
    { name: 'Home', icon: 'finder', link: '/' },
    { name: 'About', icon: 'user', link: '/about' },
    { name: 'Projects', icon: 'photos', link: '/projects' },
    { name: 'Skills', icon: 'appstore', link: '/skills' },
    { name: 'Experience', icon: 'calendar', link: '/experience' },
    { name: 'Contact', icon: 'mail', link: '/contact' },
    { name: 'Blog', icon: 'safari', link: '/blog' },
    { name: 'Public Chat', icon: 'messages', link: '/public-chat' },
    { name: 'Dashboard', icon: 'dashboard', link: '/dashboard' },
    { name: 'GitHub', icon: 'github', link: '/github' },
  ], []);
  
  // Add CSS media query hook to show fewer items on small screens
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [visibleItems, setVisibleItems] = useState(dockItems);
  
  useEffect(() => {
    const checkScreenSize = () => {
      const smallScreen = window.innerWidth < 640;
      setIsSmallScreen(smallScreen);
      
      // Show only essential items on very small screens
      if (window.innerWidth < 400) {
        setVisibleItems(dockItems.filter(item => 
          ['finder', 'user', 'photos', 'mail', 'messages'].includes(item.icon)
        ));
      } else if (smallScreen) {
        // Show more items but still limited on small screens
        setVisibleItems(dockItems.filter(item => 
          item.icon !== 'dashboard' && item.icon !== 'github'
        ));
      } else {
        // Show all items on larger screens
        setVisibleItems(dockItems);
      }
    };
    
    // Check on initial load
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [dockItems]);
  
  return (
    // @ts-ignore
    <div className="fixed bottom-3 sm:bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      {/* @ts-ignore */}
      <div className="
        px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2
        flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-4
        bg-black/20 backdrop-blur-lg
        border border-white/20
        rounded-xl xs:rounded-xl sm:rounded-2xl
        shadow-xl
      ">
        {visibleItems.map((item) => (
          <DockIcon 
            key={item.name}
            name={item.name}
            icon={item.icon}
            link={item.link}
            isActive={pathname === item.link}
          />
        ))}
      </div>
    </div>
  );
} 