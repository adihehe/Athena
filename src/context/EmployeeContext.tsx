import React, { createContext, useContext } from "react";
import type { ReactNode } from "react";
// Define the type for an Employee
export type Employee = {
  id: string;
  name: string;
  jobTitle: string;
  startDate: string;
  category: string;
  gender: "Male" | "Female" | "Other";
  actions?: string; // Optional actions (could be replaced by handler functions later)
};

// Context type
type EmployeeContextType = {
  employees: Employee[];
};

// Create context
const EmployeeContext = createContext<EmployeeContextType | undefined>(undefined);

// Provider component
export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
const employees: Employee[] = [
  {
    id: "1",
    name: "John Doe",
    jobTitle: "Product Manager",
    startDate: "2023-01-15",
    category: "Management",
    gender: "Male",
    actions: "Edit/Delete",
  },
  {
    id: "2",
    name: "Jane Smith",
    jobTitle: "UI/UX Designer",
    startDate: "2022-11-01",
    category: "Design",
    gender: "Female",
    actions: "Edit/Delete",
  },
  {
    id: "3",
    name: "Alex Johnson",
    jobTitle: "Software Engineer",
    startDate: "2024-03-20",
    category: "Engineering",
    gender: "Other",
    actions: "Edit/Delete",
  },
  {
    id: "4",
    name: "Emily Davis",
    jobTitle: "Data Analyst",
    startDate: "2021-09-10",
    category: "Analytics",
    gender: "Female",
    actions: "Edit/Delete",
  },
  {
    id: "5",
    name: "Michael Brown",
    jobTitle: "DevOps Engineer",
    startDate: "2023-06-05",
    category: "Engineering",
    gender: "Male",
    actions: "Edit/Delete",
  },
  {
    id: "6",
    name: "Linda Martinez",
    jobTitle: "HR Specialist",
    startDate: "2020-04-22",
    category: "HR",
    gender: "Female",
    actions: "Edit/Delete",
  },
  {
    id: "7",
    name: "David Lee",
    jobTitle: "QA Engineer",
    startDate: "2022-12-01",
    category: "Quality Assurance",
    gender: "Male",
    actions: "Edit/Delete",
  },
  {
    id: "8",
    name: "Sophia Turner",
    jobTitle: "Marketing Manager",
    startDate: "2021-08-15",
    category: "Marketing",
    gender: "Female",
    actions: "Edit/Delete",
  },
  {
    id: "9",
    name: "Chris Green",
    jobTitle: "Business Analyst",
    startDate: "2023-02-10",
    category: "Business",
    gender: "Male",
    actions: "Edit/Delete",
  },
  {
    id: "10",
    name: "Olivia Wilson",
    jobTitle: "Graphic Designer",
    startDate: "2024-01-25",
    category: "Design",
    gender: "Female",
    actions: "Edit/Delete",
  },
];

  return (
    <EmployeeContext.Provider value={{ employees }}>
      {children}
    </EmployeeContext.Provider>
  );
};

// Custom hook to use the context
export const useEmployees = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error("useEmployees must be used within an EmployeeProvider");
  }
  return context;
};
