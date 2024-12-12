import React from "react";

const Stats = () => {
  const stats = [
    {
      value: "75+",
      label: "Employee",
    },
    {
      value: "100+",
      label: "Award",
    },
    {
      value: "80k+",
      label: "Clients",
    },
    {
      value: "99%",
      label: "Protection",
    },
  ];

  return (
    <div className="md:py-16 py-4  mb-12 max-w-5xl mx-auto font-lobster px-4">
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4  group ">
              <div className="text-4xl group-hover:text-white md:text-5xl font-bold  text-theme-grey mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
