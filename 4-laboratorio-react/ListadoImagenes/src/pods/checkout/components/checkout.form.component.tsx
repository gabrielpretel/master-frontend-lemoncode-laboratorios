import React, { useContext } from "react";
import styles from "./checkout.form.component.styles";
import { CartContext } from "@/core/providers";
import CartIcon from "@/common/icons/cart-icon.svg?react";
import { OrderCompleted } from "./checkout.orderCompleted.component";

interface FormData {
  name: string;
  mobileNumber: number;
  email: string;
  city: string;
  country: string;
  zip: number;
  province: string;
  address: string;
  paymentMethod: string;
}

const emptyFormData: FormData = {
  name: "",
  mobileNumber: 0,
  email: "",
  city: "",
  country: "",
  zip: 0,
  province: "",
  address: "",
  paymentMethod: "",
};

export const CheckoutForm: React.FC = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [formData, setFormData] = React.useState<FormData>(emptyFormData);
  const [orderCompleted, setOrderCompleted] = React.useState<Boolean>(false);
  const isEmptyCart = cartItems.length === 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCartItems([]);
    setFormData(emptyFormData);
    setOrderCompleted(true);
  };

  const handleChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  return orderCompleted ? (
    <OrderCompleted />
  ) : (
    <form css={styles.checkoutContainer} onSubmit={handleSubmit}>
      <div>
        <h2>Delivery information</h2>
        <div css={styles.checkoutBox}>
          <div css={styles.twoColumInput}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                onChange={handleChange("name")}
                type="text"
                placeholder="Your name"
                id="name"
                required
              />
            </div>
            <div>
              <label htmlFor="mobile-number">Mobile Number</label>
              <input
                onChange={handleChange("mobileNumber")}
                type="tel"
                placeholder="Phone"
                id="mobile-number"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange("email")}
                type="text"
                placeholder="Email"
                id="email"
                required
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input
                onChange={handleChange("city")}
                type="tel"
                placeholder="City"
                id="city"
                required
              />
            </div>
          </div>
          <div css={styles.threColumnInput}>
            <div>
              <label htmlFor="country">Country</label>
              <input
                onChange={handleChange("country")}
                type="text"
                placeholder="Country"
                id="country"
                required
              />
            </div>
            <div>
              <label htmlFor="zipCode">Zip</label>
              <input
                onChange={handleChange("zip")}
                type="number"
                placeholder="ZIP"
                id="zipCode"
                required
              />
            </div>
            <div>
              <label htmlFor="province">Province</label>
              <input
                onChange={handleChange("province")}
                type="text"
                placeholder="Province"
                id="province"
                required
              />
            </div>
          </div>
          <div css={styles.address}>
            <label htmlFor="address">Address</label>
            <input
              onChange={handleChange("address")}
              type="text"
              placeholder="Address"
              id="address"
              required
            />
          </div>
        </div>

        <div>
          <div>
            <h2>Payment Method</h2>
          </div>
          <div css={styles.checkoutBox}>
            <p css={{ marginBottom: "10px" }} id="payMethod">
              Select your payment method
            </p>
            <div
              onChange={handleChange("paymentMethod")}
              role="radiogroup"
              aria-labelledby="payMethod"
              aria-required
              css={styles.radioGroup}
            >
              <input
                type="radio"
                name="paymentMethod"
                value="Paypal"
                id="paypal"
                required
              />
              <label htmlFor="paypal">Paypal</label>
              <input
                type="radio"
                name="paymentMethod"
                value="Credit Card"
                id="creditCard"
              />
              <label htmlFor="creditCard">Credit Card</label>
              <input
                type="radio"
                name="paymentMethod"
                value="Credit Card"
                id="bankTransfer"
              />
              <label htmlFor="bankTransfer">Bank Transfer</label>
              <input
                type="radio"
                name="paymentMethod"
                value="Credit Card"
                id="googlePay"
              />
              <label htmlFor="googlePay">Google Pay</label>
            </div>
          </div>
        </div>
      </div>
      <div css={{ display: "flex", flexDirection: "column", flex: "1" }}>
        <h2>Order summary</h2>
        <div css={styles.checkoutBox}>
          <h3>Total</h3>
        </div>

        <div>
          <ul css={styles.orderListItems}>
            {isEmptyCart ? (
              <div css={styles.cartEmpty}>
                <CartIcon />
                <p>CART IS EMPTY</p>
                <span>Add images to the cart.</span>
              </div>
            ) : (
              cartItems.map((item) => {
                return (
                  <li css={styles.orderItem(item.img)} key={item.id}>
                    {item.name}
                  </li>
                );
              })
            )}
          </ul>
        </div>
        <button
          css={styles.orderButton}
          type="submit"
          aria-label="Send button"
          disabled={isEmptyCart}
        >
          <span>COMPLETE ORDER</span>
        </button>
      </div>
    </form>
  );
};
