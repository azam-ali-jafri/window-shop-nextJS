"use client";
import { SessionProvider } from "next-auth/react";
import ModalProvider from "./ModalProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <SessionProvider>
        <ModalProvider />
        {children}
      </SessionProvider>
    </QueryClientProvider>
  );
};

export default Providers;
