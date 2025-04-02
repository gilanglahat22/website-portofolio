"use client";

import { useState, useRef, useEffect } from 'react';
import AppleDock from '@/components/AppleDock';
import MacOSWindow from '@/components/MacOSWindow';
import { useTheme } from '@/contexts/ThemeContext';

// Sample data for initial chat messages
const initialMessages = [
  { id: 1, username: "Anonymous_42", text: "Hello everyone! Anyone here?", timestamp: "2 hours ago" },
  { id: 2, username: "Anonymous_89", text: "Hey there! Yes, I'm here. What's up?", timestamp: "1 hour ago" },
  { id: 3, username: "Anonymous_17", text: "Just checking out this anonymous chat. Pretty cool!", timestamp: "1 hour ago" },
  { id: 4, username: "Anonymous_55", text: "Does anyone know good resources for learning React?", timestamp: "45 minutes ago" },
  { id: 5, username: "Anonymous_23", text: "I'd recommend the official React docs and courses by Maximilian Schwarzmüller.", timestamp: "30 minutes ago" },
  { id: 6, username: "Anonymous_76", text: "Thanks for the recommendation!", timestamp: "15 minutes ago" },
];

// Define the message type
interface ChatMessage {
  id: number;
  username: string;
  text: string;
  timestamp: string;
}

// Define the typing indicator state 
interface TypingState {
  [username: string]: boolean;
}

export default function PublicChat() {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState(() => {
    // Generate a random username like "Anonymous_XX"
    return `Anonymous_${Math.floor(Math.random() * 100)}`;
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isTyping, setIsTyping] = useState<TypingState>({});

  // Auto-scroll to the bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Simulate other users typing (just for demo)
  useEffect(() => {
    const interval = setInterval(() => {
      const randomUser = `Anonymous_${Math.floor(Math.random() * 100)}`;
      if (Math.random() > 0.7) {
        setIsTyping(prev => ({...prev, [randomUser]: true}));
        setTimeout(() => {
          setIsTyping(prev => {
            const newState = {...prev};
            delete newState[randomUser];
            return newState;
          });
        }, 3000);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const currentTime = new Date();
    const timeString = "Just now";

    const userMsg: ChatMessage = { 
      id: messages.length + 1, 
      username, 
      text: newMessage, 
      timestamp: timeString 
    };
    
    setMessages([...messages, userMsg]);
    setNewMessage("");
  };

  const generateRandomColor = (username: string): string => {
    // Generate a consistent color based on the username
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const hue = hash % 360;
    return `hsl(${hue}, 70%, 65%)`;
  };

  // Function to check window width safely for SSR
  const getWindowWidth = (): number => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 1024; // Default fallback value
  };

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <main className="pt-4 sm:pt-6 md:pt-8 px-2 sm:px-4 md:px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <MacOSWindow title="Public Anonymous Chat" variant="system">
            <div className="h-[calc(100vh-150px)] sm:h-[calc(100vh-200px)] md:h-[calc(100vh-250px)] flex flex-col">
              {/* Chat header */}
              <div className="p-2 sm:p-3 md:p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 card rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-medium">Public Chat Room</h3>
                      <p className="text-xs sm:text-sm">{messages.length} messages</p>
                    </div>
                  </div>
                  
                  {/* Online users */}
                  <div className="flex -space-x-1 sm:-space-x-2">
                    {/* Show avatar placeholders for first 5 users on larger screens, 3 on mobile */}
                    {[...Array(getWindowWidth() < 640 ? 3 : 5)].map((_, index) => (
                      <div 
                        key={index}
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 border-gray-800 flex items-center justify-center"
                        style={{ backgroundColor: generateRandomColor(`Anonymous_${index}`) }}
                      >
                        <span className="text-[10px] sm:text-xs font-bold text-white">
                          {String.fromCharCode(65 + index)}
                        </span>
                      </div>
                    ))}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full card border-2 border-gray-800 flex items-center justify-center">
                      <span className="text-[10px] sm:text-xs font-bold">+{getWindowWidth() < 640 ? '14' : '12'}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Messages area */}
              <div className="flex-1 p-2 sm:p-3 md:p-4 overflow-y-auto card space-y-3 sm:space-y-4">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className="flex items-start space-x-2 sm:space-x-3"
                  >
                    {/* Avatar */}
                    <div 
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: generateRandomColor(message.username) }}
                    >
                      <span className="text-[10px] sm:text-xs font-bold text-white">
                        {message.username.charAt(message.username.length - 2)}
                      </span>
                    </div>
                    
                    {/* Message content */}
                    <div className="flex-1 max-w-[calc(100%-40px)] sm:max-w-[calc(100%-60px)]">
                      <div className="flex flex-wrap items-baseline">
                        <h4 className="font-bold text-xs sm:text-sm mr-2">{message.username}</h4>
                        <span className="text-[10px] sm:text-xs">{message.timestamp}</span>
                      </div>
                      <div className="mt-1 card rounded-lg p-2 sm:p-3 text-xs sm:text-sm">
                        {message.text}
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing indicators */}
                {Object.keys(isTyping).length > 0 && (
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    {/* Avatar */}
                    <div 
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: generateRandomColor(Object.keys(isTyping)[0]) }}
                    >
                      <span className="text-[10px] sm:text-xs font-bold text-white">
                        {Object.keys(isTyping)[0].charAt(Object.keys(isTyping)[0].length - 2)}
                      </span>
                    </div>
                    
                    {/* Typing animation */}
                    <div className="flex-1">
                      <div className="flex items-baseline">
                        <h4 className="font-bold text-xs sm:text-sm">{Object.keys(isTyping)[0]}</h4>
                      </div>
                      <div className="mt-1 card rounded-lg p-2 sm:p-3">
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Auto-scroll anchor */}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Message input */}
              <form onSubmit={handleSendMessage} className="p-2 sm:p-3 md:p-4 border-t border-gray-700">
                {/* User identity */}
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xs sm:text-sm">You are:</span>
                  <span className="font-medium text-xs sm:text-sm">{username}</span>
                </div>
                
                {/* Message input field */}
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="card flex-1 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    className="card px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-600 hover:text-white transition-colors"
                  >
                    Send
                  </button>
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