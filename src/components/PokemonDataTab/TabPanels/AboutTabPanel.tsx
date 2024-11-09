import {
  useGetPokemonQuery,
  useGetPokemonSpeciesQuery,
} from "@/redux/features/apiSlice";
import { Table, TableContainer, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

const AboutTabPanel = () => {
  const currentPathname = usePathname();
  const newCurrentPathname = currentPathname.replace("/", "");
  const { data: speciesData } = useGetPokemonSpeciesQuery({
    name: newCurrentPathname,
  });
  const { data: pokemonData } = useGetPokemonQuery({
    name: newCurrentPathname,
  });
  const flavorTexts = speciesData?.flavor_text_entries;

  const latestFlavorText = flavorTexts?.findLast(
    (el) => el.language.name === "en"
  )?.flavor_text;
  return (
    <>
      <Text>{latestFlavorText}</Text>
      <TableContainer>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td>Height</Td>
              <Td>{(pokemonData?.height ?? 0) / 10} (m)</Td>
            </Tr>
            <Tr>
              <Td>Weight</Td>
              <Td>{(pokemonData?.weight ?? 0) / 10} (kg)</Td>
            </Tr>
            <Tr>
              <Td>Species</Td>
              <Td>
                {
                  speciesData?.genera.findLast(
                    (el) => el.language.name === "en"
                  )?.genus
                }
              </Td>
            </Tr>
            <Tr>
              <Td>Habitat</Td>
              <Td>{speciesData?.habitat.name}</Td>
            </Tr>
            <Tr>
              <Td>Color</Td>
              <Td>{speciesData?.color.name}</Td>
            </Tr>
            <Tr>
              <Td>Legendary Pokemon?</Td>
              <Td>{speciesData?.is_legendary ? "Yes" : "No"}</Td>
            </Tr>
            <Tr>
              <Td>Mythical Pokemon?</Td>
              <Td>{speciesData?.is_mythical ? "Yes" : "No"}</Td>
            </Tr>
            <Tr>
              <Td>Shape</Td>
              <Td>{speciesData?.shape.name}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AboutTabPanel;
