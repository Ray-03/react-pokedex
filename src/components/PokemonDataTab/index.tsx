import AboutTabPanel from "@/components/PokemonDataTab/TabPanels/AboutTabPanel";
import StatsTabPanel from "@/components/PokemonDataTab/TabPanels/StatsTabPanel";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import React from "react";
import EvolutionTabPanel from "./TabPanels/EvolutionTabPanel";

const PokemonDataTab = () => {
  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>About</Tab>
        <Tab>Stats</Tab>
        <Tab>Evolution</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <AboutTabPanel />
        </TabPanel>
        <TabPanel>
          <StatsTabPanel />
        </TabPanel>
        <TabPanel>
          <EvolutionTabPanel />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PokemonDataTab;
