import React, { useState } from "react";
import { EmployeeProvider, useEmployees } from "../context/EmployeeContext";
import { HiOutlineFunnel, HiOutlineArrowDownTray } from "react-icons/hi2";

// Top bar with title and actions
const EmployeeHeader = () => (
    <div className="flex items-center justify-between px-6 pt-6 pb-4">
        <div className="text-2xl font-bold">
            Employee  Management
        </div>
        <div className="flex gap-2">
            <button
                className="flex items-center gap-1 px-3 py-2 rounded hover:bg-gray-100 border border-gray-200"
                title="Filter"
            >
                <HiOutlineFunnel className="w-5 h-5" />
            </button>
            <button
                className="flex items-center gap-1 px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                title="Export"
            >
                <HiOutlineArrowDownTray className="w-5 h-5" />
                Export
            </button>
        </div>
    </div>
);

// Action dropdown menu for each row
const ActionMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative z-20 inline-block text-left">
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
            >
                Actions ▾
            </button>
            {open && (
                <div className="absolute right-0 top-full mt-2 w-40 origin-top-right rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <button className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100">
                        View Profile
                    </button>
                    <button className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100">
                        Edit Profile
                    </button>
                </div>
            )}
        </div>
    );
};


// Table component
const EmployeeTable = () => {
    const { employees } = useEmployees();

    return (
        <div className="p-6 pt-0 overflow-x-hidden animate-fade-in">
            <div className="overflow-x-auto rounded-2xl">
                <table className="min-w-full bg-white border border-gray-200 rounded-2xl shadow-lg transition-all duration-300 ease-in-out">
                    <thead>
                        <tr className="bg-gray-100 text-left text-sm text-gray-600">
                            <th className="px-6 py-3 border-b">Name</th>
                            <th className="px-6 py-3 border-b">Department</th>
                            <th className="px-6 py-3 border-b">Job Title</th>
                            <th className="px-6 py-3 border-b">Start Date</th>
                            <th className="px-6 py-3 border-b">Gender</th>
                            <th className="px-6 py-3 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp) => (
                            <tr
                                key={emp.id}
                                className="group hover:bg-gray-50 hover:scale-[1.005] transition-all duration-200 ease-in-out"
                            >
                                <td className="px-6 py-4 border-b">{emp.name}</td>
                                <td className="px-6 py-4 border-b">{emp.category}</td>
                                <td className="px-6 py-4 border-b">{emp.jobTitle}</td>
                                <td className="px-6 py-4 border-b">{emp.startDate}</td>
                                <td className="px-6 py-4 border-b">{emp.gender}</td>
                                <td className="px-6 py-4 border-b">
                                        <td className="px-6 py-4 border-b align-top relative min-h-[80px]">
                                            <ActionMenu />
                                        </td>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Final page component
const Employement = () => {
    return (
        <EmployeeProvider>
            <div className="max-w-6xl mx-auto my-6 bg-white rounded-3xl shadow-xl overflow-hidden">
                <EmployeeHeader />
                <EmployeeTable />
            </div>
        </EmployeeProvider>
    );
};

export default Employement;
