import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";
import { Character } from "../../types/Character";
import CardWrapper from "../CardWrapper/CardWrapper";

interface ICardProps {
  character: Character;
}

const CharCard: FC<ICardProps> = ({ character }) => {
  return (
    <CardWrapper>
      <>
        <IconButton
          aria-label="close"
          style={{
            position: "absolute",
            backgroundColor: "white",
            left: 145,
            top: 10,
          }}
        >
          <CloseIcon sx={{ color: "#424242" }} fontSize="small" />
        </IconButton>
        <img
          src={character.image}
          alt={character.name}
          style={{ width: "100%", height: "100%" }}
        />
      </>
    </CardWrapper>
  );
};

export default CharCard;
