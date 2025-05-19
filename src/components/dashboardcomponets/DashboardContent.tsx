import { DashboardCards } from './Header/DashBoardCards';
import { AppliedJobs } from './AppliedJobs';
import { Employees } from './Employees';
import { Candidates } from './Candidates';
import { Payrolls } from './Payrolls';

const DashboardContent = () => {
  return (
    <div className="animate-slide-in">
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
    </div>
  );
};

export default DashboardContent;