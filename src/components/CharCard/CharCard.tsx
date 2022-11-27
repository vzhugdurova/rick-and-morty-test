import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";
import CardWrapper from "../CardWrapper/CardWrapper";
import { Character } from "../../__generated__/graphql";
import { useAppContext } from "../../context";

interface ICardProps {
  character: Character;
}

const CharCard: FC<ICardProps> = ({ character }) => {
  const { setCharacters } = useAppContext();
  
  function deleteCharacter() {
    setCharacters((prev) => prev.filter((el) => el.id !== character.id));
  }

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
          onClick={() => deleteCharacter()}
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
