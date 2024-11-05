import React from "react";
import { MemberDetail } from "../detail.vm";
import { ButtonPrimary } from "@/common/components";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

interface Props {
  member: MemberDetail;
}

const StyledDetailHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: self-start;
`;

export const DetailHeader: React.FC<Props> = ({ member }) => {
  return (
    <StyledDetailHeader className="detail-header">
      <Typography
        variant="h5"
        component="h1"
        sx={{
          fontWeight: "700",
        }}
        color="text.primary"
      >
        Detalle del miembro {member.login}
      </Typography>
      <ButtonPrimary url={member.htmlUrl} targetBlank={true} icon={"External"}>
        Visitar GitHub
      </ButtonPrimary>
    </StyledDetailHeader>
  );
};
