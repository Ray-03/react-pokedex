import AboutTabPanel from "@/components/PokemonDataTab/TabPanels/AboutTabPanel";
import StatsTabPanel from "@/components/PokemonDataTab/TabPanels/StatsTabPanel";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import React from "react";

const PokemonDataTab = () => {
  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab>About</Tab>
        <Tab>Stats</Tab>
        <Tab>Evolution</Tab>
        <Tab>Moves</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <AboutTabPanel />
        </TabPanel>
        <TabPanel>
          <StatsTabPanel />
        </TabPanel>
        <TabPanel>
          <h2>Content for Tab 3</h2>
          <p>This is the content of the third tab.</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default PokemonDataTab;
