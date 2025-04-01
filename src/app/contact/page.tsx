"use client";

import React, { useState } from 'react';
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';
import Image from 'next/image';

// @ts-ignore
export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    // @ts-ignore
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Main Content */}
      {/* @ts-ignore */}
      <main className="pt-4 sm:pt-6 md:pt-8 px-3 sm:px-4 md:px-6 pb-32">
        {/* @ts-ignore */}
        <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
          {/* Header */}
          <MacOSWindow title="Contact Me" variant="dark">
            {/* @ts-ignore */}
            <div className="space-y-2 sm:space-y-4">
              {/* @ts-ignore */}
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Get In Touch</h1>
              {/* @ts-ignore */}
              <p className="text-sm sm:text-base text-gray-300">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
          </MacOSWindow>
          
          {/* Contact Form & Info */}
          {/* @ts-ignore */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Contact Form */}
            <MacOSWindow title="Send a Message" variant="system" className="md:col-span-2">
              {isSubmitted ? (
                // @ts-ignore
                <div className="flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 px-4 text-center">
                  {/* @ts-ignore */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-600 w-6 h-6 sm:w-8 sm:h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {/* @ts-ignore */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  {/* @ts-ignore */}
                  <p className="text-sm sm:text-base text-gray-600">
                    Thank you for your message. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                // @ts-ignore
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 p-2 sm:p-3 md:p-4">
                  {/* Name Field */}
                  {/* @ts-ignore */}
                  <div>
                    {/* @ts-ignore */}
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  {/* Email Field */}
                  {/* @ts-ignore */}
                  <div>
                    {/* @ts-ignore */}
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  {/* Subject Field */}
                  {/* @ts-ignore */}
                  <div>
                    {/* @ts-ignore */}
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="Project Inquiry">Project Inquiry</option>
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  {/* Message Field */}
                  {/* @ts-ignore */}
                  <div>
                    {/* @ts-ignore */}
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                      placeholder="Tell me about your project, idea, or question..."
                    ></textarea>
                  </div>
                  
                  {/* Submit Button */}
                  {/* @ts-ignore */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium 
                        ${isSubmitting 
                          ? 'bg-blue-400 text-white cursor-not-allowed' 
                          : 'bg-blue-600 text-white hover:bg-blue-700 transition-colors'
                        }
                      `}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </MacOSWindow>
            
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-4 sm:space-y-6">
              {/* Contact Details */}
              <MacOSWindow title="Contact Details" variant="system">
                {/* @ts-ignore */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Contact Item */}
                  {/* @ts-ignore */}
                  <div className="flex items-center">
                    {/* @ts-ignore */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-blue-600 w-4 h-4 sm:w-5 sm:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    {/* @ts-ignore */}
                    <div>
                      {/* @ts-ignore */}
                      <h3 className="text-xs sm:text-sm font-medium text-gray-700">Email</h3>
                      {/* @ts-ignore */}
                      <p className="text-xs sm:text-sm text-gray-600">hello@example.com</p>
                    </div>
                  </div>
                  
                  {/* Contact Item */}
                  {/* @ts-ignore */}
                  <div className="flex items-center">
                    {/* @ts-ignore */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-600 w-4 h-4 sm:w-5 sm:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    {/* @ts-ignore */}
                    <div>
                      {/* @ts-ignore */}
                      <h3 className="text-xs sm:text-sm font-medium text-gray-700">Phone</h3>
                      {/* @ts-ignore */}
                      <p className="text-xs sm:text-sm text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  {/* Contact Item */}
                  {/* @ts-ignore */}
                  <div className="flex items-center">
                    {/* @ts-ignore */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-purple-600 w-4 h-4 sm:w-5 sm:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    {/* @ts-ignore */}
                    <div>
                      {/* @ts-ignore */}
                      <h3 className="text-xs sm:text-sm font-medium text-gray-700">Location</h3>
                      {/* @ts-ignore */}
                      <p className="text-xs sm:text-sm text-gray-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </MacOSWindow>
              
              {/* Social Links */}
              <MacOSWindow title="Connect With Me" variant="system">
                {/* @ts-ignore */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {/* GitHub */}
                  {/* @ts-ignore */}
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 sm:p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    {/* @ts-ignore */}
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#333"/>
                      </svg>
                      {/* @ts-ignore */}
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">GitHub</span>
                    </div>
                  </a>
                  
                  {/* LinkedIn */}
                  {/* @ts-ignore */}
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 sm:p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    {/* @ts-ignore */}
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#0077B5"/>
                      </svg>
                      {/* @ts-ignore */}
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">LinkedIn</span>
                    </div>
                  </a>
                  
                  {/* Twitter */}
                  {/* @ts-ignore */}
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 sm:p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    {/* @ts-ignore */}
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" fill="#1DA1F2"/>
                      </svg>
                      {/* @ts-ignore */}
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">Twitter</span>
                    </div>
                  </a>
                  
                  {/* Dribbble */}
                  {/* @ts-ignore */}
                  <a 
                    href="https://dribbble.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 sm:p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                  >
                    {/* @ts-ignore */}
                    <div className="flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2">
                        <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" fill="#EA4C89"/>
                      </svg>
                      {/* @ts-ignore */}
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">Dribbble</span>
                    </div>
                  </a>
                </div>
              </MacOSWindow>
            </div>
          </div>
        </div>
      </main>
      
      {/* Apple-style Dock at the bottom */}
      <AppleDock />
    </div>
  );
} 