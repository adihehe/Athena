import React, { createContext, useContext, useState} from "react";
import type { ReactNode } from "react";
type DashboardContextType = {
  sections: {
    appliedJobs: string;
    employees: string;
    candidates: string;
    payrolls: string;
  };
};

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const sections = {
    appliedJobs: "Applied Jobs",
    employees: "Employees",
    candidates: "Candidates",
    payrolls: "April Payrolls",
  };

  return (
    <DashboardContext.Provider value={{ sections }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) throw new Error("useDashboard must be used within DashboardProvider");
  return context;
};
