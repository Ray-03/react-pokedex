import { K_PADDING, K_POKEMON_TYPE_TAG_COLOURS } from "@/constant";
import { useGetPokemonQuery } from "@/redux/features/apiSlice";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Tag,
  TagLabel,
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
      //   p={5}
      shadow="md"
      //   borderWidth="1px"
      borderRadius="lg"
      //   textAlign="center"
      onClick={() => console.log(data)}
      cursor={"pointer"}
      bgColor={"#111C27"}
    >
      <CardHeader borderTopRadius={"lg"} color={"white"} p={K_PADDING}>
        {data?.name}
      </CardHeader>

      <CardBody
        bgColor={
          K_POKEMON_TYPE_TAG_COLOURS[data?.types?.[0]?.type?.name ?? ""] ??
          "white"
        }
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
          >
            <TagLabel color={"white"}>{el.type.name}</TagLabel>
          </Tag>
        ))}
      </CardFooter>
    </Card>
  );
};

export default PokemonSummaryCard;
