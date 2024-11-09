import { K_PADDING, K_POKEMON_TYPE_TAG_COLOURS } from "@/constant";
import { useGetPokemonQuery } from "@/redux/features/apiSlice";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Image,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface PokemonSummaryCardProps {
  name: string;
}

const PokemonSummaryCard = ({ name }: PokemonSummaryCardProps) => {
  const { data, isLoading } = useGetPokemonQuery({ name });

  return (
    <Card
      minW={200}
      shadow="md"
      borderRadius="lg"
      textColor={"white"}
      onClick={() => console.log(data)}
      cursor={"pointer"}
      bgColor={"#111C27"}
    >
      <CardHeader borderTopRadius={"lg"} p={K_PADDING}>
        <HStack justify={"space-between"}>
          <Text>{data?.name}</Text>
          <Text>ID: {data?.id}</Text>
        </HStack>
      </CardHeader>

      <CardBody
        bgColor={
          K_POKEMON_TYPE_TAG_COLOURS[data?.types?.[0]?.type?.name ?? ""] ??
          "white"
        }
        bgGradient="linear(to-t, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0) 30%)"
      >
        <Image src={data?.sprites.other["official-artwork"].front_default} />
      </CardBody>
      <CardFooter borderBottomRadius={"lg"} p={K_PADDING}>
        {data?.types.map((el) => (
          <Tag
            mx={1}
            key={el.type.name}
            borderRadius={"full"}
            bgColor={K_POKEMON_TYPE_TAG_COLOURS[el.type.name] ?? "white"}
            textColor={"white"}
          >
            <TagLabel>{el.type.name}</TagLabel>
          </Tag>
        ))}
      </CardFooter>
    </Card>
  );
};

export default PokemonSummaryCard;
