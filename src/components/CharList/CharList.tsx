import React from "react";
import { Box, Skeleton } from "@mui/material";
import CharCard from "../CharCard/CharCard";
import { useAppContext } from "../../context";

const CharList = ({ loading }: { loading: boolean }) => {
  const { characters } = useAppContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
        height: 460 + "px",
        overflow: "scroll",
      }}
    >
      {loading
        ? Array(8)
            .fill(1)
            .map((_, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                width={190}
                height={220}
              />
            ))
        : characters.map((char) => <CharCard key={char.id} character={char} />)}
    </Box>
  );
};

export default CharList;
