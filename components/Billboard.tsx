import Link from "next/link";
import { Button, buttonVariants } from "./ui/Button";

const Billboard = () => {
  return (
    <div className="border-b-2 text-zinc-900 p-6 lg:p-10 mt-24">
      <div className="w-4/5 md:w-1/2 lg:w-2/5 flex flex-col gap-4 lg:gap-8">
        <h1 className="font-semibold text-3xl lg:text-6xl leading-[1.3]">Best Products & Brands in our store</h1>
        <h2 className="font-medium text-sm lg:text-xl">Trendy Products, Factory Prices, Excellent Service</h2>
        <div className="flex gap-4">
          <Link href="/shop" className={buttonVariants()}>
            Shop Now
          </Link>
          <Link href="/" className={buttonVariants()}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
