import { HStack, Stack, Text } from "@chakra-ui/react";
import { FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import React from "react";
import SocialButton from "../SocialButton";
import { K_PADDING } from "@/constant";

const Footer = () => {
  return (
    <HStack as="footer" width={"100%"} p={K_PADDING} justify={"space-between"}>
      <Text>Pokemon gotta catch em all - ❤</Text>
      <Stack direction={"row"} spacing={K_PADDING}>
        <SocialButton
          label={"Tik Tok"}
          href={"https://www.tiktok.com/@pokemonofficial"}
        >
          <FaTiktok />
        </SocialButton>
        <SocialButton
          label={"Instagram"}
          href={"https://www.instagram.com/pokemon/"}
        >
          <FaInstagram />
        </SocialButton>
        <SocialButton label={"X"} href={"https://x.com/pokemon"}>
          <FaXTwitter />
        </SocialButton>
      </Stack>
    </HStack>
  );
};

export default Footer;
