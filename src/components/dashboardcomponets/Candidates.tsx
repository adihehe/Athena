import { useDashboard } from "../../context/DashBoardContext";
import { FaEllipsisV, FaEye } from "react-icons/fa";

export const Candidates = () => {
  const { candidates } = useDashboard();

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Candidates</h2>
        <button className="text-gray-400 hover:text-gray-600 transition cursor-pointer">
          <FaEllipsisV />
        </button>
      </div>
      <ul className="space-y-3">
        {candidates.map(cand => (
          <li
            key={cand.id}
            className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 cursor-pointer
              transform transition-all duration-300
              hover:scale-[1.02] hover:shadow-lg
              hover:-rotate-x-[0.3deg] hover:rotate-y-[0.3deg]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={cand.avatar} alt={cand.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold">{cand.name}</div>
                <div className="text-xs text-gray-600">Applied for: {cand.appliedFor}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                ATS <span className="ml-1">{cand.atsScore}</span>
              </div>
              <button className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full">
                <FaEye size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
