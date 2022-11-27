import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "../../apollo/characters";
import { Container } from "@mui/material";
import CharList from "../CharList/CharList";
import PartyBox from "../PartyBox/PartyBox";
import SearchInput from "../SearchInput/SearchInput";
import "./App.css";
import { Character } from "../../__generated__/graphql";
import { AppContext } from "../../context";

const App = () => {
  const { data, loading, refetch } = useQuery(GET_CHARACTER);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    if (data?.characters?.results) {
      setCharacters(data.characters.results);
    }
  }, [data]);

  return (
    <AppContext.Provider value={{characters, setCharacters}} >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 10,
          gap: 5,
          alignItems: "center",
        }}
      >
        <SearchInput refetch={refetch} />
        <CharList />
        <PartyBox />
      </Container>
    </AppContext.Provider>
  );
};

export default App;
