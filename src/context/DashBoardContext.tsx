import React, { createContext, useContext } from "react";
import type { ReactNode } from "react";

// Define types for each entity
export type Employee = {
  id: string;
  name: string;
  role: string;
  avatar: string;
};

export type Payroll = {
  id: string;
  name: string;
  avatar: string;
  amount: string;
  status: "Paid" | "Processing";
};

export type Candidate = {
  id: string;
  name: string;
  avatar: string;
  appliedFor: string;
  atsScore: number;
  time: string;
};

export type Job = {
  id: string;
  title: string;
  company: string;
  icon: string;
  time: string;
};

type DashboardContextType = {
  employees: Employee[];
  payrolls: Payroll[];
  candidates: Candidate[];
  appliedJobs: Job[];
};

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  // Updated avatar generation with unique seeds
const generateAvatar = (seed: string, size = 80) =>
  // square profile photo (e.g. employees, candidates, payrolls)
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${size}`;

const generateJobIcon = (seed: string, size = 48) =>
  // smaller square icon for jobs
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/${size}`;

const employees: Employee[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Product Manager",
    avatar: generateAvatar("employee-john-doe"),
  },
  {
    id: "2",
    name: "Ginna Loe",
    role: "Sales Executive",
    avatar: generateAvatar("employee-ginna-loe"),
  },
  {
    id: "3",
    name: "John Dore",
    role: "UI/UX Designer",
    avatar: generateAvatar("employee-john-dore"),
  },
];

const payrolls: Payroll[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: generateAvatar("payroll-john-doe"),
    amount: "N50,000",
    status: "Paid",
  },
  {
    id: "2",
    name: "Ginna Loe",
    avatar: generateAvatar("payroll-ginna-loe"),
    amount: "N150,000",
    status: "Processing",
  },
  {
    id: "3",
    name: "James Foe",
    avatar: generateAvatar("payroll-james-foe"),
    amount: "N150,000",
    status: "Processing",
  },
];

const candidates: Candidate[] = [
  {
    id: "1",
    name: "John Doe",
    avatar: generateAvatar("candidate-john-doe"),
    appliedFor: "Product Manager",
    atsScore: 80,
    time: "5min ago",
  },
  {
    id: "2",
    name: "Ginna Loe",
    avatar: generateAvatar("candidate-ginna-loe"),
    appliedFor: "Sales Executive",
    atsScore: 30,
    time: "5min ago",
  },
  {
    id: "3",
    name: "James Foe",
    avatar: generateAvatar("candidate-james-foe"),
    appliedFor: "Product Manager",
    atsScore: 80,
    time: "5min ago",
  },
];


const appliedJobs: Job[] = [
  {
    id: "1",
    title: "Sales Executive",
    company: "Access Bank",
    icon: generateJobIcon("job-sales-executive-access-bank"),
    time: "20 min ago",
  },
  {
    id: "2",
    title: "User Experience Designer",
    company: "Paystack",
    icon: generateJobIcon("job-ux-designer-paystack"),
    time: "10 min ago",
  },
  {
    id: "3",
    title: "Product Manager",
    company: "T-Pay",
    icon: generateJobIcon("job-product-manager-tpay"),
    time: "5 min ago",
  },
];

  return (
    <DashboardContext.Provider value={{
      employees,
      payrolls,
      candidates,
      appliedJobs,
    }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) throw new Error("useDashboard must be used within DashboardProvider");
  return context;
};