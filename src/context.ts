import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { Character } from "./__generated__/graphql";

export type Context = {
  characters: Character[];
  setCharacters: Dispatch<SetStateAction<Character[]>>;
};

export const AppContext = createContext({} as Context);

export const useAppContext = () => useContext(AppContext);
