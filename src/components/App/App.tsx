import { Container } from "@mui/material";
import CharList from "../CharList/CharList";
import PartyBox from "../PartyBox/PartyBox";
import SearchInput from "../SearchInput/SearchInput";
import "./App.css";

const App = () => {
  return (
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
      <SearchInput />
      <CharList />
      <PartyBox />
    </Container>
  );
};

export default App;
