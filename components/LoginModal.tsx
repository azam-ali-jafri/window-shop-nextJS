import React from "react";
import { Dialog, DialogContent, DialogDescription } from "./ui/Dialog";
import { Button } from "./ui/Button";
import Image from "next/image";
import GoogleLogo from "@/images/google.svg";
import Logo from "@/images/logo.svg";
import { useLoginModal } from "@/hooks/useLoginModal";
import { signIn } from "next-auth/react";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const handleLogin = () => {
    signIn("google").then(() => loginModal.onClose());
  };
  return (
    <Dialog open={loginModal.isOpen} onOpenChange={loginModal.onClose}>
      <DialogContent>
        <DialogDescription className="flex flex-col gap-4 items-center justify-center text-zinc-900">
          <div className="relative w-16 h-16">
            <Image fill alt="google-logo" src={Logo} />
          </div>
          <h1 className="text-2xl font-bold">Welcome Back</h1>
          <p className="text-center">
            By continuing, you are setting up a window shop account and agree to our User Agreement and Privacy Policy.
          </p>
          <Button className="flex gap-2 text-md" onClick={handleLogin} size="lg">
            <div className="relative h-4 w-4">
              <Image fill alt="google-logo" src={GoogleLogo} />
            </div>
            Google
          </Button>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
