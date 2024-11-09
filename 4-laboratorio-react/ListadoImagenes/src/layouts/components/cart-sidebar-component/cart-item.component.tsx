import React, { useContext } from "react";
import { css } from "@emotion/react";
import DeleteIcon from "@/common/icons/delete-icon.svg?react";
import { championEntity } from "@/common/mock-data";
import {
  ChampionsContext,
  ChampionsContextModel,
} from "@/core/providers/cart.provider";

interface Props {
  char: championEntity;
}

const deleteIcon = css`
  height: 24px;
  transition: 0.4s;

  &:hover {
    scale: 1.2;
    filter: drop-shadow(0 10px 10px rgba(0, 0, 0, 0.9));
  }
`;

const cartItemInfo = css`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const cartItem = (img: string) => css`
  border-bottom: 1px solid #31271e;
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

  & img {
    box-shadow: 0 0 16px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const CartItem: React.FC<Props> = ({ char }) => {
  const { cartItems, setCartItems, setChampions, champions } =
    useContext<ChampionsContextModel>(ChampionsContext);

  const handlerClick = () => {
    const newCartItems = cartItems.filter(
      (character) => character.id !== char.id
    );
    setCartItems(newCartItems);

    const newChampions = champions.map((character) =>
      character.id === char.id ? { ...character, selected: false } : character
    );

    setChampions(newChampions);
  };

  return (
    <li css={cartItem(char.img)}>
      <img
        css={{
          backgroundPosition: "50% 50%",
          border: "1px solid #31271e",
        }}
        src={char.img}
        alt="Ashe"
      />
      <div css={cartItemInfo}>
        <p>{char.name}</p>
        <button onClick={handlerClick}>
          <DeleteIcon css={deleteIcon} />
        </button>
      </div>
    </li>
  );
};
