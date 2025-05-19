import { createContext, useContext, useState } from 'react';

import type { ReactNode } from 'react';

type Page = 'dashboard' | 'employees' | 'messages' | 'jobs' | 'candidates' | 'resumes' | 'leave' | 'performance' | 'payroll';

type PageContextType = {
  currentPage: Page;
  changePage: (page: Page) => void;
  isTransitioning: boolean;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changePage = (page: Page) => {
    if (currentPage === page) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50); // Short delay for the enter animation to start
    }, 300); // Match this with the exit animation duration
  };

  return (
    <PageContext.Provider value={{ currentPage, changePage, isTransitioning }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePage must be used within a PageProvider');
  }
  return context;
};