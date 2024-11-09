import { useGetPokemonQuery } from "@/redux/features/apiSlice";
import { Card, CardHeader, Image } from "@chakra-ui/react";
import React from "react";

interface PokemonSummaryCardProps {
  name: string;
}

const PokemonSummaryCard = ({ name }: PokemonSummaryCardProps) => {
  const { data, isLoading } = useGetPokemonQuery({ name });

  return (
    <Card
      //   p={5}
      shadow="md"
      //   borderWidth="1px"
      borderRadius="md"
      //   textAlign="center"
    >
      <CardHeader>
        <Image src={data?.sprites.other["official-artwork"].front_default} />
      </CardHeader>
    </Card>
  );
};

export default PokemonSummaryCard;
