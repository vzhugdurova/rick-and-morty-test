import React from "react";
import { useQuery } from "@apollo/client";
import { ALL_CHARACTERS } from "../../apollo/characters";
import { Box } from "@mui/material";
import CharCard from "../CharCard/CharCard";

const CharList = () => {
  const { loading, data } = useQuery(ALL_CHARACTERS);

  if(loading) {
    return <h1>Loading...</h1>
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 3,
        height: 460 + "px",
        overflow: "scroll",
      }}
    >
      {data?.characters.results.map((char: any) => (
        <CharCard key={char.id} character={char} />
      ))}
    </Box>
  );
};

export default CharList;
