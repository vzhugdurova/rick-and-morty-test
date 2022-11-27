import { Box } from "@mui/system";
import { useAppContext } from "../../context";
import CardWrapper from "../CardWrapper/CardWrapper";

const PartyBox = () => {
  const {
    rickAndMorty: { rick, morty },
  } = useAppContext();

  return (
    <>
      <h1 style={{ marginTop: 150 }}>PARTY</h1>
      <Box
        sx={{
          display: "flex",
          gap: 4,
        }}
      >
        <CardWrapper>
          {rick ? (
            <img
              src={rick.image}
              alt={rick.name}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <p style={{ color: "white", fontSize: 24 }}>RICK</p>
          )}
        </CardWrapper>
        <CardWrapper>
        {morty ? (
            <img
              src={morty.image}
              alt={morty.name}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <p style={{ color: "white", fontSize: 24 }}>MORTY</p>
          )}
        </CardWrapper>
      </Box>
    </>
  );
};

export default PartyBox;
