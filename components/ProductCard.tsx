"use client";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border shadow-sm rounded-md p-4 flex flex-col items-center">
      <Link href={`/p/${product.id}`} className="h-[10rem] w-[10rem] relative cursor-pointer">
        <Image src={product.imageUrl} alt="product-img" fill className="m-auto" />
      </Link>
      <hr className="w-full mb-3" />
      <div className="flex flex-col gap-4 w-full text-zinc-800">
        <h3 className="truncate font-medium lg:text-lg">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="font-medium">$ {product.price}</span>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
