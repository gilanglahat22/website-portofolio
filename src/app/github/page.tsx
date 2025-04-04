"use client";

import React, { useState, useEffect } from 'react';
import AppleDock from '@/components/AppleDock';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Repository {
  name: string;
  description: string;
  stars: number;
  forks: number;
  topics: string[];
  updatedAt: string;
  html_url: string;
  language: string;
  fork: boolean;
  owner: {
    login: string;
  };
  source?: {
    full_name: string;
  };
}

interface GitHubProfile {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  company: string;
  location: string;
  blog: string;
  followers: number;
  following: number;
  public_repos: number;
}

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const PinnedRepoCard = ({ repo }: { repo: Repository }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card rounded-md p-3 sm:p-4 border border-neutral-200/50 dark:border-neutral-800/30 h-full bg-white/50 dark:bg-black/20 backdrop-blur-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-neutral-600 dark:text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <a 
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sm sm:text-base text-blue-600 dark:text-blue-400 hover:underline truncate"
            >
              {repo.name}
            </a>
          </div>
          {repo.fork && (
            <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-1 hidden sm:inline">
              Forked from {repo.source?.full_name}
            </span>
          )}
        </div>
        
        {repo.description && (
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mb-2 sm:mb-4 flex-grow line-clamp-3">
            {repo.description}
          </p>
        )}
        
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
          {repo.language && (
            <span className="flex items-center">
              <span className={`w-3 h-3 rounded-full mr-1 ${
                repo.language === 'TypeScript' ? 'bg-blue-500' :
                repo.language === 'JavaScript' ? 'bg-yellow-300' :
                repo.language === 'HTML' ? 'bg-red-500' :
                repo.language === 'C++' ? 'bg-pink-500' :
                repo.language === 'PHP' ? 'bg-purple-500' :
                'bg-gray-500'
              }`}></span>
              {repo.language}
            </span>
          )}
          {repo.stars > 0 && (
            <a href={`${repo.html_url}/stargazers`} className="flex items-center hover:text-blue-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              {repo.stars}
            </a>
          )}
          {repo.forks > 0 && (
            <a href={`${repo.html_url}/network/members`} className="flex items-center hover:text-blue-600">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              {repo.forks}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Achievement = ({ image, alt }: { image: string; alt: string }) => (
  <div className="rounded-full overflow-hidden w-12 h-12 sm:w-16 sm:h-16 bg-white/50 dark:bg-black/20 border border-neutral-200/50 dark:border-neutral-800/30 backdrop-blur-xl">
    <Image 
      src={image} 
      alt={alt} 
      width={64} 
      height={64}
      className="w-full h-full"
      unoptimized
    />
  </div>
);

const Organization = ({ image, alt }: { image: string; alt: string }) => (
  <div className="rounded-lg overflow-hidden w-6 h-6 sm:w-8 sm:h-8 bg-white/50 dark:bg-black/20 border border-neutral-200/50 dark:border-neutral-800/30 backdrop-blur-xl">
    <Image 
      src={image} 
      alt={alt} 
      width={32} 
      height={32}
      className="w-full h-full"
      unoptimized
    />
  </div>
);

const ContributionGraph = ({ data }: { data: ContributionDay[] }) => {
  const weeks = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  const getLevelColor = (level: number) => {
    if (level === 0) return 'bg-neutral-100/50 dark:bg-black/20';
    if (level === 1) return 'bg-[#9be9a8] dark:bg-[#0e4429]';
    if (level === 2) return 'bg-[#40c463] dark:bg-[#006d32]';
    if (level === 3) return 'bg-[#30a14e] dark:bg-[#26a641]';
    return 'bg-[#216e39] dark:bg-[#39d353]';
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Mon', 'Wed', 'Fri'];

  // Function to safely check window width for client-side rendering
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Only modify weeks for mobile view if client-side
  // For server-side rendering, always use full weeks to avoid hydration mismatch
  const displayedWeeks = mounted && isMobile ? weeks.slice(-13) : weeks;

  return (
    <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-700">
      <div className="min-w-max">
        {/* Month labels */}
        <div className="flex mb-2 text-xs text-neutral-500 dark:text-neutral-400">
          <div className="w-6 sm:w-8" /> {/* Spacing for day labels */}
          {months.map((month, i) => (
            <div key={month} className="flex-1 text-center text-[0.6rem] sm:text-xs">{month}</div>
          ))}
        </div>
        
        <div className="flex">
          {/* Day labels */}
          <div className="flex flex-col justify-between mr-1 sm:mr-2 text-[0.6rem] sm:text-xs text-neutral-500 dark:text-neutral-400 h-[104px]">
            {days.map(day => (
              <div key={day} className="h-3 leading-3">{day}</div>
            ))}
          </div>

          {/* Contribution squares */}
          <div className="flex gap-[2px] sm:gap-1">
            {displayedWeeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[2px] sm:gap-1">
                {week.map((day, dayIndex) => (
                  <div
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-sm ${getLevelColor(day.level)} hover:ring-1 sm:hover:ring-2 hover:ring-neutral-400 dark:hover:ring-neutral-500`}
                    title={`${day.count} contributions on ${new Date(day.date).toLocaleDateString()}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-end mt-2 text-[0.6rem] sm:text-xs text-neutral-500 dark:text-neutral-400">
          <span className="mr-1 sm:mr-2">Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-sm ${getLevelColor(level)} mx-0.5`}
            />
          ))}
          <span className="ml-1 sm:ml-2">More</span>
        </div>
      </div>
    </div>
  );
};

export default function GitHub() {
  const { theme } = useTheme();
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [pinnedRepos, setPinnedRepos] = useState<Repository[]>([]);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>('2023');

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch profile data - using Muhammad Gilang Ramadhan's GitHub information
        const mockProfileData: GitHubProfile = {
          login: "gilanglahat22",
          name: "Muhammad Gilang Ramadhan",
          avatar_url: "https://avatars.githubusercontent.com/u/62123619",
          bio: "Software Engineer & Security Analyst",
          company: "Bandung Institute of Technology",
          location: "Lahat, Sumatera Selatan",
          blog: "https://mgr-website.netlify.app/",
          followers: 48,
          following: 75,
          public_repos: 58
        };
        
        setProfile(mockProfileData);

        // Mock pinned repositories with actual repositories from Muhammad Gilang Ramadhan's GitHub
        const mockRepos: Repository[] = [
          {
            name: "BlueSound",
            description: "A music streaming platform with advanced audio processing capabilities",
            stars: 12,
            forks: 4,
            topics: ["PHP", "audio", "streaming"],
            updatedAt: "2023-11-15",
            html_url: "https://github.com/gilanglahat22/BlueSound",
            language: "PHP",
            fork: true,
            owner: {
              login: "gilanglahat22"
            },
            source: {
              full_name: "gilangr301102/BlueSound"
            }
          },
          {
            name: "competitive-programming",
            description: "Library code for programming contests",
            stars: 8,
            forks: 3,
            topics: ["algorithms", "data-structures", "competitive-programming"],
            updatedAt: "2023-09-22",
            html_url: "https://github.com/gilanglahat22/competitive-programming",
            language: "C++",
            fork: true,
            owner: {
              login: "gilanglahat22"
            },
            source: {
              full_name: "nealwu/competitive-programming"
            }
          },
          {
            name: "contests-dump-ITB",
            description: "Solutions to various CP contests (especially Indonesian local contests)",
            stars: 5,
            forks: 2,
            topics: ["competitive-programming", "contests", "ITB"],
            updatedAt: "2023-08-10",
            html_url: "https://github.com/gilanglahat22/contests-dump-ITB",
            language: "HTML",
            fork: true,
            owner: {
              login: "gilanglahat22"
            },
            source: {
              full_name: "cp-itb/contests"
            }
          },
          {
            name: "gwallet_backend",
            description: "Backend for digital wallet application with secure transaction processing",
            stars: 14,
            forks: 5,
            topics: ["typescript", "node", "backend", "wallet"],
            updatedAt: "2023-12-05",
            html_url: "https://github.com/gilanglahat22/gwallet_backend",
            language: "TypeScript",
            fork: false,
            owner: {
              login: "gilanglahat22"
            }
          },
          {
            name: "gwallet_frontend",
            description: "Frontend for digital wallet application with responsive UI",
            stars: 10,
            forks: 3,
            topics: ["javascript", "react", "frontend", "wallet"],
            updatedAt: "2023-12-05",
            html_url: "https://github.com/gilanglahat22/gwallet_frontend",
            language: "JavaScript",
            fork: false,
            owner: {
              login: "gilanglahat22"
            }
          },
          {
            name: "seleksi_labpro_2021_tahap1",
            description: "Selection projects for Software Engineering Laboratory ITB",
            stars: 6,
            forks: 1,
            topics: ["cpp", "laboratory", "ITB"],
            updatedAt: "2021-07-15",
            html_url: "https://github.com/gilanglahat22/seleksi_labpro_2021_tahap1",
            language: "C++",
            fork: false,
            owner: {
              login: "gilanglahat22"
            }
          }
        ];
        
        setPinnedRepos(mockRepos);

        // Generate contribution data for 2023 (617 contributions)
        const contributionData: ContributionDay[] = [];
        const startDate = new Date('2023-01-01');
        const endDate = new Date('2023-12-31');
        
        // Distribution pattern for 617 contributions
        const highActivityDays = [
          '2023-03-15', '2023-03-16', '2023-03-17', // High activity in March
          '2023-07-20', '2023-07-21', '2023-07-22', // High activity in July
          '2023-10-05', '2023-10-06', '2023-10-07', // High activity in October
          '2023-12-15', '2023-12-16', '2023-12-17'  // High activity in December
        ];
        
        const mediumActivityDays = [
          '2023-02-10', '2023-02-11',
          '2023-04-05', '2023-04-06',
          '2023-06-15', '2023-06-16',
          '2023-08-20', '2023-08-21',
          '2023-11-01', '2023-11-02'
        ];

        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
          const dateStr = d.toISOString().split('T')[0];
          let level: 0 | 1 | 2 | 3 | 4 = 0;
          let count = 0;

          if (highActivityDays.includes(dateStr)) {
            level = 4;
            count = Math.floor(Math.random() * 5) + 8; // 8-12 contributions
          } else if (mediumActivityDays.includes(dateStr)) {
            level = 3;
            count = Math.floor(Math.random() * 3) + 5; // 5-7 contributions
          } else if (Math.random() < 0.3) { // 30% chance for low activity days
            level = Math.floor(Math.random() * 2) + 1 as 1 | 2;
            count = Math.floor(Math.random() * 3) + 1; // 1-3 contributions
          }

          contributionData.push({
            date: dateStr,
            count,
            level
          });
        }

        setContributions(contributionData);

      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-gray-900 dark:border-white mx-auto"></div>
          <p className="mt-4 text-sm sm:text-base text-neutral-900 dark:text-white">Loading GitHub profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="text-center">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="py-4 sm:py-8 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8">
          {/* Left Column - Profile Info */}
          <div className="w-full lg:w-1/4">
            <div className="mb-4 relative mx-auto lg:mx-0 max-w-[200px] lg:max-w-none">
              <Image
                src={profile?.avatar_url || ''}
                alt={profile?.name || 'GitHub Avatar'}
                width={296}
                height={296}
                className="rounded-full w-full aspect-square object-cover"
              />
              {/* Achievement Badge */}
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-white/50 dark:bg-black/20 rounded-full p-1 border-2 border-neutral-200/50 dark:border-neutral-800/30 backdrop-blur-xl">
                <span role="img" aria-label="achievement" className="text-base sm:text-xl">✌️</span>
              </div>
            </div>
            <div className="mb-3 sm:mb-4 text-center lg:text-left">
              <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">{profile?.name}</h1>
              <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400">{profile?.login}</p>
            </div>
            <div className="mb-3 sm:mb-4 text-center lg:text-left">
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">Software Engineer & Security Analyst</p>
            </div>
            
            <a
              href="https://github.com/gilanglahat22"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mb-4 sm:mb-6 inline-flex items-center justify-center px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold bg-white/50 hover:bg-white/80 dark:bg-black/20 dark:hover:bg-black/40 text-neutral-900 dark:text-white border border-neutral-200/50 dark:border-neutral-800/30 rounded-md transition-colors duration-200 backdrop-blur-xl"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              View on GitHub
            </a>

            <div className="flex items-center mb-3 sm:mb-4 justify-center lg:justify-start">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 text-neutral-600 dark:text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300">
                <strong>{profile?.followers}</strong> followers · <strong>{profile?.following}</strong> following
              </span>
            </div>

            <div className="space-y-1.5 sm:space-y-2 text-sm text-center lg:text-left">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-neutral-600 dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-neutral-700 dark:text-neutral-300">Bandung Institute of Technology</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-neutral-700 dark:text-neutral-300">Lahat, Sumatera Selatan</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <a 
                  href="https://mgr-website.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  https://mgr-website.netlify.app/
                </a>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="mt-4 sm:mt-6 text-center lg:text-left">
              <h2 className="text-sm sm:text-base font-semibold mb-2">Achievements</h2>
              <div className="flex gap-2 justify-center lg:justify-start">
                <Achievement 
                  image="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png" 
                  alt="YOLO Achievement" 
                />
                <Achievement 
                  image="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png" 
                  alt="Pull Shark Achievement" 
                />
                <Achievement 
                  image="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png" 
                  alt="Quickdraw Achievement" 
                />
              </div>
            </div>

            {/* Organizations Section */}
            <div className="mt-4 sm:mt-6 text-center lg:text-left">
              <h2 className="text-sm sm:text-base font-semibold mb-2">Organizations</h2>
              <div className="flex gap-2 justify-center lg:justify-start">
                <Organization 
                  image="https://avatars.githubusercontent.com/u/35373553?s=64&v=4" 
                  alt="Organization 1" 
                />
                <Organization 
                  image="https://avatars.githubusercontent.com/u/13629408?s=64&v=4" 
                  alt="Organization 2" 
                />
              </div>
            </div>
          </div>

          {/* Right Column - Pinned Repositories and Contributions */}
          <div className="w-full lg:w-3/4 mt-6 lg:mt-0">
            {/* Contribution Graph */}
            <div className="card mb-6 sm:mb-8 bg-white/50 dark:bg-black/20 p-3 sm:p-4 rounded-lg border border-neutral-200/50 dark:border-neutral-800/30 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h2 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white">617 contributions in 2023</h2>
                <select 
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="text-xs sm:text-sm bg-white/50 dark:bg-black/20 border border-neutral-200/50 dark:border-neutral-800/30 rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1 text-neutral-900 dark:text-white backdrop-blur-xl"
                >
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                </select>
              </div>
              <ContributionGraph data={contributions} />
            </div>

            {/* Pinned Repositories */}
            <div className="mb-3 sm:mb-4 flex items-center justify-between">
              <h2 className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-white">Pinned</h2>
              <Link href="/customize" className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline">
                Customize your pins
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {pinnedRepos.map((repo) => (
                <PinnedRepoCard key={repo.name} repo={repo} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <AppleDock />
    </div>
  );
} 