import { EmployeeProvider, useEmployees } from "../context/EmployeeContext";
import MainLayout from "../components/MainLayout";
import React from "react";

// Table component that consumes the context
const EmployeeTable = () => {
  const { employees } = useEmployees();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Employee List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border-b">Name</th>
              <th className="px-4 py-2 border-b">Job Title</th>
              <th className="px-4 py-2 border-b">Start Date</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Gender</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{emp.name}</td>
                <td className="px-4 py-2 border-b">{emp.jobTitle}</td>
                <td className="px-4 py-2 border-b">{emp.startDate}</td>
                <td className="px-4 py-2 border-b">{emp.category}</td>
                <td className="px-4 py-2 border-b">{emp.gender}</td>
                <td className="px-4 py-2 border-b">{emp.actions}</td>
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
        <EmployeeTable />
      </EmployeeProvider>
  );
};

export default Employement;
