"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { K_PADDING } from "@/constant";
import { store } from "@/redux/store";
import { Box } from "@chakra-ui/react";
import React from "react";
import { Provider } from "react-redux";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider store={store}>
      <Navbar />
      <Box as="main" px={K_PADDING} flex={"auto"}>
        {children}
      </Box>
      <Footer />
    </Provider>
  );
};

export default MainLayout;
