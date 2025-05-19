import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  bgColor: string;
}

const StatCard = ({ title, value, icon, bgColor }: StatCardProps) => {
  return (
    <motion.div
      className={`${bgColor} rounded-lg shadow-md overflow-hidden p-5 text-white flex items-center`}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mr-4 text-3xl">
        {icon}
      </div>
      <div className="flex flex-col items-end flex-grow">
        <p className="text-3xl font-bold">{value}</p>
        <p className="text-sm">{title}</p>
      </div>
    </motion.div>
  );
};

export default StatCard;