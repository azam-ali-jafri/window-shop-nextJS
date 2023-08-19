"use client";
import { Product } from "@prisma/client";
import Image from "next/image";
import React, { useRef } from "react";

const ProductCard = ({ product }: { product: Product }) => {
  const handleButtonTransition = () => {
    document.getElementById(`addToCart${product.id}`)?.classList.add("scale-110");
    setTimeout(() => {
      document.getElementById(`addToCart${product.id}`)?.classList.remove("scale-110");
    }, 100);
  };

  const handleOnClick = () => {
    handleButtonTransition();
  };

  return (
    <div className="border shadow-md rounded-md p-4 flex flex-col items-center">
      <div className="h-[10rem] w-[10rem] relative">
        <Image src={product.imageUrl} alt="product-img" fill className="m-auto" />
      </div>
      <hr className="w-full mb-3" />
      <div className="flex flex-col gap-4 w-full text-gray-800">
        <h3 className="truncate font-medium lg:text-lg">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="font-medium">$ {product.price}</span>
          <button
            onClick={handleOnClick}
            id={`addToCart${product.id}`}
            className="bg-blue-600 rounded-md px-3 py-2 text-white text-sm font-medium transition lg:hover:scale-110 lg:hover:bg-blue-400"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
