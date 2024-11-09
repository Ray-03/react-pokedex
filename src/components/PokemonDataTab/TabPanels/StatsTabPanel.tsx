import { useGetPokemonQuery } from "@/redux/features/apiSlice";
import { Box } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";
import RadarGraph from "../../RadarGraph";

const StatsTabPanel = () => {
  const pathname = usePathname();
  const pokemonName = pathname.replace("/", "");
  const {
    data: pokemonData,
    error,
    isLoading,
  } = useGetPokemonQuery({
    name: pokemonName,
  });

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  if (error) {
    return <Box>Error loading Pokémon data.</Box>;
  }

  return (
    <Box bgColor={"brand.white"}>
      <RadarGraph data={pokemonData} />
    </Box>
  );
};

export default StatsTabPanel;
