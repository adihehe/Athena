import { useDashboard } from "../../context/DashBoardContext";
import { FaEllipsisV } from 'react-icons/fa';

export const AppliedJobs = () => {
  const { appliedJobs } = useDashboard();

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Applied Jobs</h2>
        <button className="text-gray-400 hover:text-gray-600 transition cursor-pointer">
          <FaEllipsisV />
        </button>
      </div>

      <ul className="space-y-3">
        {appliedJobs.map(job => (
          <li
            key={job.id}
            className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:-rotate-x-[0.3deg] hover:rotate-y-[0.3deg]"
          >
            <div className="flex items-center gap-3">
              <img
                src={job.icon}
                alt={job.company}
                className="w-10 h-10 rounded-lg border bg-white p-1 transition-transform hover:scale-110"
              />
              <div>
                <div className="font-bold text-gray-800">{job.title}</div>
                <div className="text-xs text-gray-600">{job.company}</div>
              </div>
            </div>
            <span className="text-xs text-gray-500">{job.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
