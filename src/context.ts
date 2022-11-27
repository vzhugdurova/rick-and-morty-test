import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { PartyCharacter } from "./components/App/App";
import { Character } from "./__generated__/graphql";

export type Context = {
  characters: Character[];
  rickAndMorty: PartyCharacter;
  setCharacters: Dispatch<SetStateAction<Character[]>>;
  setRickAndMorty: Dispatch<SetStateAction<PartyCharacter>>;
};

export const AppContext = createContext({} as Context);

export const useAppContext = () => useContext(AppContext);
