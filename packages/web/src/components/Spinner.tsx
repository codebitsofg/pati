const Spinner = () => {
  return (
    <div className={`flex justify-center items-center`}>
      <div
        className={`animate-spin rounded-full  h-[2vh]  w-[1vh] border-t-12 border-b-12   bg-indigo-500`}
      ></div>
    </div>
  );
};

export default Spinner;
