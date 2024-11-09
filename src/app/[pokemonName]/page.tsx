"use client";

import PokemonSummaryCard from "@/components/PokemonSummaryCard";
import {
  useGetPokemonQuery,
  useGetPokemonSpeciesQuery,
} from "@/redux/features/apiSlice";
import {
  GridItem,
  SimpleGrid,
  Stack,
  Tab,
  Table,
  TableCaption,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

const PokemonDetailPage = () => {
  const currentPathname = usePathname();
  const newCurrentPathname = currentPathname.replace("/", "");

  const { data: pokemonData } = useGetPokemonQuery({
    name: newCurrentPathname,
  });
  const { data: speciesData } = useGetPokemonSpeciesQuery({
    name: newCurrentPathname,
  });

  const flavorTexts = speciesData?.flavor_text_entries;
  const latestFlavorText = flavorTexts?.findLast(
    (el) => el.language.name === "en"
  )?.flavor_text;

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
              <Text>{latestFlavorText}</Text>
              <TableContainer>
                <Table variant="simple">
                  <Tbody>
                    <Tr>
                      <Td>Height</Td>
                      <Td>{(pokemonData?.height ?? 0) / 10} (m)</Td>
                    </Tr>
                    <Tr>
                      <Td>Weight</Td>
                      <Td>{(pokemonData?.weight ?? 0) / 10} (kg)</Td>
                    </Tr>
                    <Tr>
                      <Td>Species</Td>
                      <Td>
                        {
                          speciesData?.genera.findLast(
                            (el) => el.language.name === "en"
                          )?.genus
                        }
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Habitat</Td>
                      <Td>{speciesData?.habitat.name}</Td>
                    </Tr>
                    <Tr>
                      <Td>Color</Td>
                      <Td>{speciesData?.color.name}</Td>
                    </Tr>
                    <Tr>
                      <Td>Legendary Pokemon?</Td>
                      <Td>{speciesData?.is_legendary ? "Yes" : "No"}</Td>
                    </Tr>
                    <Tr>
                      <Td>Mythical Pokemon?</Td>
                      <Td>{speciesData?.is_mythical ? "Yes" : "No"}</Td>
                    </Tr>
                    <Tr>
                      <Td>Shape</Td>
                      <Td>{speciesData?.shape.name}</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <h2>Content for Tab 2</h2>
              <p>This is the content of the second tab.</p>
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
