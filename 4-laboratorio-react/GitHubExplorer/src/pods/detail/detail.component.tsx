import React from "react";
import { MemberDetail } from "./detail.vm";
import { DetailGithubInfo, DetailHeader, DetailUserInfo } from "./components";
import classes from "./detail.component.module.scss";

interface Props {
  member: MemberDetail;
}

export const Detail: React.FC<Props> = ({ member }) => {
  return (
    <div className={classes.detailContainer}>
      <DetailHeader member={member} />
      <DetailUserInfo member={member} />
      <DetailGithubInfo member={member} />
    </div>
  );
};
