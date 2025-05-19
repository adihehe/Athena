import { useUser } from '../context/UserContext';

export const Header = () => {
  const { name } = useUser();

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-[#e6efff] shadow-md">
      <div className="text-xl font-semibold">Dashboard</div>
      <div className="text-gray-700">Welcome, {name}</div>
    </div>
  );
};
