"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { K_PADDING } from "../../constant";
import NavURLBar from "./NavURLBar";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" px={K_PADDING} bgColor={"brand.primary"}>
      <Flex minH={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        >
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </IconButton>
        <HStack spacing={8} alignItems={"center"}>
          <Link href={"/"}>
            <HStack>
              <Image
                src="/pokedex.png"
                alt={"pokedex"}
                objectFit="contain"
                maxH={12}
              />
              <Image
                src="/pokemon.png"
                alt={"pokemon"}
                objectFit="contain"
                maxH={12}
              />
            </HStack>
          </Link>

          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <NavURLBar />
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>{/*  */}</Flex>
      </Flex>

      {/* Mobile view */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <NavURLBar />
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
