import React, { useContext } from "react";
import styles from "./checkout.component.styles";
import { CartContext } from "@/core/providers";
import { CartItem } from "@/layouts/components/cart-sidebar-component/cart-item.component";

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

export const Checkout: React.FC = () => {
  const { cartItems } = useContext(CartContext);
  const [formData, setFormData] = React.useState<FormData>(emptyFormData);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange =
    (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  return (
    <div>
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
              <h2 id="payMethod">Payment Method</h2>
            </div>
            <div css={styles.checkoutBox}>
              <div
                onChange={handleChange("paymentMethod")}
                role="radiogroup"
                aria-labelledby="payMethod"
                aria-required
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Paypal"
                  id="paypal"
                />
                <label htmlFor="paypal">Paypal</label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit Card"
                  id="creditCard"
                />
                <label htmlFor="creditCard">Credit Card</label>
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
              {cartItems.map((item) => {
                return <li css={styles.orderItem(item.img)}>{item.name}</li>;
              })}
            </ul>
          </div>
          <button
            css={styles.orderButton}
            type="submit"
            aria-label="Send button"
          >
            <span>COMPLETE ORDER</span>
          </button>
        </div>
      </form>
    </div>
  );
};
