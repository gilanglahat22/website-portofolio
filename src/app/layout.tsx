import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@/contexts/ThemeContext';
import { portfolio } from '@/data/portfolio';
import PortfolioChrome from "@/components/PortfolioChrome";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${portfolio.name} | Full Stack Software Engineer`,
  description: portfolio.headline,
};

const dockItems = [
  { name: 'Home', icon: '/icons/dock/home.svg', href: '/' },
  { name: 'About', icon: '/icons/dock/about.svg', href: '/about' },
  { name: 'Case Studies', icon: '/icons/dock/blog.svg', href: '/blog' },
  { name: 'Projects', icon: '/icons/dock/projects.svg', href: '/projects' },
  { name: 'Skills', icon: '/icons/dock/skills.svg', href: '/skills' },
  { name: 'Experience', icon: '/icons/dock/experience.svg', href: '/experience' },
  { name: 'Contact', icon: '/icons/dock/contact.svg', href: '/contact' },
  { name: 'GitHub', icon: '/icons/dock/github.svg', href: '/github' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <ThemeProvider>
          <PortfolioChrome dockItems={dockItems}>{children}</PortfolioChrome>
        </ThemeProvider>
      </body>
    </html>
  );
}
