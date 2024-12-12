"use client";
import React, { useState } from "react";
import PricingCard from "./PricingCard";
import { PricingToggle } from "./PricingToggle";

const Pricing = () => {
  const [selectedPlan, setselectedPlan] = useState<string>();
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const pricingPlans = [
    {
      title: "Day Care",
      price: 45.67,
      features: [
        "Single Room",
        "Pet Grooming",
        "24/7 Care and Call",
        "Brush & Blow Dry",
        "Pet Shower",
      ],
      isPopular: selectedPlan === "Day Care",
      discount: 20,
    },
    {
      title: "2x Care",
      price: 70.05,
      features: [
        "Single Room",
        "Pet Grooming",
        "24/7 Care and Call",
        "Brush & Blow Dry",
        "Pet Shower",
      ],
      isPopular: selectedPlan === "2x Care",
      discount: 30,
    },
    {
      title: "4x Care",
      price: 90.5,
      features: [
        "Single Room",
        "Pet Grooming",
        "24/7 Care and Call",
        "Brush & Blow Dry",
        "Pet Shower",
      ],
      isPopular: selectedPlan === "4x Care",
      discount: 35,
    },
  ];
  return (
    <section className="max-w-5xl   my-12  md:my-20 mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-medium mb-4">
          <span className="text-indigo-50">Choose </span>
          <span className="text-theme-indigo">The Best </span>
          <span className="text-indigo-50">Care</span>
        </h1>
        <p className="text-2xl text-indigo-50 font-light mb-8">
          For Your Pets.
        </p>
        <PricingToggle onPeriodChange={setBillingPeriod} />
      </div>
      <div className="grid md:grid-cols-3 gap-10 px-4 md:px-0 mb-16">
        {pricingPlans.map((plan) => (
          <PricingCard
            key={plan.title}
            {...plan}
            period={billingPeriod}
            setSelectedPlan={(plan: string) => setselectedPlan(plan)}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
