import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import { K_PADDING } from "@/constant";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Pokedex",
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
          <Navbar />
          <Box as="main" px={K_PADDING} flex={"auto"}>
            {children}
          </Box>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
