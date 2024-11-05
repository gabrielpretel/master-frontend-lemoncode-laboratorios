import React from "react";
import { MemberDetail } from "../../detail.vm";
import { Typography } from "@mui/material";
import classes from "./detail-user-info.component.module.scss";

interface Props {
  member: MemberDetail;
}

export const DetailUserInfo: React.FC<Props> = ({ member }) => {
  return (
    <div className={classes.userInfoContainer}>
      <div className={classes.avatarContainer}>
        <img
          className={classes.avatarImage}
          src={member.avatarUrl}
          alt={member.name}
        />
      </div>
      <div className={classes.userDetailsContainer}>
        <Typography variant="h5" component="h2" className={classes.userName}>
          {member.name}
        </Typography>
        <div className={classes.userDetailsGrid}>
          <div className={classes.detailItem}>
            <Typography component="span" className={classes.detailLabel}>
              Compañía
            </Typography>
            <Typography component="span" className={classes.detailValue}>
              {member.company ? member.company : "Sin compañía."}
            </Typography>
          </div>
          <div className={classes.detailItem}>
            <Typography component="span" className={classes.detailLabel}>
              Ciudad
            </Typography>
            <Typography component="span" className={classes.detailValue}>
              {member.location ? member.location : "Sin ciudad."}
            </Typography>
          </div>
          <div className={classes.detailItem}>
            <Typography component="span" className={classes.detailLabel}>
              Biografía
            </Typography>
            <Typography component="span" className={classes.detailValue}>
              {member.bio ? member.bio : "Sin biografía"}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
