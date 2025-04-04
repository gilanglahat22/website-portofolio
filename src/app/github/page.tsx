"use client";

import React, { useState, useEffect } from 'react';
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Repository {
  name: string;
  description: string;
  stars: number;
  forks: number;
  topics: string[];
  updatedAt: string;
  html_url: string;
  language: string;
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

const RepoCard = ({ repo }: { repo: Repository }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`card rounded-lg p-6 transition-all duration-300 ${isHovered ? 'shadow-lg' : 'shadow-md'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <a 
            href={repo.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-lg font-semibold hover:underline"
          >
            {repo.name}
          </a>
          <div className="flex space-x-3">
            <span className="flex items-center text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              {repo.stars}
            </span>
            <span className="flex items-center text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              {repo.forks}
            </span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm mb-4 flex-grow">{repo.description || 'No description available'}</p>
        
        {/* Language and Topics */}
        <div className="flex flex-wrap gap-2">
          {repo.language && (
            <span className="card px-2 py-1 text-xs rounded-full">
              {repo.language}
            </span>
          )}
          {repo.topics?.map((topic) => (
            <span 
              key={topic}
              className="card px-2 py-1 text-xs rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
        
        {/* Updated At */}
        <div className="mt-4 text-xs">
          Updated {new Date(repo.updatedAt).toLocaleDateString()}
        </div>
      </div>
    </motion.div>
  );
};

interface Contribution {
  date: string;
  count: number;
}

// @ts-ignore
const ContributionGraph = () => {
  // Generate random contribution data
  const generateContributions = (): Contribution[] => {
    const contributions: Contribution[] = [];
    const today = new Date();
    
    for (let i = 0; i < 52 * 7; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      const count = Math.floor(Math.random() * 5); // 0-4 contributions
      
      contributions.unshift({
        date: date.toISOString().split('T')[0],
        count
      });
    }
    
    return contributions;
  };
  
  const contributions = generateContributions();
  
  // Group by week for display
  const weeks: Contribution[][] = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }
  
  // Return color based on contribution count
  // @ts-ignore
  const getColor = (count: number): string => {
    if (count === 0) return 'bg-gray-100';
    if (count === 1) return 'bg-green-100';
    if (count === 2) return 'bg-green-300';
    if (count === 3) return 'bg-green-500';
    return 'bg-green-700';
  };
  
  return (
    // @ts-ignore
    <div className="p-4">
      {/* @ts-ignore */}
      <div className="flex mb-2 text-xs text-gray-500 justify-end">
        {/* @ts-ignore */}
        <div className="flex items-center">
          Less
          {/* @ts-ignore */}
          <div className="flex ml-1 mr-3">
            {/* @ts-ignore */}
            <div className="w-3 h-3 bg-gray-100 mr-1"></div>
            {/* @ts-ignore */}
            <div className="w-3 h-3 bg-green-100 mr-1"></div>
            {/* @ts-ignore */}
            <div className="w-3 h-3 bg-green-300 mr-1"></div>
            {/* @ts-ignore */}
            <div className="w-3 h-3 bg-green-500 mr-1"></div>
            {/* @ts-ignore */}
            <div className="w-3 h-3 bg-green-700"></div>
          </div>
          More
        </div>
      </div>
      
      {/* @ts-ignore */}
      <div className="overflow-x-auto">
        {/* @ts-ignore */}
        <div className="inline-flex">
          {weeks.map((week, weekIndex) => (
            // @ts-ignore
            <div key={weekIndex} className="flex flex-col">
              {week.map((day, dayIndex) => (
                // @ts-ignore
                <div 
                  key={`${weekIndex}-${dayIndex}`} 
                  className={`w-3 h-3 m-0.5 rounded-sm ${getColor(day.count)} cursor-pointer`}
                  title={`${day.date}: ${day.count} contributions`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface Language {
  name: string;
  percentage: number;
  color: string;
}

// @ts-ignore
const LanguageStats = () => {
  const languages: Language[] = [
    { name: 'JavaScript', percentage: 38, color: '#f1e05a' },
    { name: 'TypeScript', percentage: 25, color: '#2b7489' },
    { name: 'Python', percentage: 16, color: '#3572A5' },
    { name: 'HTML', percentage: 12, color: '#e34c26' },
    { name: 'CSS', percentage: 9, color: '#563d7c' }
  ];
  
  return (
    // @ts-ignore
    <div>
      {/* @ts-ignore */}
      <div className="flex h-4 rounded-full overflow-hidden mb-4">
        {languages.map((language, index) => (
          // @ts-ignore
          <div 
            key={index} 
            className="h-full" 
            style={{ 
              width: `${language.percentage}%`, 
              backgroundColor: language.color 
            }}
            title={`${language.name}: ${language.percentage}%`}
          ></div>
        ))}
      </div>
      
      {/* @ts-ignore */}
      <div className="grid grid-cols-2 gap-2">
        {languages.map((language, index) => (
          // @ts-ignore
          <div key={index} className="flex items-center">
            {/* @ts-ignore */}
            <div 
              className="w-3 h-3 rounded-full mr-2" 
              style={{ backgroundColor: language.color }}
            ></div>
            {/* @ts-ignore */}
            <span className="text-sm text-gray-700">
              {language.name} <span className="text-gray-500 ml-1">{language.percentage}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function GitHub() {
  const { theme } = useTheme();
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch profile data
        const profileResponse = await fetch('https://api.github.com/users/gilanglahat22');
        if (!profileResponse.ok) throw new Error('Failed to fetch profile');
        const profileData = await profileResponse.json();
        setProfile(profileData);

        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/users/gilanglahat22/repos?sort=updated&per_page=6');
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();
        setRepos(reposData);
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-white mx-auto"></div>
          <p className="mt-4">Loading GitHub profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Profile Header */}
        <MacOSWindow title="GitHub Profile" variant="system" className="mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="flex-shrink-0">
              <Image
                src={profile?.avatar_url || ''}
                alt={profile?.name || 'GitHub Avatar'}
                width={150}
                height={150}
                className="rounded-full border-4 border-gray-200 dark:border-gray-700"
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-3xl font-bold">{profile?.name}</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">@{profile?.login}</p>
              <p className="mt-4">{profile?.bio}</p>
              <div className="mt-4 flex flex-wrap gap-4">
                {profile?.company && (
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {profile.company}
                  </span>
                )}
                {profile?.location && (
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {profile.location}
                  </span>
                )}
                {profile?.blog && (
                  <a 
                    href={profile.blog} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center hover:underline"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    {profile.blog}
                  </a>
                )}
              </div>
              <div className="mt-4 flex gap-4">
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {profile?.followers} followers
                </span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                  </svg>
                  {profile?.following} following
                </span>
              </div>
            </div>
          </div>
        </MacOSWindow>

        {/* Repository Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <RepoCard key={repo.name} repo={repo} />
          ))}
        </div>
      </main>
      
      <AppleDock />
    </div>
  );
} 