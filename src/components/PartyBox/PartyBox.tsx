import { Box } from "@mui/system";
import CardWrapper from "../CardWrapper/CardWrapper";

const PartyBox = () => {
  return (
    <>
      <h1 style={{marginTop: 150}}>PARTY</h1>
      <Box
        sx={{
          display: "flex",
          gap: 4,
        }}
      >
        <CardWrapper>
          <p style={{ color: "white", fontSize: 24 }}>RICK</p>
        </CardWrapper>
        <CardWrapper>
          <p style={{ color: "white", fontSize: 24 }}>MORTY</p>
        </CardWrapper>
      </Box>
    </>
  );
};

export default PartyBox;
