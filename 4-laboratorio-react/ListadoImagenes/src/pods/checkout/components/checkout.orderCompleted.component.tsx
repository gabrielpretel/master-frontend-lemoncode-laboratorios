import React from "react";
import { Link } from "react-router-dom";
import { routes } from "@/routers";
import CompleteIcon from "@/common/icons/complete-icon.svg?react";
import CartIcon from "@/common/icons/cart-icon.svg?react";
import styles from "./checkout.orderCompleted.component.styles";

export const OrderCompleted: React.FC = () => {
  return (
    <div css={styles.orderCompletedContainer}>
      <div role="alert" css={styles.alertContainer}>
        <div className="heading">
          <CompleteIcon css={{ fill: "#937341" }} />
          <h2>Thank you for your order</h2>
        </div>
        <p>
          Your order has been placed and is processed. You will receive an email
          with the order details.
        </p>
      </div>
      <Link css={styles.backButton} to={routes.champions}>
        <CartIcon css={{ height: "25px" }} /> Back to shop
      </Link>
    </div>
  );
};
