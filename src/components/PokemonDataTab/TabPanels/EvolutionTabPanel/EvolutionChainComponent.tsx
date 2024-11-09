import PokemonSummaryCard from "@/components/PokemonSummaryCard";
import { Chain } from "@/interface/pokemonEvolution";
import { useGetPokemonEvolutionChainQuery } from "@/redux/features/apiSlice";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface EvolutionChain {
  base: ReactElement;
  evolutions: EvolutionChain[];
}

const extractEvolutionNames = (chain: Chain): EvolutionChain => {
  const component = (
    <PokemonSummaryCard key={chain.species.name} name={chain.species.name} />
  );
  const chainedComponents = chain.evolves_to.map((el) =>
    extractEvolutionNames(el)
  );

  return {
    base: component,
    evolutions: chainedComponents,
  };
};

const renderChain = (evolutionChain: EvolutionChain) => {
  return (
    <Flex direction={"column"}>
      {evolutionChain.base}
      {evolutionChain.evolutions.length > 0 && (
        <ArrowDownIcon fontSize={"xxx-large"} />
      )}
      {evolutionChain.evolutions.length > 0 && (
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 2fr))" gap={2}>
          {evolutionChain.evolutions.map((el, index) => (
            <GridItem key={index}>{renderChain(el)}</GridItem>
          ))}
        </Grid>
      )}
    </Flex>
  );
};

const EvolutionChainComponent = ({ url }: { url: string }) => {
  const { data: evolutionData, isLoading } = useGetPokemonEvolutionChainQuery({
    name: url,
  });

  if (isLoading) {
    return <Text>Loading evolution chain...</Text>;
  }

  if (!evolutionData) {
    return <Text>Error loading evolution data.</Text>;
  }

  const evolutionChain = extractEvolutionNames(evolutionData.chain);
  return (
    <Flex direction="column" alignItems="center">
      {renderChain(evolutionChain)}
    </Flex>
  );
};

export default EvolutionChainComponent;
