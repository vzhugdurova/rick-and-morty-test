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
  const { setCharacters, setRickAndMorty } = useAppContext();

  function deleteCharacter() {
    setCharacters((prev) => prev.filter((el) => el.id !== character.id));
  }

  function addToParty() {
    if (character.name.toLowerCase().match("rick")) {
      setRickAndMorty((prev) => ({ ...prev, rick: character }));
    }
    if (character.name.toLowerCase().match("morty")) {
      setRickAndMorty((prev) => ({ ...prev, morty: character }));
    }
  }

  return (
    <CardWrapper>
      <>
        <IconButton
          style={{
            position: "absolute",
            backgroundColor: "white",
            left: 145,
            top: 10,
            opacity: "75%",
          }}
          onClick={() => deleteCharacter()}
        >
          <CloseIcon sx={{ color: "black" }} fontSize="small" />
        </IconButton>
        <img
          src={character.image}
          alt={character.name}
          style={{ width: "100%", height: "100%" }}
          onClick={() => addToParty()}
        />
      </>
    </CardWrapper>
  );
};

export default CharCard;
