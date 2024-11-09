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
import AboutTabComponent from "./AboutTabComponent";
import StatsTabComponent from "./StatsTabComponent";

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
        <Tabs variant="enclosed">
          <TabList>
            <Tab>About</Tab>
            <Tab>Stats</Tab>
            <Tab>Evolution</Tab>
            <Tab>Moves</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <AboutTabComponent />
            </TabPanel>
            <TabPanel>
              <StatsTabComponent />
            </TabPanel>
            <TabPanel>
              <h2>Content for Tab 3</h2>
              <p>This is the content of the third tab.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
    </SimpleGrid>
  );
};

export default PokemonDetailPage;
