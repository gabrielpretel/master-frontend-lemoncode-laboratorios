import React from "react";
import { CharacterEntity } from "./list-rick.vm";
import classes from "./list-rick.component.module.scss";
import { Alert, Pagination, Typography } from "@mui/material";
import { CharactersContext } from "@/core/providers/characters";
import { CharRow } from "./components";
import { ButtonPrimary } from "@/common/components";

interface Props {
  characters: CharacterEntity[];
}

export const ListRick: React.FC<Props> = ({ characters }) => {
  const {
    error,
    totalPages,
    handlePaginationChange,
    currentPage,
    filterChar,
    setFilterChar,
  } = React.useContext(CharactersContext);

  return (
    <div className={classes.listContainer}>
      <div className={classes.listContainerHeader}>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: "700",
            color: "white",
          }}
        >
          Personajes Rick & Morty
        </Typography>
      </div>
      {filterChar !== "" && (
        <div className={classes.filterContainer}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: "400",
              color: "white",
              fontSize: "1rem",
            }}
          >
            <p>Búsqueda: {filterChar}</p>
          </Typography>
          <ButtonPrimary icon="Clear" clickAction={() => setFilterChar("")}>
            Limpiar búsqueda
          </ButtonPrimary>
        </div>
      )}

      {!error ? (
        <div className={classes.listContainerContent}>
          {characters.map((character) => {
            return <CharRow key={character.id} character={character} />;
          })}
        </div>
      ) : (
        <div>
          <Alert
            severity="error"
            sx={{
              backgroundColor: "black",
              color: "text.primary",
              borderRadius: "50px",
              opacity: "0.9",
            }}
          >
            No existe el personaje el personaje que buscas. Puedes probar con:
            <b> Rick, Morty, Beth...</b>
          </Alert>
        </div>
      )}
      {!error && totalPages !== 1 && (
        <Pagination
          sx={{
            marginTop: "20px",
          }}
          color="primary"
          count={totalPages}
          onChange={handlePaginationChange}
          page={currentPage}
        />
      )}
    </div>
  );
};
