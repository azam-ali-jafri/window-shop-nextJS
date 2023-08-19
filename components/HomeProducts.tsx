import React from "react";
import ProductCard from "./ProductCard";
import { db } from "@/lib/db";

const HomeProducts = async () => {
  const data = await db.product.findMany();

  return (
    <div className="flex flex-col items-center my-16">
      <div className="flex px-4 py-2 rounded-md bg-blue-600 mb-16">
        <h1 className="text-3xl text-white m-auto">Featured Products</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8 mx-10">
        {data?.map((item, index) => {
          return <ProductCard product={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default HomeProducts;
