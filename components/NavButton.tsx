import React from "react";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";

const NavButton = ({ icon: Icon, label, className, href }: { icon: string; label: string; className?: string; href: string }) => {
  const router = useRouter();
  return (
    <Button className={`flex gap-2 text-sm ${className}`} onClick={() => router.push(href)}>
      <Icon />
      {label}
    </Button>
  );
};

export default NavButton;
