import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { FaAward } from 'react-icons/fa';

interface CertificationCardProps {
  title: string;
  organization: string;
  date: string;
  category: string;
  credential?: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  title,
  organization,
  date,
  category,
  credential,
}) => {
  return (
    <Card className="terminal-card group overflow-hidden rounded-[1.5rem] transition-all hover:-translate-y-1 hover:border-lime-200/40">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full border border-lime-200/25 bg-lime-200/10 flex items-center justify-center">
              <FaAward className="text-lime-200 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="text-sm text-white/60">{organization}</p>
              <p className="terminal-label text-xs text-white/45 mt-1">{date}</p>
              {credential && (
                <a 
                  href={credential} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2 text-xs text-lime-200 hover:text-white"
                >
                  View credential
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-3">
          <span className="terminal-pill inline-flex items-center px-2.5 py-0.5">
            {category}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationCard; 