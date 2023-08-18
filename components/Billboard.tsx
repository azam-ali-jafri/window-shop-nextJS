import React from "react";
import { Button } from "./ui/Button";

const Billboard = () => {
  return (
    <div className="bg-blue-600 text-white p-6 lg:p-10">
      <div className="w-4/5 md:w-1/2 lg:w-2/5 flex flex-col gap-4 lg:gap-8">
        <h1 className="font-semibold text-3xl lg:text-6xl leading-[1.3]">Best Products & Brands in our store</h1>
        <h2 className="font-medium text-sm lg:text-xl">Trendy Products, Factory Prices, Excellent Service</h2>
        <div className="flex gap-4">
          <button className="rounded-md px-3 py-2 lg:px-4 lg:py-2 text-sm lg:text-lg font-medium text-white bg-black hover:bg-gray-800">
            Shop Now
          </button>
          <button className="rounded-md px-3 py-2 lg:px-4 lg:py-2 text-sm lg:text-lg font-medium text-black bg-white hover:bg-slate-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
