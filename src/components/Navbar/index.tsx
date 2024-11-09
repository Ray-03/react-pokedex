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
import SearchBar from "../Searchbar";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" px={K_PADDING} bgColor={"brand.primary"}>
      <Flex minH={16} alignItems={"center"} justifyContent={"space-between"}>
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

          <Box display={{ base: "none", md: "flex" }}>
            <SearchBar />
          </Box>
        </HStack>
      </Flex>
      <Box display={{ base: "flex", md: "none" }} pb={K_PADDING}>
        <SearchBar />
      </Box>
    </Box>
  );
}
