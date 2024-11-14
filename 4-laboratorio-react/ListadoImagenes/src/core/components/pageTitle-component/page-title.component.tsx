import lineLeft from "@/common/img/line-left.png";
import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

const titleSection = css`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const lineStyle = css`
  display: flex;
  padding-left: 70px;
  align-items: center;
  justify-content: center;
  width: 30%;
`;

const lineLeftStyle = css`
  transform: rotate(180deg);
`;

export const PageTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div css={titleSection}>
        <img css={[lineStyle, lineLeftStyle]} src={lineLeft} />
        <h1>{children}</h1>
        <img css={lineStyle} src={lineLeft} />
      </div>
    </>
  );
};
