import React from "react";
import { Building2, Car, Dog } from "lucide-react";

const LearnMore = () => {
  const services = [
    {
      id: "boarding",
      label: "Pet Boarding",
      icon: Building2,
    },
    {
      id: "daycare",
      label: "Pet Daycare",
      icon: Dog,
    },
    {
      id: "transport",
      label: "Pet Transport",
      icon: Car,
    },
  ];
  return (
    <div className=" max-w-5xl mx-auto relative   px-6   md:px-0   z-50 py-12 md:py-12 flex flex-col md:flex-row items-center justify-between">
      <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden flex items-center justify-center w-72 h-72  bg-purple-50 rounded-full -z-10">
          <img
            src="/learn-more.png"
            alt="Smiling Pomeranian dog"
            width={300}
            height={300}
            className="relative mb-16 z-10"
          />
        </div>
      </div>
      <div className="w-full  text-center md:text-left mt-48 md:mt-0 md:w-1/2 ">
        <h2 className="text-4xl md:text-5xl font-medium    md:leading-[4rem] text-indigo-50">
          Taking a Vacation? <br /> So is your pet!
        </h2>
        <p className="text-indigo-200  mb-5 mt-3  leading-6 font-light">
          The lovable innocence found in every dog helps us reconnect with our
          true selves and teaches us valuable life lessons. Simply put, dogs
          make us better people. And that has a profound impact on the world in
          which we live.
        </p>
        <div className="flex items-center justify-center  md:justify-start  mb-10 gap-2 md:gap-8 ">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                className={`
                flex items-center text-indigo-50 gap-2  text-sm md:text-base  rounded-md
                transition-colors duration-200
              `}
              >
                <Icon className="md:w-5 text-theme-indigo w-3 h-3   font-light md:h-5" />
                <span>{service.label}</span>
              </button>
            );
          })}
        </div>
        <button className=" bg-theme-indigo text-white px-4 w-full md:w-auto flex text-sm font-thin rounded-md items-center justify-center py-2  hover:bg-theme-indigo-dark transition-colors">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
