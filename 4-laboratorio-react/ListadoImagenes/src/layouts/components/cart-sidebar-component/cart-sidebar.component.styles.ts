import { css } from "@emotion/react";

const cartContainer = css`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  width: 350px;
  min-height: 99dvh;
  background-color: #111111;
  border: 1px solid #31271e;
  margin: 5px;
  margin-bottom: 0px;
  overflow-y: auto;
  z-index: 3;

  &::-webkit-scrollbar-thumb {
    background: rgba(147, 115, 65, 0.4);
  }

  &::-webkit-scrollbar {
    width: 8px;
  }
`;

const cartHeader = css`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-bottom: 1px solid #31271e;

  & h2 {
    font-weight: 400;
  }
`;

const closeButton = css`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #c4b998;
`;

const cartListItems = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  list-style: none;
  padding-left: 0px;
`;

const cartEmpty = css`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  color: #c4b998;

  & p {
    font-size: 20px;
  }
  & span {
    font-weight: 300;
  }
`;

const checkoutButton = css`
  position: relative;
  background: #111111;
  border-top: 1px solid #927345;
  padding: 22px;
  text-align: center;
  transition: all 0.4s ease;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: radial-gradient(transparent, #11111199 90%),
      url("src/common/img/piltover.jpg");
    background-position: center center;
    z-index: -1;
    transition: opacity 0.4s ease;
  }

  &:hover::before {
    opacity: 0.5;
  }
`;

export default {
  cartContainer,
  cartHeader,
  closeButton,
  cartListItems,
  cartEmpty,
  checkoutButton,
};
