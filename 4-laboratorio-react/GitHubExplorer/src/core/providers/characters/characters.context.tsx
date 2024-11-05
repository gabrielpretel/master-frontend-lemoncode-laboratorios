import React, {
  PropsWithChildren,
  useEffect,
  useState,
  useCallback,
} from "react";
import {
  CharacterEntity,
  CharactersContextModel,
  initialCharactersState,
} from "./characters.vm";
import { useDebounce } from "use-debounce";

const DEBOUNCE_DELAY = 1000;
const API_BASE_URL = "https://rickandmortyapi.com/api/character/";

export const CharactersContext = React.createContext<CharactersContextModel>(
  initialCharactersState
);

export const CharactersProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<CharacterEntity[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [filterChar, setFilterChar] = useState<string>("");
  const [debouncedChar] = useDebounce(filterChar, DEBOUNCE_DELAY);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchCharacters = useCallback(async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}?name=${debouncedChar}&page=${currentPage}`
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setCharacters(data.results);
      setTotalPages(data.info.pages);
      setError(false);
    } catch (error) {
      console.error("Error fetching characters:", error);
      setError(true);
    }
  }, [debouncedChar, currentPage]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const handlePaginationChange = useCallback(
    (_e: React.ChangeEvent<unknown>, newPage: number) => {
      setCurrentPage(newPage);
    },
    []
  );

  const contextValue: CharactersContextModel = {
    characters,
    error,
    setFilterChar,
    totalPages,
    handlePaginationChange,
    currentPage,
    filterChar,
  };

  return (
    <CharactersContext.Provider value={contextValue}>
      {children}
    </CharactersContext.Provider>
  );
};
