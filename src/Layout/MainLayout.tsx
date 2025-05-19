import type { ReactNode } from 'react';
import Sidebar from '../components/Sidebar/SideBar';
import Header from '../components/Header/Header';

interface MainLayoutProps {
  children: ReactNode;
  title: string;
}

const MainLayout = ({ children, title }: MainLayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header title={title} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-blue-50 ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;