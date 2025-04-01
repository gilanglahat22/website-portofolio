"use client";

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900">
      <div className="max-w-lg w-full rounded-xl overflow-hidden border shadow-lg bg-gray-900/95 text-white border-gray-700/50 backdrop-blur-md">
        <div className="flex items-center px-4 py-2 border-b border-gray-700/50 bg-opacity-50">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 text-center">
            <h3 className="text-sm font-medium truncate opacity-75">404 Not Found</h3>
          </div>
          <div className="w-14"></div>
        </div>
        
        <div className="p-4">
          <div className="text-center py-8">
            <div className="mb-6">
              <svg 
                className="w-24 h-24 mx-auto text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
            <p className="text-gray-400 mb-8">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 border border-white/20 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 