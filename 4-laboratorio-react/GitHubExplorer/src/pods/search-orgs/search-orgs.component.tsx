import React, { useContext, useRef } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { MembersContext } from "@/core/providers";
import classes from "./search-orgs.component.module.scss";

export const SearchOrgs: React.FC = () => {
  const { setFilterOrgs, searchInstantly } = useContext(MembersContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (inputRef.current && searchInstantly) {
      const value = inputRef.current.value;
      searchInstantly(value || "Lemoncode");
    }
  };

  return (
    <div className={classes.searchBar}>
      <input
        ref={inputRef}
        className={classes.inputSearch}
        type="search"
        placeholder="Busca aquí la organización..."
        onChange={(e) => {
          if (setFilterOrgs) {
            setFilterOrgs(e.target.value || "Lemoncode");
          }
        }}
      />
      <div className={classes.searchIcon} onClick={handleSearch}>
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
