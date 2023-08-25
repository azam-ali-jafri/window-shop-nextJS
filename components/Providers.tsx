"use client";
import { SessionProvider } from "next-auth/react";
import ModalProvider from "./ModalProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ModalProvider />
      {children}
    </SessionProvider>
  );
};

export default Providers;
