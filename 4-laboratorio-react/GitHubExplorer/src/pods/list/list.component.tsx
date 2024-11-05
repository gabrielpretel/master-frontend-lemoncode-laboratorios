import React from "react";
import { MemberRow } from "./components";
import Typography from "@mui/material/Typography";
import { MembersContext } from "@/core/providers";
import { Alert, Pagination } from "@mui/material";
import classes from "./list.component.module.scss";

export const List: React.FC = () => {
  const {
    members,
    error,
    org,
    handlePaginationChange,
    totalPages,
    actualPage,
  } = React.useContext(MembersContext);

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
          Miembros de {org[0].toUpperCase() + org.substring(1)}
        </Typography>
      </div>

      {!error ? (
        <div className={classes.listContainerContent}>
          {members.map((member) => {
            return <MemberRow key={member.login} member={member} />;
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
            No existe la organización <b>{org}</b>. Puedes probar con:
            <b> Microsoft, Apple, Lemoncode...</b>
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
          page={actualPage}
        />
      )}
    </div>
  );
};
