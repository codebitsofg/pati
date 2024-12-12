import React from "react";
interface PricingCardProps {
  title: string;
  price: number;
  period: "monthly" | "yearly";
  features: string[];
  isPopular?: boolean;
  discount?: number;
  setSelectedPlan: (plan: string) => void;
}
const PricingCard = ({
  title,
  price,
  period,
  features,
  isPopular,
  discount,
  setSelectedPlan,
}: PricingCardProps) => {
  const finalPrice = period === "yearly" ? price * 0.85 : price;

  return (
    <div
      className={`rounded-2xl p-6 ${isPopular ? "bg-purple-600" : "bg-white"}`}
    >
      {discount && (
        <span className="inline-block px-3 py-1 text-xs text-white bg-purple-500 rounded-full mb-4">
          Save {discount}%
        </span>
      )}
      <h3
        className={`text-xl font-bold mb-4 ${
          isPopular ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <div className={`mb-6 ${isPopular ? "text-white" : "text-gray-900"}`}>
        <span className="text-3xl font-bold">${finalPrice.toFixed(2)}</span>
        <span className="text-sm opacity-70">/per month</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 ${
              isPopular ? "text-white" : "text-gray-600"
            }`}
          >
            <svg
              className={`w-5 h-5 ${
                isPopular ? "text-white" : "text-purple-500"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button
        onClick={() => setSelectedPlan(title)}
        className={`w-full py-3 px-4 rounded-lg font-medium transition-colors
              ${
                isPopular
                  ? "bg-white text-purple-600 hover:bg-gray-100"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
      >
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
