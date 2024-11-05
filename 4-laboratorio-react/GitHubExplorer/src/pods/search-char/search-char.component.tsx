import React, { useContext, useEffect, useRef } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import classes from "./search-char.component.module.scss";
import { CharactersContext } from "@/core/providers/characters";

export const SearchChar: React.FC = () => {
  const { setFilterChar, filterChar } = useContext(CharactersContext);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = filterChar;
    }
  }, [filterChar]);

  return (
    <div className={classes.searchBar}>
      <input
        ref={inputRef}
        className={classes.inputSearch}
        type="search"
        placeholder={
          filterChar === "" ? "Busca aquí un personaje..." : filterChar
        }
        onChange={(e) => {
          if (setFilterChar) {
            setFilterChar(e.target.value || "");
          }
        }}
      />
      <div className={classes.searchIcon}>
        <SearchOutlinedIcon
          sx={{
            alignSelf: "center",
            color: "grey",
          }}
        />
      </div>
    </div>
  );
};
