import { CharactersContext } from "@/core/providers/characters";
import React from "react";
import { ListRick } from "./list-rick.component";

export const ListRickContainer: React.FC = () => {
  const { characters } = React.useContext(CharactersContext);
  
  return <ListRick characters={characters} />;
};
