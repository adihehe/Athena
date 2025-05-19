import { Sidebar } from '../components/SideBar';
import { Header } from '../components/Header';
import { DashboardCards } from '../components/DashBoardCards';
import { AppliedJobs } from '../components/AppliedJobs';
import { Candidates } from '../components/Candidates';
import { Employees } from '../components/Employees';
import { Payrolls } from '../components/Payrolls';

const DashboardPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Header />
        <DashboardCards />
        <div className="grid grid-cols-2 gap-4 p-4">
          <AppliedJobs />
          <Employees />
          <Candidates />
          <Payrolls />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;