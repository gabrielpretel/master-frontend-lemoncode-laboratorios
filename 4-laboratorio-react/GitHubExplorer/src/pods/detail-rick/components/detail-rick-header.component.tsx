import React from "react";
import styled from "@emotion/styled";

const StyledDetailHeader = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: self-start;
  z-index: 1;
`;

export const DetailRickHeader: React.FC = () => {
  return <StyledDetailHeader className="detail-header"></StyledDetailHeader>;
};
