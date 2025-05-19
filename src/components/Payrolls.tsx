import { useDashboard } from "../context/DashBoardContext";

export const Payrolls = () => {
  const { payrolls } = useDashboard();

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">April Payrolls</h2>
      </div>
      <ul className="space-y-3">
        {payrolls.map(pay => (
          <li
            key={pay.id}
            className="flex items-center justify-between bg-gray-100 rounded px-3 py-2 cursor-pointer
              transform transition-all duration-300
              hover:scale-[1.02] hover:shadow-lg
              hover:-rotate-x-[0.3deg] hover:rotate-y-[0.3deg]"
          >
            <div className="flex items-center gap-3">
              <img
                src={pay.avatar}
                alt={pay.name}
                className="w-8 h-8 rounded-full border-2 border-yellow-400"
              />
              <div>
                <div className="font-bold">{pay.name}</div>
                <div className="text-xs text-gray-600">Salary Amount: {pay.amount}</div>
              </div>
            </div>
            <div>
              <span
                className={`text-xs font-bold px-2 py-1 rounded ${
                  pay.status === "Paid"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {pay.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
