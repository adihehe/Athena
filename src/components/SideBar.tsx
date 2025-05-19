import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaUsers,
  FaBriefcase,
  FaFileAlt,
  FaUserFriends,
  FaBook,
  FaEnvelope,
  FaTimes,
  FaBars,
  FaChartLine,
  FaMoneyBillWave,
  FaSignOutAlt
} from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

// Define navigation item types
type NavigationItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  category: string;
  badge?: number;
};

// Define navigation items
const navigation: NavigationItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: FaHome, category: 'features' },
  { name: 'Messages', href: '/messages', icon: FaEnvelope, badge: 1, category: 'features' },
  { name: 'Jobs', href: '/jobs', icon: FaBriefcase, category: 'recruitment' },
  { name: 'Candidates', href: '/candidates', icon: FaUsers, category: 'recruitment' },
  { name: 'Resumes', href: '/resumes', icon: FaFileAlt, category: 'recruitment' },
  { name: 'Employee Management', href: '/employees', icon: FaUserFriends, category: 'organization' },
  { name: 'Leave Management', href: '/leave', icon: FaBook, category: 'organization' },
  { name: 'Performance Management', href: '/performance', icon: FaChartLine, category: 'organization' },
  { name: 'Payroll Management', href: '/payroll', icon: FaMoneyBillWave, category: 'kris-pay' },
];

// Store which page is transitioning for animation
let transitioningTo: string | null = null;

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const location = useLocation();

  // Set up slide animation whenever location changes
  useEffect(() => {
    // If we have recorded a page transition, animate
    if (transitioningTo && transitioningTo === location.pathname) {
      setIsPageTransitioning(true);
      // Reset after animation completes
      setTimeout(() => {
        setIsPageTransitioning(false);
        transitioningTo = null;
      }, 300);
    }
  }, [location]);

  // Add transition classes to the main content
  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      if (isPageTransitioning) {
        mainContent.classList.add('animate-slide-in');
      } else {
        mainContent.classList.remove('animate-slide-in');
      }
    }
  }, [isPageTransitioning]);

  const handleLogout = () => {
    logout();
  };

  const handleLinkClick = (href: string) => {
    // Record which page we're going to for the animation effect
    if (location.pathname !== href) {
      transitioningTo = href;
      
      // Add exit animation to current content
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.classList.add('animate-slide-out');
        setTimeout(() => {
          mainContent.classList.remove('animate-slide-out');
        }, 300);
      }
    }
  };

  return (
    <>
      {/* Mobile sidebar */}
      <div className="lg:hidden fixed inset-0 z-40 flex">
        <div
          className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity ${
            sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setSidebarOpen(false)}
        />

        <div
          className={`relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-navy-900 transition transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <FaTimes className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Sidebar content */}
          <SidebarContent logout={handleLogout} onLinkClick={handleLinkClick} />
        </div>
      </div>

      {/* Mobile sidebar toggle button */}
      <div className="lg:hidden fixed top-0 left-0 z-30 p-4">
        <button
          type="button"
          className="p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars className="h-6 w-6" aria-hidden="true" />
          <span className="sr-only">Open sidebar</span>
        </button>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col flex-grow overflow-y-auto bg-[#0e1c36] text-white">
            {/* Sidebar content */}
            <SidebarContent logout={handleLogout} onLinkClick={handleLinkClick} />
          </div>
        </div>
      </div>
    </>
  );
};

interface SidebarContentProps {
  logout: () => void;
  onLinkClick: (href: string) => void;
}

const SidebarContent = ({ logout, onLinkClick }: SidebarContentProps) => {
  const { user } = useAuth();
  
  // Group navigation items by category
  const features = navigation.filter(item => item.category === 'features');
  const recruitment = navigation.filter(item => item.category === 'recruitment');
  const organization = navigation.filter(item => item.category === 'organization');
  const krisPay = navigation.filter(item => item.category === 'kris-pay');
  
  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      {/* User profile */}
      <div className="flex flex-col items-center justify-center px-4 pt-8 pb-6">
        <div className="relative rounded-full h-20 w-20 bg-yellow-400 flex items-center justify-center mb-3 overflow-hidden border-4 border-yellow-500">
          <img src="/avatars/admin.png" alt="Admin" className="w-full h-full object-cover" />
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold">KRIS Admin</h2>
          <p className="text-sm text-gray-300">Admin</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-1 px-4">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Features</p>
        <nav className="space-y-1 mb-6">
          {features.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => onLinkClick(item.href)}
              className={({ isActive }) =>
                `group relative flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors transform transition-transform duration-200 ${
                  isActive
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-100 hover:bg-gray-800 hover:translate-x-2'
                }`
              }
            >
              <item.icon className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
              {item.name}
              {item.badge && (
                <span className="ml-auto inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-red-500 rounded-full">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Recruitment</p>
        <nav className="space-y-1 mb-6">
          {recruitment.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => onLinkClick(item.href)}
              className={({ isActive }) =>
                `group relative flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors transform transition-transform duration-200 ${
                  isActive
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-100 hover:bg-gray-800 hover:translate-x-2'
                }`
              }
            >
              <item.icon className="mr-3 h-5 w-5 flex-shrink-0" aria-hidden="true" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Organization</p>
        <nav className="space-y-1 mb-6">
          {organization.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => onLinkClick(item.href)}
              className={({ isActive }) =>
                `group flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors transform transition-transform duration-200 ${
                  isActive
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-100 hover:bg-gray-800 hover:translate-x-2'
                }`
              }
            >
              <item.icon className="mr-3 h-5 w-5" aria-hidden="true" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">KRIS Pay</p>
        <nav className="space-y-1 mb-6">
          {krisPay.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => onLinkClick(item.href)}
              className={({ isActive }) =>
                `group flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors transform transition-transform duration-200 ${
                  isActive
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-100 hover:bg-gray-800 hover:translate-x-2'
                }`
              }
            >
              <item.icon className="mr-3 h-5 w-5" aria-hidden="true" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Logout button */}
        <button
          onClick={logout}
          className="w-full mt-auto bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-md flex items-center justify-center"
        >
          <FaSignOutAlt className="mr-2" />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;