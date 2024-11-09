"use client";

import PokemonSummaryCard from "@/components/PokemonSummaryCard";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

const PokemonDetailPage = () => {
  const currentPathname = usePathname();
  currentPathname.replace("/", "");

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      <GridItem colSpan={1}>
        <PokemonSummaryCard
          name={currentPathname}
          key={currentPathname}
          isClickable={false}
        ></PokemonSummaryCard>
      </GridItem>
      <GridItem colSpan={2}>test</GridItem>
    </SimpleGrid>
  );
};

export default PokemonDetailPage;
