import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import {
  OpenInNew,
  ArrowForwardIosOutlined,
  ClearOutlined,
} from "@mui/icons-material";
import { Button, Typography, SvgIcon } from "@mui/material";

type Icon = "External" | "Default" | "Clear";

interface Props {
  url?: string;
  children?: React.ReactNode;
  targetBlank?: boolean;
  icon?: Icon;
  clickAction?: () => void;
}

const iconComponents: Record<Icon, typeof SvgIcon> = {
  External: OpenInNew,
  Default: ArrowForwardIosOutlined,
  Clear: ClearOutlined,
};

export const ButtonPrimary: React.FC<PropsWithChildren<Props>> = (props) => {
  const { children, url, targetBlank, icon, clickAction } = props;

  const IconComponent = icon ? iconComponents[icon] : null;

  return (
    <Link
      onClick={clickAction}
      to={url ? url : ""}
      target={targetBlank ? "_blank" : undefined}
    >
      <Button
        sx={{
          maxWidth: "200px",
          borderRadius: "8px",
          textTransform: "initial",
          bgcolor: "primary",
          display: "flex",
          alignItems: "center",
        }}
        variant="contained"
      >
        {IconComponent && (
          <IconComponent
            sx={{ fill: "text.secondary", mr: 1, fontSize: "1rem" }}
          />
        )}
        <Typography
          sx={{
            color: "text.secondary",
            fontWeight: "700",
          }}
        >
          {children}
        </Typography>
      </Button>
    </Link>
  );
};
