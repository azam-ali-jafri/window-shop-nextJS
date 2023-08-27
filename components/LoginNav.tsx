"use client";
import { useSession } from "next-auth/react";
import { Button } from "./ui/Button";
import { BiLogIn } from "react-icons/bi";
import { useLoginModal } from "@/hooks/useLoginModal";
import { Avatar, AvatarImage } from "./ui/Avatar";

const LoginNav = () => {
  const { data, status } = useSession();
  const loginModal = useLoginModal();

  if (status === "unauthenticated")
    return (
      <Button className="flex gap-2 items-center" onClick={loginModal.onOpen}>
        <BiLogIn />
        Login
      </Button>
    );
  else
    return (
      <Avatar className="cursor-pointer hover:opacity-80">
        <AvatarImage src={data?.user.image!} />
      </Avatar>
    );
};

export default LoginNav;
