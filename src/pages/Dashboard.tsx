import { motion } from 'framer-motion';
import { DashboardCards } from '../components/dashboardcomponets/DashBoardCards';
import { AppliedJobs } from '../components/dashboardcomponets/AppliedJobs';
import { Employees } from '../components/dashboardcomponets/Employees';
import { Candidates } from '../components/dashboardcomponets/Candidates';
import { Payrolls } from '../components/dashboardcomponets/Payrolls';
import { DashboardProvider } from '../context/DashBoardContext';

const Dashboard = () => {
  return (
    <DashboardProvider>
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="p-4"
      >
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
      </motion.div>
    </DashboardProvider>
  );
};

export default Dashboard;
