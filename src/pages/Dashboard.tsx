import MainLayout from '../components/MainLayout';
import { DashboardCards } from '../components/DashBoardCards';
import { AppliedJobs } from '../components/AppliedJobs';
import { Employees } from '../components/Employees';
import { Candidates } from '../components/Candidates';
import { Payrolls } from '../components/Payrolls';
import { DashboardProvider } from '../context/DashBoardContext';

// Dashboard component implementation
const Dashboard = () => {
  return (
    <DashboardProvider>
      <MainLayout title="Dashboard">
        {/* Stat Cards */}
        <DashboardCards />
        
        {/* Two-column layout for dashboard widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <AppliedJobs />
          <Employees />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 mb-6">
          <Candidates />
          <Payrolls />
        </div>
      </MainLayout>
    </DashboardProvider>
  );
};

export default Dashboard;