import React, { createContext, useContext, ReactNode } from "react";

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
