"use client";

import React, { useState } from 'react';
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';
import SkillsGrid from '@/components/SkillsGrid';
import { useTheme } from '@/contexts/ThemeContext';
import CertificationCard from '@/components/CertificationCard';
import MacOSTerminal from '@/components/MacOSTerminal';

export default function Skills() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="pt-8 px-6 pb-32">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <MacOSWindow title="My Skills" variant="system">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">Technical Skills</h1>
              <p>
                As a Software Engineer with expertise in backend engineering, distributed systems, and LLM optimization,
                I've developed expertise across multiple programming languages and frameworks. My technical foundation
                includes Object-Oriented Programming, SOLID Design Principles, Data Structures and Algorithms, and System Design.
              </p>
            </div>
          </MacOSWindow>

          {/* Skills Section */}
          <MacOSWindow title="Skills Overview" variant="system" className="w-full">
            <SkillsGrid />
          </MacOSWindow>

          {/* Achievements Section */}
          <MacOSWindow title="Achievements & Competitions" variant="system">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Competitive Programming Achievements</h2>
              <p>Recognition from national and international programming competitions.</p>

              <div className="space-y-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="card p-4 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="font-semibold text-lg">🏆 Finalist ICPC Asia Jakarta Regional 2021</h3>
                    <p className="text-sm mt-1">Qualified through INC, competing against 100+ national teams in the prestigious ACM International Collegiate Programming Contest.</p>
                  </div>

                  <div className="card p-4 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-semibold text-lg">🥈 Indonesia National Contest 2021 (Top 40)</h3>
                    <p className="text-sm mt-1">Placed 42nd among all undergraduate teams in the national programming contest.</p>
                  </div>

                  <div className="card p-4 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-semibold text-lg">🎯 Gemastik XV Programming Division 2022</h3>
                    <p className="text-sm mt-1">Selected as ITB's 4th place team representative for the national competition.</p>
                  </div>

                  <div className="card p-4 rounded-lg border-l-4 border-purple-500">
                    <h3 className="font-semibold text-lg">🌍 Meta Hacker Cup Round 1 2022 (Top 7%)</h3>
                    <p className="text-sm mt-1">Ranked 18th in Indonesia and 946th globally out of 12,330 participants.</p>
                  </div>
                </div>
              </div>
            </div>
          </MacOSWindow>

          {/* Organizational Experience */}
          <MacOSWindow title="Organizational Experience" variant="system">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Leadership & Community</h2>

              <div className="space-y-4 py-4">
                <div className="card p-4 rounded-lg">
                  <h3 className="font-semibold">Competitive Programming Committee</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Arkavidia 8.0 | September 2022 – October 2023</p>
                  <p className="mt-2">Designed and reviewed problems across various difficulty levels for the annual ITB programming competition.</p>
                </div>

                <div className="card p-4 rounded-lg">
                  <h3 className="font-semibold">Competition Division Staff</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">HMIF ITB | April 2021 – March 2023</p>
                  <p className="mt-2">Conducted training for 30+ participants in competitive programming, helping prepare students for national competitions.</p>
                </div>
              </div>
            </div>
          </MacOSWindow>

          {/* Core Competencies */}
          <MacOSWindow title="Core Competencies" variant="system">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Technologies & Expertise</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                <div className="card p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-600">Core Skills</h3>
                  <p className="text-sm mt-2">Object-Oriented Programming, SOLID Design Principle, Data Structures and Algorithm, Distributed Systems, Backend Engineering, System Design, Software Architecture, Computer Networks.</p>
                </div>

                <div className="card p-4 rounded-lg">
                  <h3 className="font-semibold text-green-600">Technologies</h3>
                  <p className="text-sm mt-2">CI/CD, Microservices, Git, Web Development, RESTful API, Cloud Computing, Machine Learning, LLM Optimization, Langchain.</p>
                </div>
              </div>
            </div>
          </MacOSWindow>
        </div>
      </main>

      {/* Apple-style Dock */}
      <AppleDock />
    </div>
  );
}

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description }) => {
  return (
    <div className="relative">
      {/* Circle marker */}
      <div className="absolute -left-8 mt-1.5 h-6 w-6 rounded-full border-2 border-current flex items-center justify-center">
        <span className="text-xs font-medium">{year}</span>
      </div>

      {/* Content */}
      <div className="card rounded-lg p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};