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
    <Card className="overflow-hidden transition-all hover:shadow-md group card">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <FaAward className="text-blue-600 w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-medium">{title}</h3>
              <p className="text-sm text-gray-600 dark:text-neutral-400">{organization}</p>
              <p className="text-xs text-gray-500 dark:text-neutral-500 mt-1">{date}</p>
              {credential && (
                <a 
                  href={credential} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2 text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
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
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {category}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default CertificationCard; 