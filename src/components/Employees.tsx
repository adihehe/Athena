import { useDashboard } from "../context/DashBoardContext";
import { FaEllipsisV, FaDownload, FaEye } from "react-icons/fa";

export const Employees = () => {
    const { employees } = useDashboard();

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-lg">Employees</h2>
                <button className="text-gray-400 hover:text-gray-600 transition cursor-pointer">
                    <FaEllipsisV />
                </button>
            </div>

            <ul className="space-y-3">
                {employees.map(emp => (
                    <li
                        key={emp.id}
                        className="flex items-center cursor-pointer justify-between bg-gray-100 rounded-lg px-4 py-3 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:-rotate-x-[0.5deg] hover:rotate-y-[0.5deg]"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden ring ring-offset-2 ring-blue-300">
                                <img src={emp.avatar} alt={emp.name} className="w-full h-full object-cover hover:scale-120" />
                            </div>
                            <div>
                                <div className="font-bold">{emp.name}</div>
                                <div className="text-xs text-gray-600">Role: {emp.role}</div>
                            </div>
                        </div>

                        <div className="flex gap-2 relative group">
                            {/* Eye Button */}
                            <div className="relative group cursor-pointer">
                                <button className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full transition-transform hover:scale-110 hover:shadow-lg">
                                    <FaEye size={16} />
                                </button>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                                    View
                                </div>
                            </div>

                            {/* Download Button */}
                            <div className="relative group cursor-pointer">
                                <button className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full transition-transform hover:scale-110 hover:shadow-lg">
                                    <FaDownload size={16} />
                                </button>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200">
                                    Download
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
