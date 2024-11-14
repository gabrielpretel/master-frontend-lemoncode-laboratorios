import { css } from "@emotion/react";

const galleryContainer = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const galleryCardContainer = (img: string, selected: boolean) => css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${img});
  background-position: bottom center;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1;
  height: 450px;
  transition: all 0.4s;
  margin-bottom: 10px;
  will-change: transform;

  &::before {
    content: "";
    position: absolute;
    background: ${selected
      ? ""
      : "radial-gradient(#111111 10%, transparent 290%)"};
    opacity: 0.7;
    height: 100%;
    width: 100%;
    transition: all 1s;
  }

  & img {
    filter: drop-shadow(2px 4px 6px black);
  }

  &:hover {
    transition-timing-function: ease, step-start, ease;
    border: 1px solid #927345;

    &::before {
      opacity: 0;
    }

    & img {
      opacity: ${selected ? 1 : 0};
    }
  }

  &:hover .action {
    height: 54px;
    border-top: 1px solid #927345;
    background-color: rgba(10, 10, 12, 0.94);
    font-size: 12px;
    font-weight: 800;
    transition: 0.4s;

    &:hover {
      background-color: rgba(10, 10, 12, 0.6);
      background-position: 29% 87%;
    }
  }

  &:hover .info {
    bottom: 54px;
  }

  img {
    opacity: 1;
    z-index: 1;
    transition: 0.4s;
    height: 75px;
  }
`;

const galleryCardInfo = css`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(10, 10, 12, 0.9);
  border-top: 1px solid #927345;
  padding: 22px;
  text-align: center;
  transition: 0.4s ease;
  overflow: hidden;

  h2,
  h3 {
    font-weight: 500;
    text-transform: uppercase;
  }

  h2 {
    font-size: 14px;
    color: #927345;
  }

  h3 {
    font-size: 12px;
    color: #c4b998;
  }
`;

const galleryCardAction = css`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: "Beaufort for LOL", Arial, sans-serif;
  font-weight: 700;
  font-size: 11px;
  background-color: rgba(10, 10, 12, 01);
  color: #937341;
  height: 0px;
  letter-spacing: 0.3em;
  line-height: 54px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.4s;
  overflow: hidden;
`;

const actionSelected = css`
  height: 54px;
  border-top: 1px solid #927345;
  background-color: rgba(10, 10, 12, 0.94);

  &:hover {
    background-color: #c4b998;
  }
`;

const infoSelected = css`
  bottom: 54px;
`;

const cardSelected = css`
  transition-timing-function: ease, step-start, ease;
  transition-duration: 0.5s;
  border: 1px solid #927345;
  z-index: 3;

  &:hover {
    scale: 1;
  }
`;

const flexCentered = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default {
  galleryContainer,
  galleryCardContainer,
  galleryCardInfo,
  galleryCardAction,
  actionSelected,
  infoSelected,
  cardSelected,
  flexCentered,
};
