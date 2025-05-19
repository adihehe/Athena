import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FaSearch, FaBell, FaWrench, FaEnvelope, FaBars } from 'react-icons/fa';

interface HeaderProps {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    const { user } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('All Candidates');

    return (
        <header className="bg-gray-100 shadow-sm">
            <div className="flex flex-col px-4 py-3 lg:px-6">
                {/* Upper section with search and icons */}
                <div className="flex items-center justify-between mb-4">
                    {/* Mobile menu toggle button */}
                    <button
                        type="button"
                        className="p-2 lg:hidden"
                        aria-label="Toggle menu"
                    >
                        <FaBars className="w-6 h-6" />
                    </button>

                    {/* Search bar with dropdown */}
                    <div className="flex items-center flex-1 max-w-xl mx-auto">
                        <div className="relative flex items-center w-full ">
                            <div className="relative ">
                                <button
                                    className="px-4 py-2 bg-blue-700 text-white rounded-l-md flex items-center text-sm font-medium"
                                >
                                    All Candidates
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full py-2 pl-4 pr-10 border-0 rounded-r-md focus:ring-0 focus:outline-none"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                                    <FaSearch className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Notification icons */}
                    <div className="flex items-center space-x-3">
                        <button className="relative p-2 text-white bg-blue-700 rounded-full shadow-md transition-all duration-200 hover:bg-blue-800 hover:shadow-lg">
                            <FaBell className="w-6 h-6" />
                            <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full shadow">
                                3
                            </span>
                        </button>

                        <button className="p-2 text-black bg-yellow-400 rounded-full shadow-md transition-all duration-200 hover:bg-yellow-500 hover:shadow-lg">
                            <FaWrench className="w-6 h-6" />
                        </button>

                        <button className="relative p-2 text-white bg-green-600 rounded-full shadow-md transition-all duration-200 hover:bg-green-700 hover:shadow-lg">
                            <FaEnvelope className="w-6 h-6" />
                            <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full shadow">
                                2
                            </span>
                        </button>
                    </div>

                </div>

                {/* Page title */}
                <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            </div>
        </header>
    );
};

export default Header;