"use client";
import PokemonSummaryCard from "@/components/PokemonSummaryCard";
import { IPokemonListItem } from "@/interface/pokemonList";
import { useGetPokemonsQuery } from "@/redux/features/apiSlice";
import { Grid, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, isError } = useGetPokemonsQuery({
    page,
  });
  const [allData, setAllData] = useState<IPokemonListItem[]>([]);

  useEffect(() => {
    if (data) {
      setAllData((prev) => [...prev, ...data]);
    }
  }, [data]);

  const handleScroll = debounce(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (
      scrollTop + windowHeight >= docHeight - 200 &&
      !isFetching &&
      (data?.length ?? 0) > 0
    ) {
      setPage((prev) => prev + 1);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (isLoading) return <Spinner />;
  if (isError) return <Text>{`Error loading pokedex :<`}</Text>;

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(250px, 2fr))" gap={2}>
      {allData?.map((el) => (
        <PokemonSummaryCard name={el.name} key={el.name} />
      ))}
    </Grid>
  );
}
