"use client";
import Logo from "@/images/Logo.png";
import Image from "next/image";
import { AiOutlineHome, AiOutlineShopping, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import NavButton from "./NavButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/DropdownMenu";

const Navbar = () => {
  return (
    <div className="flex px-10 py-2 items-center justify-between">
      <div>
        <Image src={Logo} alt="logo" className="w-20 h-20" />
      </div>
      <div className="hidden lg:flex gap-4">
        <NavButton label="Home" icon={AiOutlineHome} />
        <NavButton label="Shop" icon={AiOutlineShopping} />
        <NavButton label="Cart" icon={AiOutlineShoppingCart} />
        <NavButton label="User" icon={AiOutlineUser} />
      </div>

      {/* mobile navbar */}

      <div className="lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="border rounded-md px-2 py-1">
            <RxHamburgerMenu size={30} />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col items-center gap-3 p-3 mx-4">
            <NavButton label="Home" icon={AiOutlineHome} className="w-full" />
            <NavButton label="Shop" icon={AiOutlineShopping} className="w-full" />
            <NavButton label="Cart" icon={AiOutlineShoppingCart} className="w-full" />
            <NavButton label="User" icon={AiOutlineUser} className="w-full" />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
