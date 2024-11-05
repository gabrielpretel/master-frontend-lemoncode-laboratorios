import React from "react";
import { MemberDetail } from "../../detail.vm";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material/styles";
import {
  GroupAddOutlined,
  GroupOutlined,
  CodeOutlined,
  FolderOutlined,
} from "@mui/icons-material";
import classes from "./detail-github-info.component.module.scss";

interface Props {
  member: MemberDetail;
}

interface InfoSquareProps {
  icon: React.ReactElement;
  value: number;
  label: string;
}

const styledIcon: SxProps<Theme> = {
  color: "text.primary",
  bgcolor: "#19503f",
  borderRadius: "50%",
  padding: "8px",
  fontSize: "3rem",
  alignSelf: "center",
  display: "grid",
  boxShadow: "0px 3px 35px #00000080",
};

const valueTypography: SxProps<Theme> = {
  fontWeight: "700",
  color: "text.primary",
};

const labelTypography: SxProps<Theme> = {
  fontWeight: "200",
  fontSize: "0.85rem",
  color: "text.primary",
};

const InfoSquare: React.FC<InfoSquareProps> = ({ icon, value, label }) => (
  <div className={classes.detailInfoSquare}>
    {React.cloneElement(icon, { sx: styledIcon })}
    <div>
      <Typography component="span" sx={valueTypography}>
        {value}
      </Typography>
      <Typography component="span" sx={labelTypography}>
        {label}
      </Typography>
    </div>
  </div>
);

export const DetailGithubInfo: React.FC<Props> = ({ member }) => {
  const infoData = [
    {
      icon: <FolderOutlined />,
      value: member.publicRepos,
      label: "Repositorios",
    },
    {
      icon: <CodeOutlined />,
      value: member.publicGists,
      label: "Gists públicos",
    },
    {
      icon: <GroupAddOutlined />,
      value: member.followers,
      label: "Seguidores",
    },
    { icon: <GroupOutlined />, value: member.following, label: "Seguidos" },
  ];

  return (
    <div className={classes.detailInfoSquares}>
      {infoData.map((data, index) => (
        <InfoSquare key={index} {...data} />
      ))}
    </div>
  );
};
