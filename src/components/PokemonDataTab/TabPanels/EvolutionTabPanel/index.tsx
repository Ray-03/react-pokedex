import { useGetPokemonSpeciesQuery } from "@/redux/features/apiSlice";
import { Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";
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
