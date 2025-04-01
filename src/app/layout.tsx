import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppleDock from '@/components/AppleDock';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Portfolio",
  description: "A modern portfolio website with macOS-style UI",
};

const dockItems = [
  { name: 'Home', icon: '/icons/dock/home.svg', href: '/' },
  { name: 'About', icon: '/icons/dock/about.svg', href: '/about' },
  { name: 'Blog', icon: '/icons/dock/blog.svg', href: '/blog' },
  { name: 'Projects', icon: '/icons/dock/projects.svg', href: '/projects' },
  { name: 'Skills', icon: '/icons/dock/skills.svg', href: '/skills' },
  { name: 'Experience', icon: '/icons/dock/experience.svg', href: '/experience' },
  { name: 'Contact', icon: '/icons/dock/contact.svg', href: '/contact' },
  { name: 'Public Chat', icon: '/icons/dock/public-chat.svg', href: '/public-chat' },
  { name: 'GitHub', icon: '/icons/dock/github.svg', href: '/github' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen relative overflow-x-hidden transition-colors duration-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black light:bg-gradient-to-br light:from-gray-100 light:to-white">
            {/* Theme Toggle Button */}
            <div className="fixed top-4 right-4 z-50">
              <ThemeToggle />
            </div>
            
            {/* Main Content */}
            <div className="relative z-10">
              {children}
            </div>
            
            {/* Background Blur Effects */}
            <div className="fixed inset-0 z-0">
              <div className="absolute top-20 left-20 w-72 h-72 dark:bg-purple-500 light:bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
              <div className="absolute top-40 right-20 w-72 h-72 dark:bg-yellow-500 light:bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
              <div className="absolute -bottom-8 left-40 w-72 h-72 dark:bg-pink-500 light:bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
            </div>
            
            {/* Dock */}
            <AppleDock items={dockItems} className="z-50" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
