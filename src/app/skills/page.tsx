"use client";

import React, { useState } from 'react';
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';
import SkillsGrid from '@/components/SkillsGrid';

// @ts-ignore
export default function Skills() {
  return (
    // @ts-ignore
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Main Content */}
      {/* @ts-ignore */}
      <main className="pt-8 px-6 pb-32">
        {/* @ts-ignore */}
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <MacOSWindow title="My Skills" variant="dark">
            {/* @ts-ignore */}
            <div className="space-y-4">
              {/* @ts-ignore */}
              <h1 className="text-3xl font-bold text-white">Technical Skills</h1>
              {/* @ts-ignore */}
              <p className="text-gray-300">
                As a passionate developer, I've developed expertise across various technologies.
                My skill set reflects my journey in creating intuitive and performant digital experiences.
              </p>
            </div>
          </MacOSWindow>
          
          {/* Skills Section */}
          <MacOSWindow title="Skills Overview" variant="system" className="w-full">
            <SkillsGrid />
          </MacOSWindow>
          
          {/* Experience Timeline */}
          <MacOSWindow title="Learning Journey" variant="dark">
            {/* @ts-ignore */}
            <div className="space-y-6">
              {/* @ts-ignore */}
              <h2 className="text-2xl font-semibold text-white mb-4">My Learning Path</h2>
              
              {/* Timeline */}
              {/* @ts-ignore */}
              <div className="relative pl-8 space-y-8 before:absolute before:left-4 before:h-full before:w-0.5 before:bg-gray-700">
                {/* Timeline Item */}
                {/* @ts-ignore */}
                <div className="relative">
                  {/* Circle marker */}
                  {/* @ts-ignore */}
                  <div className="absolute -left-8 mt-1.5 h-6 w-6 rounded-full border-2 border-blue-500 bg-gray-900 flex items-center justify-center">
                    {/* @ts-ignore */}
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                  </div>
                  
                  {/* Content */}
                  {/* @ts-ignore */}
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                    {/* @ts-ignore */}
                    <h3 className="text-lg font-medium text-white">2023 - Present</h3>
                    {/* @ts-ignore */}
                    <h4 className="text-blue-400 font-medium">Advanced Frontend Frameworks</h4>
                    {/* @ts-ignore */}
                    <p className="text-gray-300 mt-2">
                      Deepening expertise in React, Next.js, and TypeScript. Exploring advanced state management, performance optimization, and testing methodologies.
                    </p>
                  </div>
                </div>
                
                {/* Timeline Item */}
                {/* @ts-ignore */}
                <div className="relative">
                  {/* Circle marker */}
                  {/* @ts-ignore */}
                  <div className="absolute -left-8 mt-1.5 h-6 w-6 rounded-full border-2 border-green-500 bg-gray-900 flex items-center justify-center">
                    {/* @ts-ignore */}
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                  
                  {/* Content */}
                  {/* @ts-ignore */}
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                    {/* @ts-ignore */}
                    <h3 className="text-lg font-medium text-white">2021 - 2023</h3>
                    {/* @ts-ignore */}
                    <h4 className="text-green-400 font-medium">Full Stack Development</h4>
                    {/* @ts-ignore */}
                    <p className="text-gray-300 mt-2">
                      Expanded knowledge to include backend technologies such as Node.js, Express, and MongoDB. Learned about API design, authentication, and deployment.
                    </p>
                  </div>
                </div>
                
                {/* Timeline Item */}
                {/* @ts-ignore */}
                <div className="relative">
                  {/* Circle marker */}
                  {/* @ts-ignore */}
                  <div className="absolute -left-8 mt-1.5 h-6 w-6 rounded-full border-2 border-purple-500 bg-gray-900 flex items-center justify-center">
                    {/* @ts-ignore */}
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  </div>
                  
                  {/* Content */}
                  {/* @ts-ignore */}
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                    {/* @ts-ignore */}
                    <h3 className="text-lg font-medium text-white">2019 - 2021</h3>
                    {/* @ts-ignore */}
                    <h4 className="text-purple-400 font-medium">Frontend Fundamentals</h4>
                    {/* @ts-ignore */}
                    <p className="text-gray-300 mt-2">
                      Started with HTML, CSS, and JavaScript. Learned responsive design principles and basic UX concepts. Began working with React.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MacOSWindow>
          
          {/* Certifications */}
          <MacOSWindow title="Certifications & Achievements" variant="system">
            {/* @ts-ignore */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Certificate Card */}
              {/* @ts-ignore */}
              <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                {/* @ts-ignore */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AWS Certified Developer</h3>
                {/* @ts-ignore */}
                <p className="text-gray-600 mb-3">Amazon Web Services</p>
                {/* @ts-ignore */}
                <div className="flex justify-between items-center">
                  {/* @ts-ignore */}
                  <span className="text-sm text-gray-500">Issued: Jan 2023</span>
                  {/* @ts-ignore */}
                  <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Cloud</span>
                </div>
              </div>
              
              {/* Certificate Card */}
              {/* @ts-ignore */}
              <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                {/* @ts-ignore */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">React Advanced Concepts</h3>
                {/* @ts-ignore */}
                <p className="text-gray-600 mb-3">Frontend Masters</p>
                {/* @ts-ignore */}
                <div className="flex justify-between items-center">
                  {/* @ts-ignore */}
                  <span className="text-sm text-gray-500">Issued: Mar 2022</span>
                  {/* @ts-ignore */}
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Frontend</span>
                </div>
              </div>
              
              {/* Certificate Card */}
              {/* @ts-ignore */}
              <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                {/* @ts-ignore */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">UI/UX Design Fundamentals</h3>
                {/* @ts-ignore */}
                <p className="text-gray-600 mb-3">Interaction Design Foundation</p>
                {/* @ts-ignore */}
                <div className="flex justify-between items-center">
                  {/* @ts-ignore */}
                  <span className="text-sm text-gray-500">Issued: Sep 2021</span>
                  {/* @ts-ignore */}
                  <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Design</span>
                </div>
              </div>
              
              {/* Certificate Card */}
              {/* @ts-ignore */}
              <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                {/* @ts-ignore */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Stack JavaScript</h3>
                {/* @ts-ignore */}
                <p className="text-gray-600 mb-3">Udemy</p>
                {/* @ts-ignore */}
                <div className="flex justify-between items-center">
                  {/* @ts-ignore */}
                  <span className="text-sm text-gray-500">Issued: Dec 2020</span>
                  {/* @ts-ignore */}
                  <span className="bg-amber-100 text-amber-700 text-xs font-medium px-2.5 py-0.5 rounded-full">Full Stack</span>
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