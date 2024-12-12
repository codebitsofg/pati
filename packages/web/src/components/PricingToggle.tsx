"use client";

import { useState } from "react";

interface PricingToggleProps {
  onPeriodChange: (period: "monthly" | "yearly") => void;
}

export function PricingToggle({ onPeriodChange }: PricingToggleProps) {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
    onPeriodChange(isYearly ? "monthly" : "yearly");
  };

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <span className={`text-sm ${!isYearly ? "text-white" : "text-gray-400"}`}>
        Monthly
      </span>
      <button
        onClick={handleToggle}
        className="relative w-14 h-7 bg-gray-200 rounded-full p-1 transition-colors duration-200"
        aria-pressed={isYearly}
        role="switch"
      >
        <span
          className={`block w-5 h-5 bg-theme-indigo rounded-full transition-transform duration-200
            ${isYearly ? "translate-x-7" : "translate-x-0"}`}
        />
      </button>
      <span className={`text-sm ${isYearly ? "text-white" : "text-gray-400"}`}>
        Yearly
      </span>
      <span className="ml-2 text-xs px-3 py-1 bg-theme-indigo text-white rounded-full">
        15% OFF
      </span>
    </div>
  );
}
