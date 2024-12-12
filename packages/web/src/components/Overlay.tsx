import React from "react";

const Overlay = () => {
  return (
    <>
      <div className="-top-10 -left-4 absolute bg-indigo-900 rounded-md w-[20%] h-[80%] rotate-[10deg]"></div>
      <div className="-right-4 -bottom-10 absolute bg-indigo-900 rounded-md w-[15%] h-[70%] rotate-[-10deg]"></div>
      <div className="right-[40%] -bottom-10 absolute bg-indigo-900 rounded-md w-[25%] h-[40%] rotate-[10deg]"></div>
      <div className="bottom-4 md:bottom-12 z-30 absolute flex justify-center opacity-90 w-full">
        <span className="flex p-4 w-1/3 md:w-[10%]">
          <img className="h-full" src="logo.png" alt="" />
        </span>
      </div>
      {/* <div className="bottom-0 z-10 absolute bg-gradient-to-t from-black to-40% opacity-50 w-full h-full"></div> */}
    </>
  );
};

export default Overlay;
