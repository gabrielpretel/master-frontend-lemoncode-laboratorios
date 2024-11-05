import React from "react";
import Typography from "@mui/material/Typography";
import { MemberEntity } from "../list.vm";
import { generatePath, Link } from "react-router-dom";
import classes from "./member-row.component.module.scss";

interface Props {
  member: MemberEntity;
}

export const MemberRow: React.FC<Props> = (props) => {
  const { member } = props;

  return (
    <Link to={generatePath("/app/detail/:id", { id: member.login })}>
      <div className={classes.listContainerItem}>
        <img
          className={classes.avatarListImage}
          src={member.avatar_url}
          alt={`Foto de ${member.login}`}
        />
        <Typography
          component="span"
          sx={{
            fontWeight: "700",
            color: "#f2f2f2",
          }}
        >
          {member.login}
        </Typography>
      </div>
    </Link>
  );
};
