"use client";

import React, { useState } from 'react';
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';

// @ts-ignore
const RepoCard = ({ repo }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    // @ts-ignore
    <div 
      className={`bg-white border border-gray-200 rounded-lg p-5 transition-all duration-300 ${
        isHovered ? 'shadow-lg transform -translate-y-1' : 'shadow-md'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* @ts-ignore */}
      <div className="flex justify-between items-start mb-3">
        {/* @ts-ignore */}
        <h3 className="text-lg font-semibold text-blue-600">{repo.name}</h3>
        {/* @ts-ignore */}
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <span className="flex items-center text-sm text-gray-600">
            {/* @ts-ignore */}
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              {/* @ts-ignore */}
              <path d="M10 2a1 1 0 00-1 1v1.323l-3.954 1.582a1.5 1.5 0 00-.646 2.27l1.421 2.162c.421.64 1.16.964 1.89.79l5.14-1.199v3.648l-1.296 1.296a1 1 0 101.414 1.414l1.296-1.296 1.296 1.296a1 1 0 001.414-1.414l-1.296-1.296V8.927l5.14 1.199c.73.174 1.47-.15 1.89-.79l1.422-2.162a1.5 1.5 0 00-.646-2.27L11 3.323V2a1 1 0 00-1-1z" />
            </svg>
            {repo.stars}
          </span>
          {/* @ts-ignore */}
          <span className="flex items-center text-sm text-gray-600">
            {/* @ts-ignore */}
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              {/* @ts-ignore */}
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
            </svg>
            {repo.forks}
          </span>
        </div>
      </div>
      
      {/* @ts-ignore */}
      <p className="text-gray-600 mb-4">{repo.description}</p>
      
      {/* @ts-ignore */}
      <div className="flex justify-between items-center">
        {/* @ts-ignore */}
        <div className="flex space-x-2">
          {repo.topics.map((topic, index) => (
            // @ts-ignore
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
        
        {/* @ts-ignore */}
        <span className="text-xs text-gray-500">Updated {repo.updatedAt}</span>
      </div>
    </div>
  );
};

// @ts-ignore
const ContributionGraph = () => {
  // Generate random contribution data
  const generateContributions = () => {
    const contributions = [];
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
  const weeks = [];
  for (let i = 0; i < contributions.length; i += 7) {
    weeks.push(contributions.slice(i, i + 7));
  }
  
  // Return color based on contribution count
  // @ts-ignore
  const getColor = (count) => {
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

// @ts-ignore
const LanguageStats = () => {
  const languages = [
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

// @ts-ignore
export default function GitHub() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock GitHub profile data
  const profile = {
    username: 'johndoe',
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/150',
    bio: 'Full-stack developer passionate about web technologies and open source',
    company: 'Acme Inc.',
    location: 'San Francisco, CA',
    website: 'https://johndoe.dev',
    followers: 126,
    following: 89,
    repos: [
      {
        name: 'awesome-project',
        description: 'A revolutionary web application built with Next.js and TypeScript',
        stars: 128,
        forks: 32,
        topics: ['next-js', 'typescript', 'react'],
        updatedAt: '3 days ago'
      },
      {
        name: 'portfolio-website',
        description: 'My personal portfolio website with Apple-inspired design',
        stars: 87,
        forks: 15,
        topics: ['portfolio', 'nextjs', 'tailwindcss'],
        updatedAt: '1 week ago'
      },
      {
        name: 'react-components',
        description: 'A collection of reusable React components with TypeScript',
        stars: 245,
        forks: 76,
        topics: ['react', 'components', 'typescript'],
        updatedAt: '2 weeks ago'
      },
      {
        name: 'data-visualization',
        description: 'Interactive data visualization library using D3.js and React',
        stars: 192,
        forks: 41,
        topics: ['d3', 'react', 'data-viz'],
        updatedAt: '1 month ago'
      }
    ]
  };
  
  return (
    // @ts-ignore
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Main Content */}
      {/* @ts-ignore */}
      <main className="pt-8 px-6 pb-32">
        {/* @ts-ignore */}
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <MacOSWindow title="GitHub Profile" variant="dark">
            {/* @ts-ignore */}
            <div className="p-6">
              {/* @ts-ignore */}
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar and basic info */}
                {/* @ts-ignore */}
                <div className="md:w-1/4">
                  {/* @ts-ignore */}
                  <div className="text-center md:text-left">
                    {/* @ts-ignore */}
                    <img 
                      src={profile.avatar} 
                      alt={profile.username} 
                      className="w-32 h-32 rounded-full mx-auto md:mx-0 border-4 border-gray-700"
                    />
                    {/* @ts-ignore */}
                    <h1 className="text-2xl font-bold text-white mt-4">{profile.name}</h1>
                    {/* @ts-ignore */}
                    <h2 className="text-lg text-gray-400 mb-4">{profile.username}</h2>
                    {/* @ts-ignore */}
                    <button className="w-full bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors">
                      Follow
                    </button>
                  </div>
                  
                  {/* @ts-ignore */}
                  <div className="mt-6 space-y-3 text-gray-300">
                    {/* @ts-ignore */}
                    <p>{profile.bio}</p>
                    
                    {/* @ts-ignore */}
                    <div className="flex items-center">
                      {/* @ts-ignore */}
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        {/* @ts-ignore */}
                        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5a1 1 0 01-.707-.293l-1.586-1.586A1 1 0 007.414 4H4zm3 2h3a1 1 0 110 2H7a1 1 0 110-2z" clipRule="evenodd" />
                      </svg>
                      {profile.company}
                    </div>
                    
                    {/* @ts-ignore */}
                    <div className="flex items-center">
                      {/* @ts-ignore */}
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        {/* @ts-ignore */}
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {profile.location}
                    </div>
                    
                    {/* @ts-ignore */}
                    <div className="flex items-center">
                      {/* @ts-ignore */}
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        {/* @ts-ignore */}
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      {/* @ts-ignore */}
                      <a href={profile.website} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">{profile.website}</a>
                    </div>
                    
                    {/* @ts-ignore */}
                    <div className="flex space-x-4 mt-4">
                      {/* @ts-ignore */}
                      <span className="flex items-center">
                        {/* @ts-ignore */}
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          {/* @ts-ignore */}
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        {/* @ts-ignore */}
                        <span>{profile.followers} followers</span>
                      </span>
                      {/* @ts-ignore */}
                      <span className="flex items-center">
                        {/* @ts-ignore */}
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          {/* @ts-ignore */}
                          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                        </svg>
                        {/* @ts-ignore */}
                        <span>{profile.following} following</span>
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Tabs and content */}
                {/* @ts-ignore */}
                <div className="md:w-3/4">
                  {/* Tabs */}
                  {/* @ts-ignore */}
                  <div className="border-b border-gray-700 mb-6">
                    {/* @ts-ignore */}
                    <nav className="flex -mb-px">
                      {['overview', 'repositories', 'projects', 'packages'].map(tab => (
                        // @ts-ignore
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`py-3 px-4 text-sm font-medium border-b-2 ${
                            activeTab === tab 
                              ? 'border-orange-500 text-white' 
                              : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-600'
                          }`}
                        >
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                      ))}
                    </nav>
                  </div>
                  
                  {/* Tab content */}
                  {activeTab === 'overview' && (
                    // @ts-ignore
                    <div>
                      {/* @ts-ignore */}
                      <h3 className="text-white text-lg font-semibold mb-4">Popular Repositories</h3>
                      {/* @ts-ignore */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        {profile.repos.slice(0, 2).map((repo, index) => (
                          // @ts-ignore
                          <RepoCard key={index} repo={repo} />
                        ))}
                      </div>
                      
                      {/* @ts-ignore */}
                      <h3 className="text-white text-lg font-semibold mb-4">Contribution Activity</h3>
                      {/* @ts-ignore */}
                      <div className="bg-white rounded-lg shadow-lg mb-8">
                        <ContributionGraph />
                      </div>
                      
                      {/* @ts-ignore */}
                      <h3 className="text-white text-lg font-semibold mb-4">Languages</h3>
                      {/* @ts-ignore */}
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <LanguageStats />
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'repositories' && (
                    // @ts-ignore
                    <div>
                      {/* @ts-ignore */}
                      <div className="flex justify-between items-center mb-6">
                        {/* @ts-ignore */}
                        <div className="relative">
                          {/* @ts-ignore */}
                          <input
                            type="text"
                            placeholder="Find a repository..."
                            className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          {/* @ts-ignore */}
                          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            {/* @ts-ignore */}
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                          </svg>
                        </div>
                        
                        {/* @ts-ignore */}
                        <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors">
                          New
                        </button>
                      </div>
                      
                      {/* @ts-ignore */}
                      <div className="space-y-4">
                        {profile.repos.map((repo, index) => (
                          // @ts-ignore
                          <RepoCard key={index} repo={repo} />
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'projects' && (
                    // @ts-ignore
                    <div className="text-center py-12">
                      {/* @ts-ignore */}
                      <svg className="w-16 h-16 mx-auto text-gray-500 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        {/* @ts-ignore */}
                        <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
                      </svg>
                      {/* @ts-ignore */}
                      <h3 className="text-lg font-medium text-white mb-2">No projects yet</h3>
                      {/* @ts-ignore */}
                      <p className="text-gray-400 max-w-md mx-auto mb-6">
                        Projects help you organize your repositories into customizable categories.
                      </p>
                      {/* @ts-ignore */}
                      <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors">
                        Create Project
                      </button>
                    </div>
                  )}
                  
                  {activeTab === 'packages' && (
                    // @ts-ignore
                    <div className="text-center py-12">
                      {/* @ts-ignore */}
                      <svg className="w-16 h-16 mx-auto text-gray-500 mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        {/* @ts-ignore */}
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                      {/* @ts-ignore */}
                      <h3 className="text-lg font-medium text-white mb-2">No packages published</h3>
                      {/* @ts-ignore */}
                      <p className="text-gray-400 max-w-md mx-auto mb-6">
                        You haven't published any packages yet. Packages are reusable code libraries that others can depend on.
                      </p>
                      {/* @ts-ignore */}
                      <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors">
                        Learn More
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </MacOSWindow>
        </div>
      </main>
      
      {/* Apple-style Dock at the bottom */}
      <AppleDock />
    </div>
  );
} 