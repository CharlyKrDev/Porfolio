import React from "react";

export const Proyects = () => {
  return (
    <section className="sm:w-[90%] w-[100%] min-h-screen p-4 bg-sky-200 flex justify-center items-center">
      <div className="grid grid-cols-8 gap-4 w-[100%]">

        <div className="col-span-5 h-[100px] bg-red-50">1</div>
        <div className="col-span-3 h-[100px] bg-red-200">2</div>
        <div className="col-span-3 h-[100px] bg-red-400">3</div>
        <div className="col-span-3 h-[100px] bg-red-800">4</div>
        <div className="col-span-2 h-[100px] bg-blue-50">5</div>
        <div className="col-span-3 h-[100px] bg-red-500">6</div>
        <div className="col-span-5 h-[100px] bg-red-500">7</div>

      </div>
    </section>
  );
};
