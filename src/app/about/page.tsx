"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';

export default function About() {
  const [activeTab, setActiveTab] = useState("profile");
  
  // Sample photo gallery data
  const photos = [
    {
      id: 1,
      title: "Project Showcase",
      description: "Presenting at the annual tech conference",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 2,
      title: "Team Collaboration",
      description: "Working with my team on a new project",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 3,
      title: "Code Workshop",
      description: "Leading a workshop on modern web development",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 4,
      title: "Design Process",
      description: "Sketching UI designs for a client project",
      imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 5,
      title: "Remote Work",
      description: "My productive home office setup",
      imageUrl: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      id: 6,
      title: "Hackathon Winner",
      description: "Celebrating after winning the regional hackathon",
      imageUrl: "https://images.unsplash.com/photo-1525422847952-7f91db09a364?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
  ];
  
  return (
    // @ts-ignore
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Main Content */}
      {/* @ts-ignore */}
      <main className="pt-8 px-6 pb-32">
        {/* @ts-ignore */}
        <div className="max-w-6xl mx-auto">
          <MacOSWindow title="About Me" variant="light">
            {/* @ts-ignore */}
            <div className="flex border-b mb-8">
              {/* @ts-ignore */}
              <button 
                className={`py-3 px-6 font-medium ${activeTab === 'profile' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-700'}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
              {/* @ts-ignore */}
              <button 
                className={`py-3 px-6 font-medium ${activeTab === 'photos' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-700'}`}
                onClick={() => setActiveTab('photos')}
              >
                Photos
              </button>
              {/* @ts-ignore */}
              <button 
                className={`py-3 px-6 font-medium ${activeTab === 'about' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-700'}`}
                onClick={() => setActiveTab('about')}
              >
                About Me
              </button>
            </div>
            
            {activeTab === 'profile' ? (
              // @ts-ignore
              <div>
                {/* @ts-ignore */}
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">About Me</h2>
                
                {/* @ts-ignore */}
                <div className="flex flex-col md:flex-row gap-8">
                  {/* @ts-ignore */}
                  <div className="md:w-1/3">
                    {/* @ts-ignore */}
                    <div className="bg-gray-100 rounded-lg overflow-hidden w-full aspect-square mb-4 relative">
                      <Image 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" 
                        alt="Profile Photo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* @ts-ignore */}
                    <div className="space-y-3">
                      {/* @ts-ignore */}
                      <div className="bg-gray-100 p-3 rounded-lg">
                        {/* @ts-ignore */}
                        <h3 className="font-medium text-gray-800">Location</h3>
                        {/* @ts-ignore */}
                        <p className="text-gray-600">Jambi, Indonesia</p>
                      </div>
                      
                      {/* @ts-ignore */}
                      <div className="bg-gray-100 p-3 rounded-lg">
                        {/* @ts-ignore */}
                        <h3 className="font-medium text-gray-800">Email</h3>
                        {/* @ts-ignore */}
                        <p className="text-gray-600">contact@example.com</p>
                      </div>
                      
                      {/* @ts-ignore */}
                      <div className="bg-gray-100 p-3 rounded-lg">
                        {/* @ts-ignore */}
                        <h3 className="font-medium text-gray-800">Experience</h3>
                        {/* @ts-ignore */}
                        <p className="text-gray-600">3+ years</p>
                      </div>
                      
                      {/* @ts-ignore */}
                      <div className="bg-gray-100 p-3 rounded-lg">
                        {/* @ts-ignore */}
                        <h3 className="font-medium text-gray-800">Languages</h3>
                        {/* @ts-ignore */}
                        <p className="text-gray-600">English, Indonesian</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* @ts-ignore */}
                  <div className="md:w-2/3">
                    {/* @ts-ignore */}
                    <h3 className="text-xl font-medium mb-4 text-gray-800">My Journey</h3>
                    {/* @ts-ignore */}
                    <p className="mb-4 text-gray-600">
                      I'm a passionate developer with 3+ years of experience creating modern and responsive websites and mobile applications. 
                      My journey began during my college years when I started exploring web development, which then evolved into a profound 
                      interest in mobile development.
                    </p>
                    
                    {/* @ts-ignore */}
                    <p className="mb-6 text-gray-600">
                      I specialize in Android development using Kotlin and also have experience with web technologies 
                      like React, Next.js, and Tailwind CSS.
                    </p>
                    
                    {/* @ts-ignore */}
                    <h3 className="text-xl font-medium mb-4 text-gray-800">Professional Experience</h3>
                    {/* @ts-ignore */}
                    <div className="space-y-4 mb-6">
                      {/* @ts-ignore */}
                      <div className="border-l-4 border-blue-500 pl-4">
                        {/* @ts-ignore */}
                        <h4 className="font-medium text-gray-800">Mobile Development Cohort</h4>
                        {/* @ts-ignore */}
                        <p className="text-sm mb-1 text-gray-500">Bangkit Academy | 2023</p>
                        {/* @ts-ignore */}
                        <p className="text-gray-600">Participated in a prestigious program led by Google, Tokopedia, Gojek & Traveloka. Developed Android applications using Kotlin and modern architecture components.</p>
                      </div>
                      
                      {/* @ts-ignore */}
                      <div className="border-l-4 border-blue-500 pl-4">
                        {/* @ts-ignore */}
                        <h4 className="font-medium text-gray-800">Mobile Developer</h4>
                        {/* @ts-ignore */}
                        <p className="text-sm mb-1 text-gray-500">PT. Amman Karya Indonesia | 2023</p>
                        {/* @ts-ignore */}
                        <p className="text-gray-600">Developed mobile applications for clients using Kotlin and integrating with back-end services.</p>
                      </div>
                    </div>
                    
                    {/* @ts-ignore */}
                    <h3 className="text-xl font-medium mb-4 text-gray-800">Skills</h3>
                    {/* @ts-ignore */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                      {['Kotlin', 'Android', 'Jetpack Compose', 'Room Database', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Git', 'Agile', 'Problem Solving', 'UI/UX'].map((skill) => (
                        // @ts-ignore
                        <div key={skill} className="bg-blue-50 p-2 rounded-lg text-center border border-blue-100">
                          {/* @ts-ignore */}
                          <span className="text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* @ts-ignore */}
                    <h3 className="text-xl font-medium mb-4 text-gray-800">Education</h3>
                    {/* @ts-ignore */}
                    <div className="space-y-3">
                      {/* @ts-ignore */}
                      <div className="border-l-4 border-blue-500 pl-4">
                        {/* @ts-ignore */}
                        <h4 className="font-medium text-gray-800">Computer Science</h4>
                        {/* @ts-ignore */}
                        <p className="text-gray-600">Universitas Jambi</p>
                      </div>
                      
                      {/* @ts-ignore */}
                      <div className="border-l-4 border-blue-500 pl-4">
                        {/* @ts-ignore */}
                        <h4 className="font-medium text-gray-800">Android Development Certification</h4>
                        {/* @ts-ignore */}
                        <p className="text-gray-600">Bangkit Academy, 2023</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : activeTab === 'photos' ? (
              // @ts-ignore
              <div>
                {/* @ts-ignore */}
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Photo Gallery</h2>
                {/* @ts-ignore */}
                <p className="mb-8 text-gray-600">A glimpse into my professional journey and work environment.</p>
                
                {/* @ts-ignore */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photos.map((photo) => (
                    // @ts-ignore
                    <div key={photo.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      {/* @ts-ignore */}
                      <div className="relative h-64 w-full">
                        <Image 
                          src={photo.imageUrl} 
                          alt={photo.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {/* @ts-ignore */}
                      <div className="p-4">
                        {/* @ts-ignore */}
                        <h3 className="font-medium mb-1 text-gray-800">{photo.title}</h3>
                        {/* @ts-ignore */}
                        <p className="text-sm text-gray-600">{photo.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              // @ts-ignore
              <div>
                {/* @ts-ignore */}
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">About Me</h2>
                
                {/* @ts-ignore */}
                <div className="prose max-w-none text-gray-600">
                  {/* @ts-ignore */}
                  <p className="mb-4 text-lg">
                    Hello! I'm Muhammad Gilang Ramadhan, a passionate developer based in Jambi, Indonesia with a focus on mobile and web application development.
                  </p>
                  
                  {/* @ts-ignore */}
                  <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">My Story</h3>
                  {/* @ts-ignore */}
                  <p className="mb-4">
                    My journey into development began during my university years when I discovered my passion for creating 
                    digital solutions. What started as curiosity quickly evolved into a career path I'm deeply enthusiastic about.
                  </p>
                  
                  {/* @ts-ignore */}
                  <p className="mb-4">
                    Through my participation in the Bangkit Academy program led by tech giants like Google, Tokopedia, Gojek, 
                    and Traveloka, I've had the opportunity to enhance my skills and collaborate with talented developers from 
                    across Indonesia.
                  </p>
                  
                  {/* @ts-ignore */}
                  <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">My Approach</h3>
                  {/* @ts-ignore */}
                  <p className="mb-4">
                    I believe in creating applications that not only function well but also provide an exceptional user experience. 
                    I'm particularly interested in how technology can solve real-world problems and make people's lives easier.
                  </p>
                  
                  {/* @ts-ignore */}
                  <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">Beyond Coding</h3>
                  {/* @ts-ignore */}
                  <p className="mb-4">
                    When I'm not immersed in code, I enjoy exploring new technologies, contributing to open-source projects, 
                    and mentoring aspiring developers. I'm also passionate about continuous learning and staying updated with 
                    the latest trends in the tech industry.
                  </p>
                  
                  {/* @ts-ignore */}
                  <p className="mb-4">
                    In my free time, I enjoy photography, hiking, and experiencing different cultures through travel whenever possible.
                  </p>
                  
                  {/* @ts-ignore */}
                  <h3 className="text-xl font-medium mt-6 mb-3 text-gray-800">Let's Connect</h3>
                  {/* @ts-ignore */}
                  <p className="mb-4">
                    I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. 
                    Feel free to reach out through any of my social media channels or directly via email.
                  </p>
                  
                  {/* @ts-ignore */}
                  <div className="mt-8 p-5 bg-blue-50 rounded-lg border border-blue-100">
                    {/* @ts-ignore */}
                    <p className="italic">
                      "Technology is best when it brings people together."
                    </p>
                  </div>
                </div>
              </div>
            )}
          </MacOSWindow>
        </div>
      </main>
      
      {/* Apple-style Dock at the bottom */}
      <AppleDock />
    </div>
  );
} 