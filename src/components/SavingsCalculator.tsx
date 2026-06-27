import { useState } from "react";
import { Calculator } from "lucide-react";
import { motion } from "motion/react";

export default function SavingsCalculator({ isAnnual }: { isAnnual: boolean }) {
  const [months, setMonths] = useState<number>(12);

  const agencyUpfront = 15000;
  const agencyMonthly = 500; // Estimated domain, hosting, maintenance
  const totalAgencyCost = agencyUpfront + agencyMonthly * months;

  const ourMonthlyCost = 799;
  const ourAnnualCost = 7999;
  
  const totalOurCost = isAnnual 
    ? Math.floor(months / 12) * ourAnnualCost + (months % 12) * ourMonthlyCost
    : ourMonthlyCost * months;

  const savings = totalAgencyCost - totalOurCost;

  return (
    <div className="bg-white/10 rounded-2xl p-5 md:p-6 border border-indigo-500/30 backdrop-blur-sm mt-6">
      <div className="flex items-center gap-3 mb-4">
        <Calculator className="w-5 h-5 text-yellow-400" />
        <h3 className="text-lg font-bold text-white">Savings Calculator</h3>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-indigo-200">
            Timeframe: {months} {months === 1 ? "Month" : "Months"}
          </label>
          <span className="text-xs text-indigo-300">
            {(months / 12).toFixed(1)} Years
          </span>
        </div>
        <input
          type="range"
          min="1"
          max="36"
          value={months}
          onChange={(e) => setMonths(parseInt(e.target.value))}
          className="w-full h-2 bg-indigo-950 rounded-lg appearance-none cursor-pointer accent-yellow-400"
        />
        <div className="flex justify-between text-xs text-indigo-400 mt-2">
          <span>1 Mo</span>
          <span>12 Mo</span>
          <span>24 Mo</span>
          <span>36 Mo</span>
        </div>
      </div>

      <div className="space-y-3 relative">
        {/* Connection line */}
        <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-indigo-500/20 rounded-full" />

        <div className="flex items-start gap-4 relative z-10">
          <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-indigo-900 flex-shrink-0 flex items-center justify-center mt-1">
            <div className="w-2 h-2 rounded-full bg-slate-400" />
          </div>
          <div className="flex-grow">
            <p className="text-xs font-medium text-slate-300">
              Regular Agency Total
            </p>
            <p className="text-lg font-bold text-slate-200">
              ₹{totalAgencyCost.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 relative z-10">
          <div className="w-6 h-6 rounded-full bg-indigo-600 border-2 border-indigo-900 flex-shrink-0 flex items-center justify-center mt-1">
            <div className="w-2 h-2 rounded-full bg-indigo-300" />
          </div>
          <div className="flex-grow">
            <p className="text-xs font-medium text-indigo-200">
              WebBanao Total
            </p>
            <p className="text-lg font-bold text-white">
              ₹{totalOurCost.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      <motion.div
        key={savings}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mt-5 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center"
      >
        <p className="text-xs font-medium text-green-300 uppercase tracking-wider mb-1">
          Your Total Savings
        </p>
        <p className="text-2xl font-black text-green-400">
          ₹{savings.toLocaleString()}
        </p>
      </motion.div>
    </div>
  );
}
