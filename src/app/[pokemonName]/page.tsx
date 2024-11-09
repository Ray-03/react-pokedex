"use client";

import PokemonSummaryCard from "@/components/PokemonSummaryCard";
import {
  useGetPokemonQuery,
  useGetPokemonSpeciesQuery,
} from "@/redux/features/apiSlice";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Box,
  GridItem,
  SimpleGrid,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

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
  const statsMax = [
    { name: "HP", value: 255 },
    { name: "Attack", value: 180 },
    { name: "Defense", value: 200 },
    { name: "Special Attack", value: 180 },
    { name: "Special Defense", value: 200 },
    { name: "Speed", value: 200 },
  ];
  const statsDataRaw = pokemonData?.stats;

  const statsDivider = statsMax.map((el) => el.value);
  const statNames = [
    "hp",
    "attack",
    "defense",
    "special-attack",
    "special-defense",
    "speed",
  ];

  const statsData = statNames.map((name, index) => {
    const stat = statsDataRaw?.find((el) => el.stat.name === name);
    return ((stat?.base_stat ?? 0) / statsDivider[index]) * 100;
  });
  const data = {
    labels: statsMax.map((el) => el.name),
    datasets: [
      {
        label: "Stats %",
        data: statsData,
        backgroundColor: "#27415BAA",
        borderColor: "#608FD4",
        borderWidth: 5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 20,
            weight: "bold",
          },
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          color: "#27415BEE",
        },
        grid: {
          color: "#27415BEE",
        },
        pointLabels: {
          font: {
            size: 14,
            weight: "bold",
          },
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          display: false,
        },
      },
    },
  };

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
              <Box bgColor={"brand.white"}>
                <Radar data={data} options={options} />
              </Box>
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
