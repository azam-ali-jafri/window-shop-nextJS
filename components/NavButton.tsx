import React from "react";
import { Button } from "./ui/Button";

const NavButton = ({ icon, label, className }: { icon: string; label: string; className?: string }) => {
  const Icon = icon;
  return (
    <Button className={`flex gap-2 text-sm ${className}`}>
      <Icon />
      {label}
    </Button>
  );
};

export default NavButton;
