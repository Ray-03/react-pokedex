"use client";
import PokemonSummaryCard from "@/components/PokemonSummaryCard";
import { useGetPokemonsQuery } from "@/redux/features/apiSlice";
import { Box, Grid } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetPokemonsQuery({ page });

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(150px, 2fr))" gap={2}>
      {data?.map((el) => (
        <PokemonSummaryCard name={el.name} key={el.name} />
      ))}
    </Grid>
  );
}
