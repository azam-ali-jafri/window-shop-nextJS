import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/DropdownMenu";
import { RxHamburgerMenu } from "react-icons/rx";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";
import { AiOutlineHome, AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import { cn } from "@/lib/utils";
import Link from "next/link";
import LoginNav from "./LoginNav";

const links = [
  { label: "Home", icon: AiOutlineHome, href: "/" },
  { label: "Shop", icon: AiOutlineShopping, href: "/shop" },
  { label: "Cart", icon: AiOutlineShoppingCart, href: "/cart" },
];

const MobileNavbar = async () => {
  const session = await getAuthSession();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="border rounded-md px-2 py-1">
          <RxHamburgerMenu size={30} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col items-center gap-3 p-3 mx-4">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className={cn(buttonVariants(), "flex gap-2 items-center w-full")}>
              <link.icon />
              {link.label}
            </Link>
          ))}
          <LoginNav />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNavbar;
