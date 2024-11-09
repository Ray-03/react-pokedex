import React, { useRef } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = () => {
    if (inputRef.current) {
      const query = inputRef.current.value;
      router.push(`/${query}`);

      if (query.trim()) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <Flex gap={2}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          variant="filled"
          borderRadius="md"
        />
      </InputGroup>
      <Button
        onClick={handleSearch}
        bgColor={"brand.secondary"}
        color={"brand.white"}
      >
        Search
      </Button>
    </Flex>
  );
};

export default SearchBar;
