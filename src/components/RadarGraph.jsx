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

const RadarGraph = ({ data: pokemonData }) => {
  const baseStats = pokemonData?.stats || [];
  const statLabels = [
    "hp",
    "attack",
    "defense",
    "special-attack",
    "special-defense",
    "speed",
  ];

  const statsMaxValues = [
    { label: "HP", max: 255 },
    { label: "Attack", max: 180 },
    { label: "Defense", max: 200 },
    { label: "Special Attack", max: 180 },
    { label: "Special Defense", max: 200 },
    { label: "Speed", max: 200 },
  ];

  const statsPercentage = statLabels.map((label, index) => {
    const stat = baseStats.find((stat) => stat.stat.name === label);
    const maxStatValue = statsMaxValues[index].max;
    return ((stat?.base_stat ?? 0) / maxStatValue) * 100;
  });

  const chartData = {
    labels: statsMaxValues.map((el) => el.label),
    datasets: [
      {
        label: "Stats %",
        data: statsPercentage,
        backgroundColor: "#27415BAA",
        borderColor: "#608FD4",
        borderWidth: 5,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 20,
            weight: "bold", // Correct usage
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
            weight: "bold", // Correct usage
          },
        },
        ticks: {
          beginAtZero: true,
          max: 100,
          display: false,
        },
      },
    },
  };
  return <Radar data={chartData} options={chartOptions} />;
};

export default RadarGraph;
