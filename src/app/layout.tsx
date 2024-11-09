import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";
import MainLayout from "./MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Pokédex",
  description: "Gotta catch em all!",
  icons: { icon: "/pokeball.png", apple: "/pokeball.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <MainLayout>{children}</MainLayout>
        </ChakraProvider>
      </body>
    </html>
  );
}
