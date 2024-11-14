import { css } from "@emotion/react";

const checkoutContainer = css`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  color: #c4b998;

  & h2 {
    font-weight: 700;
    font-size: 12px;
    color: #c4b998;
    letter-spacing: 4px;
    padding: 16px 0 16px 4px;
    text-transform: uppercase;
  }

  & label {
    padding-bottom: 10px;
  }

  input {
    all: unset;
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

export default {
  checkoutContainer,
  checkoutBox,
  twoColumInput,
  threColumnInput,
  address,
};
