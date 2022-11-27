import React, { FC } from "react";
import { Box } from "@mui/material";
import CharCard from "../CharCard/CharCard";
import { useAppContext } from "../../context";

const CharList = () => {
  // if(loading) {
  //   return <h1>Loading...</h1>
  // }
  const { characters } = useAppContext();

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
      {characters.map((char) => (
        <CharCard key={char.id} character={char} />
      ))}
    </Box>
  );
};

export default CharList;
