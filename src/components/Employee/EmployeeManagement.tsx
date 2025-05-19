import { useEffect, useState } from 'react';
import { FaFilter, FaDownload } from 'react-icons/fa';
import MainLayout from '../../Layout/MainLayout';
import employeesData from '../../data/employees.json';
import Modal from '../Modal';

type Employee = {
  id: string;
  name: string;
  jobTitle: string;
  startDate: string;
  category: string;
  gender: 'Male' | 'Female' | 'Other';
};

const PAGE_SIZE = 4;

const EmployeeManagement = () => {
  const [employees] = useState<Employee[]>(
    employeesData.map(emp => ({
      ...emp,
      gender: emp.gender as 'Male' | 'Female' | 'Other',
    }))
  );

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-action')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleDropdown = (id: string) => {
    setActiveDropdown(prev => (prev === id ? null : id));
  };

  const openPopup = (emp: Employee) => {
    setSelectedEmployee(emp);
  };

  const closePopup = () => {
    setSelectedEmployee(null);
  };

  const totalPages = Math.ceil(employees.length / PAGE_SIZE);
  const paginatedEmployees = employees.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <MainLayout title="Employee Management">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold">Employee Management</h2>
            <div className="mx-2 text-gray-400">/</div>
            <div className="text-gray-500">Dashboard</div>
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center gap-2 bg-white p-2 rounded border hover:bg-gray-50">
              <FaFilter className="text-gray-600" />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-2 bg-green-600 text-white p-2 rounded hover:bg-green-700">
              <FaDownload />
              <span>Export</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Job Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Start Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Gender</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedEmployees.map(emp => (
                <tr key={emp.id}>
                  <td
                    onClick={() => openPopup(emp)}
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600 cursor-pointer hover:underline"
                  >
                    {emp.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{emp.jobTitle}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{emp.startDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {emp.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{emp.gender}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">
                    <div className="relative dropdown-action inline-block">
                      <button
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                        onClick={() => toggleDropdown(emp.id)}
                      >
                        Actions
                      </button>
                      {activeDropdown === emp.id && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-20">
                          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">View Profile</a>
                          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Edit Profile</a>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* Using your Modal component */}
        <Modal
          isOpen={!!selectedEmployee}
          onClose={closePopup}
          title="Employee Details"
        >
          {selectedEmployee && (
            <>
              <p><strong>Name:</strong> {selectedEmployee.name}</p>
              <p><strong>Job Title:</strong> {selectedEmployee.jobTitle}</p>
              <p><strong>Start Date:</strong> {selectedEmployee.startDate}</p>
              <p><strong>Category:</strong> {selectedEmployee.category}</p>
              <p><strong>Gender:</strong> {selectedEmployee.gender}</p>
            </>
          )}
        </Modal>
      </div>
    </MainLayout>
  );
};

export default EmployeeManagement;
