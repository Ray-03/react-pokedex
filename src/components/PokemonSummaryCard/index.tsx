import { K_PADDING, K_POKEMON_TYPE_TAG_COLOURS } from "@/constant";
import { useGetPokemonQuery } from "@/redux/features/apiSlice";
import {
  Box,
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
import Link from "next/link";
import React from "react";

interface PokemonSummaryCardProps {
  name: string;
}

const PokemonSummaryCard = ({ name }: PokemonSummaryCardProps) => {
  const { data, isLoading } = useGetPokemonQuery({ name });

  return (
    <Link href={`/${name}`}>
      <Card
        minW={200}
        shadow="md"
        borderRadius="lg"
        textColor={"brand.white"}
        onClick={() => console.log(data)}
        cursor={"pointer"}
        bgColor={"brand.primary"}
      >
        <CardHeader borderTopRadius={"lg"} p={K_PADDING}>
          <HStack justify={"space-between"}>
            <Text>{data?.name}</Text>
            <Text>#{data?.id}</Text>
          </HStack>
        </CardHeader>
        <CardBody
          clipPath={"border-box"}
          bgColor={
            K_POKEMON_TYPE_TAG_COLOURS[data?.types?.[0]?.type?.name ?? ""] ??
            "brand.white"
          }
          bgGradient="linear(to-t, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0) 30%)"
        >
          <Box
            position="relative"
            _hover={{
              ".pokeball-image": {
                transform: "rotate(0deg)",
                opacity: 0.9,
              },
              ".pokemon-image": { transform: "scale(1.1)" },
            }}
          >
            <Image
              className="pokeball-image"
              src={"/card-background/pokeball.png"}
              transform="rotate(150deg)"
              transition="transform 0.5s ease"
              opacity={0.5}
            />
            <Image
              className="pokemon-image"
              transition="transform 0.5s ease"
              position="absolute"
              top="0"
              left="0"
              right="0"
              bottom="0"
              src={data?.sprites.other["official-artwork"].front_default}
            />
          </Box>
        </CardBody>
        <CardFooter borderBottomRadius={"lg"} p={K_PADDING}>
          {data?.types.map((el) => (
            <Tag
              mx={1}
              key={el.type.name}
              borderRadius={"full"}
              bgColor={
                K_POKEMON_TYPE_TAG_COLOURS[el.type.name] ?? "brand.white"
              }
              textColor={"brand.white"}
            >
              <TagLabel>{el.type.name}</TagLabel>
            </Tag>
          ))}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PokemonSummaryCard;
