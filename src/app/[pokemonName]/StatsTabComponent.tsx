import { useGetPokemonQuery } from "@/redux/features/apiSlice";
import { Box } from "@chakra-ui/react";
import { data } from "framer-motion/client";
import { usePathname } from "next/navigation";
import React from "react";
import { Radar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Legend);

const StatsTabComponent = () => {
  const currentPathname = usePathname();
  const newCurrentPathname = currentPathname.replace("/", "");
  const { data: pokemonData } = useGetPokemonQuery({
    name: newCurrentPathname,
  });

  const statsMax = [
    { name: "HP", value: 255 },
    { name: "Attack", value: 180 },
    { name: "Defense", value: 200 },
    { name: "Special Attack", value: 180 },
    { name: "Special Defense", value: 200 },
    { name: "Speed", value: 200 },
  ];
  const statsDataRaw = pokemonData?.stats;

  const statsDivider = statsMax.map((el) => el.value);
  const statNames = [
    "hp",
    "attack",
    "defense",
    "special-attack",
    "special-defense",
    "speed",
  ];

  const statsData = statNames.map((name, index) => {
    const stat = statsDataRaw?.find((el) => el.stat.name === name);
    return ((stat?.base_stat ?? 0) / statsDivider[index]) * 100;
  });
  const data = {
    labels: statsMax.map((el) => el.name),
    datasets: [
      {
        label: "Stats %",
        data: statsData,
        backgroundColor: "#27415BAA",
        borderColor: "#608FD4",
        borderWidth: 5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 20,
            weight: "bold",
          },
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          color: "#27415BEE",
        },
        grid: {
          color: "#27415BEE",
        },
        pointLabels: {
          font: {
            size: 14,
            weight: "bold",
          },
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          display: false,
        },
      },
    },
  };
  return (
    <Box bgColor={"brand.white"}>
      <Radar data={data} options={options} />
    </Box>
  );
};

export default StatsTabComponent;
