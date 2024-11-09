"use client";

import PokemonSummaryCard from "@/components/PokemonSummaryCard";

import {
  GridItem,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";
import AboutTabPanel from "../../components/PokemonDataTab/TabPanels/AboutTabPanel";
import StatsTabPanel from "../../components/PokemonDataTab/TabPanels/StatsTabPanel";
import PokemonDataTab from "@/components/PokemonDataTab";

const PokemonDetailPage = () => {
  const currentPathname = usePathname();
  const newCurrentPathname = currentPathname.replace("/", "");

  return (
    <SimpleGrid
      columns={{ base: 1, md: 3 }}
      spacingX={{ base: 0, md: 10 }}
      spacingY={10}
    >
      <GridItem colSpan={1}>
        <PokemonSummaryCard
          name={newCurrentPathname}
          key={newCurrentPathname}
          isClickable={false}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <PokemonDataTab />
      </GridItem>
    </SimpleGrid>
  );
};

export default PokemonDetailPage;
