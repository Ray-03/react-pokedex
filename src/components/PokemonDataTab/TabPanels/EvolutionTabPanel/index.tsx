import PokemonSummaryCard from "@/components/PokemonSummaryCard";
import { Chain } from "@/interface/pokemonEvolution";
import {
  useGetPokemonEvolutionChainQuery,
  useGetPokemonQuery,
  useGetPokemonSpeciesQuery,
} from "@/redux/features/apiSlice";
import { Box, Grid, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import EvolutionChainComponent from "./EvolutionChainComponent";

const EvolutionTabPanel = () => {
  const currentPathname = usePathname().replace("/", "");
  const { data: speciesData } = useGetPokemonSpeciesQuery({
    name: currentPathname,
  });
  if (speciesData)
    return <EvolutionChainComponent url={speciesData?.evolution_chain.url} />;
  return <Text>Loading...</Text>;
};

export default EvolutionTabPanel;
