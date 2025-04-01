"use client";

import { useState, useRef, useEffect } from 'react';
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';

export default function ChatAnonymous() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! This is an anonymous chat. Feel free to ask any questions.", isUser: false }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState("Anonymous");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    // Add user message
    const userMsg = { id: messages.length + 1, text: newMessage, isUser: true };
    setMessages([...messages, userMsg]);
    setNewMessage("");

    // Simulate response after a short delay
    setTimeout(() => {
      const botResponses = [
        "Thank you for your message! I'll get back to you soon.",
        "Interesting question! Let me think about that.",
        "I appreciate your feedback!",
        "Thanks for reaching out anonymously.",
        "I understand your concern. Let me help you with that."
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMsg = { id: messages.length + 2, text: randomResponse, isUser: false };
      setMessages(prevMessages => [...prevMessages, botMsg]);
    }, 1000);
  };

  return (
    // @ts-ignore
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Main Content */}
      {/* @ts-ignore */}
      <main className="pt-8 px-6 pb-32">
        {/* @ts-ignore */}
        <div className="max-w-3xl mx-auto">
          <MacOSWindow title="Anonymous Chat" variant="dark">
            {/* @ts-ignore */}
            <div className="h-[calc(100vh-250px)] flex flex-col">
              {/* Chat header */}
              {/* @ts-ignore */}
              <div className="p-4 border-b border-gray-700">
                {/* @ts-ignore */}
                <div className="flex items-center justify-between">
                  {/* @ts-ignore */}
                  <div className="flex items-center space-x-3">
                    {/* @ts-ignore */}
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                      {/* @ts-ignore */}
                      <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {/* @ts-ignore */}
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    {/* @ts-ignore */}
                    <div>
                      {/* @ts-ignore */}
                      <h3 className="text-white font-medium">Chat as Anonymous</h3>
                      {/* @ts-ignore */}
                      <p className="text-gray-400 text-sm">Your identity is hidden</p>
                    </div>
                  </div>
                  
                  {/* Status indicator */}
                  {/* @ts-ignore */}
                  <div className="flex items-center">
                    {/* @ts-ignore */}
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {/* @ts-ignore */}
                    <span className="text-gray-300 text-sm">Online</span>
                  </div>
                </div>
              </div>
              
              {/* Messages area */}
              {/* @ts-ignore */}
              <div className="flex-1 p-4 overflow-y-auto bg-gray-800">
                {messages.map((message) => (
                  // @ts-ignore
                  <div 
                    key={message.id} 
                    className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {/* @ts-ignore */}
                    <div 
                      className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${
                        message.isUser 
                          ? 'bg-blue-600 text-white rounded-br-none' 
                          : 'bg-gray-700 text-gray-200 rounded-bl-none'
                      }`}
                    >
                      {/* @ts-ignore */}
                      <div className="text-sm mb-1">
                        {message.isUser ? username : 'Support'}
                      </div>
                      {/* @ts-ignore */}
                      <p>{message.text}</p>
                    </div>
                  </div>
                ))}
                {/* @ts-ignore */}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Message input */}
              {/* @ts-ignore */}
              <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
                {/* @ts-ignore */}
                <div className="flex space-x-2">
                  {/* @ts-ignore */}
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-gray-700 text-white placeholder-gray-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {/* @ts-ignore */}
                  <button
                    type="submit"
                    className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {/* @ts-ignore */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      {/* @ts-ignore */}
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </button>
                </div>
                
                {/* Username input */}
                {/* @ts-ignore */}
                <div className="mt-2 flex items-center">
                  {/* @ts-ignore */}
                  <label className="text-sm text-gray-400 mr-2">Your name:</label>
                  {/* @ts-ignore */}
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value || "Anonymous")}
                    placeholder="Anonymous"
                    className="bg-gray-700 text-white text-sm rounded px-2 py-1 w-40 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  {/* @ts-ignore */}
                  <span className="ml-2 text-xs text-gray-500">(Optional)</span>
                </div>
              </form>
            </div>
          </MacOSWindow>
        </div>
      </main>
      
      {/* Apple-style Dock at the bottom */}
      <AppleDock />
    </div>
  );
}
