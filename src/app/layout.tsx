import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Transition from "./components/transition";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "portfoliohub",
  description: "The best animated portfolio page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
   
     <Transition>
      {children}
      <Footer/>
     </Transition>
      </body>
    </html>
  );
}
