"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { K_PADDING } from "@/constant";
import { store } from "@/redux/store";
import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import { Provider } from "react-redux";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const variants = {
    initial: { opacity: 0, x: 100 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const theme = extendTheme({
    colors: {
      brand: {
        primary: "#27415B",
        secondary: "#608FD4",
      },
    },
    fonts: {
      heading: "'Poppins', sans-serif",
      body: "'Roboto', sans-serif",
    },
    styles: {
      global: {
        body: {
          bg: "brand.900",
          color: "brand.900",
        },
      },
    },
    components: {
      Text: {
        baseStyle: () => ({
          color: "white",
        }),
      },
      Link: {
        baseStyle: () => ({
          color: "white",
        }),
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Navbar />
        <Box
          as="main"
          p={6 + K_PADDING}
          flex={"auto"}
          bgColor={"brand.secondary"}
        >
          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </Box>
        <Footer />
      </Provider>
    </ChakraProvider>
  );
};

export default MainLayout;
