import { css } from "@emotion/react";

const alertContainer = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px;
  border: 1px solid #31271e;
  background-color: #111318;
  color: #937341;
  margin-bottom: 40px;

  .heading {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #c4b998;
    margin-bottom: 10px;

    h2 {
      letter-spacing: 0px;
      font-size: 1.5rem;
    }
  }

  p {
    margin-bottom: 20px;
  }
`;

const backButton = css`
  display: flex;
  align-items: center;
  align-self: center;
  gap: 5px;
  background: #111318;
  border: 1px solid #31271e;
  color: #c4b998;
  padding: 20px;
  text-align: center;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  font-size: 1rem;
  text-transform: uppercase;
  box-shadow: 2px 2px 20px #111318;

  &:hover {
    background: rgb(31, 32, 36);
  }
`;

const orderCompletedContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default {
  alertContainer,
  backButton,
  orderCompletedContainer,
};
