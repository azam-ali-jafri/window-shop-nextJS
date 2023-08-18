import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Billboard from "@/components/Billboard";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Window Shop",
  description: "All the products you need at one place.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <hr />
        <Billboard />
        {children}
      </body>
    </html>
  );
}
