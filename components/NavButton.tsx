import React from "react";
import { Button } from "./ui/Button";

const NavButton = ({
  icon,
  label,
  className,
  onClick,
}: {
  icon: string;
  label: string;
  className?: string;
  onClick?: () => void;
}) => {
  const Icon = icon;
  return (
    <Button className={`flex gap-2 text-sm ${className}`} onClick={onClick}>
      <Icon />
      {label}
    </Button>
  );
};

export default NavButton;
