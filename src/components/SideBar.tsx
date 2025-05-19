import { MdDashboard, MdMessage, MdWork, MdPeople, MdLogout } from 'react-icons/md';

export const Sidebar = () => {
  return (
    <div className="w-64 bg-[#0b1c3f] text-white h-screen flex flex-col justify-between">
      <div>
        <div className="text-center py-6">
          <div className="text-xl font-bold">KRIS Admin</div>
          <div className="text-sm text-gray-400">Admin</div>
        </div>
        <nav className="space-y-2 px-4">
          <button className="flex items-center gap-3 px-3 py-2 bg-yellow-400 text-black rounded">
            <MdDashboard size={20} /> Dashboard
          </button>
          <button className="flex items-center gap-3 px-3 py-2">
            <MdMessage size={20} /> Messages
          </button>
          <button className="flex items-center gap-3 px-3 py-2">
            <MdWork size={20} /> Jobs
          </button>
          <button className="flex items-center gap-3 px-3 py-2">
            <MdPeople size={20} /> Candidates
          </button>
        </nav>
      </div>
      <button className="flex items-center gap-3 px-4 py-3 bg-red-600 text-white rounded m-4">
        <MdLogout size={20} /> Log Out
      </button>
    </div>
  );
};
