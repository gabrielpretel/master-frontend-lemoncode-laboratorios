import { css } from "@emotion/react";

const checkoutContainer = css`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  color: #c4b998;

  & h2,
  h3 {
    font-weight: 700;
    font-size: 12px;
    color: #c4b998;
    letter-spacing: 4px;
    padding: 16px 0 16px 4px;
    text-transform: uppercase;
  }

  & label {
    padding-bottom: 10px;
    margin-right: 20px;
  }

  input {
    background-color: #121212;
    margin-bottom: 20px;
    margin-right: 10px;
    font-weight: 400;
    font-size: 14px;
    background-color: rgba(25, 28, 33, 0.8);
    color: #937341;
    letter-spacing: 2px;
    padding: 10px 10px;
    border: 1px solid #31271e;
  }
`;

const checkoutBox = css`
  display: flex;
  flex-direction: column;
  background-color: #111318;
  border: 1px solid #31271e;
  padding: 20px;
`;

const twoColumInput = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  & div {
    display: flex;
    flex-direction: column;
  }
`;
const threColumnInput = css`
  display: grid;
  grid-template-columns: 50% 1fr 1fr;
  grid-template-rows: 1fr;

  & div {
    display: flex;
    flex-direction: column;
  }
`;

const address = css`
  display: flex;
  flex-direction: column;
`;

const orderButton = css`
  position: relative;
  background: #111318;
  border: 1px solid #31271e;
  padding: 22px;
  text-align: center;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  overflow: hidden;

  &:hover {
    background: rgb(31, 32, 36);
  }
`;

const orderListItems = css`
  display: flex;
  flex: 1;
  flex-direction: column;
  list-style: none;
  padding-left: 0px;
`;

const orderItem = (img: string) => css`
  border: 1px solid #31271e;
  padding: 20px;
  color: #c4b998;
  font-size: 20px;
  transition: 0.3s;

  background: radial-gradient(
      at 70% 300%,
      #c4b99840 15%,
      #c4b99810 60%,
      transparent
    ),
    url(${img});
`;

export default {
  checkoutContainer,
  checkoutBox,
  twoColumInput,
  threColumnInput,
  address,
  orderButton,
  orderListItems,
  orderItem
};
