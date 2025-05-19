import { FaEnvelope, FaBriefcase, FaUsers } from 'react-icons/fa';

export const DashboardCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Messages Card */}
    <div className="bg-yellow-400 p-6 rounded-2xl shadow-md flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:-rotate-x-1 hover:rotate-y-1">
      <div className="text-black text-4xl">
        <FaEnvelope />
      </div>
      <div className="ml-auto text-right">
        <div className="text-3xl font-extrabold text-black">138</div>
        <div className="text-sm font-bold text-black">Messages</div>
      </div>
    </div>

    {/* Jobs Card */}
    <div className="bg-blue-600 p-6 rounded-2xl shadow-md flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:-rotate-x-1 hover:rotate-y-1">
      <div className="text-white text-4xl">
        <FaBriefcase />
      </div>
      <div className="ml-auto text-right">
        <div className="text-3xl font-extrabold text-white">50</div>
        <div className="text-sm font-bold text-white">Jobs</div>
      </div>
    </div>

    {/* Candidates Card */}
    <div className="bg-green-600 p-6 rounded-2xl shadow-md flex items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:-rotate-x-1 hover:rotate-y-1">
      <div className="text-white text-4xl">
        <FaUsers />
      </div>
      <div className="ml-auto text-right">
        <div className="text-3xl font-extrabold text-white">100</div>
        <div className="text-sm font-bold text-white">Candidates</div>
      </div>
    </div>
  </div>
);
