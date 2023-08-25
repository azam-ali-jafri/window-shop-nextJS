import Logo from "@/images/logo.svg";
import Image from "next/image";
import { AiOutlineHome, AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import { buttonVariants } from "./ui/Button";
import Searchbar from "./Searchbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MobileNavbar from "./MobileNavbar";
import LoginNav from "./LoginNav";

const links = [
  { label: "Home", icon: AiOutlineHome, href: "/" },
  { label: "Shop", icon: AiOutlineShopping, href: "/shop" },
  { label: "Cart", icon: AiOutlineShoppingCart, href: "/cart" },
];

const Navbar = async () => {
  return (
    <div className="fixed top-0 inset-0 h-24 bg-white border-2">
      <div className="container h-full mx-auto flex items-center justify-between gap-4">
        <div>
          <Image src={Logo} alt="logo" className="w-20 h-20" />
        </div>
        <div className="w-[60%]">
          <Searchbar />
        </div>
        <div className="hidden lg:flex gap-4 items-center">
          {links.map((link) => (
            <Link href={link.href} className={cn(buttonVariants(), "flex gap-2 items-center")}>
              <link.icon />
              {link.label}
            </Link>
          ))}
          <LoginNav />
        </div>
        <div className="flex lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
