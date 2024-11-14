import styles from "./checkout.component.styles";

export const Checkout: React.FC = () => {
  return (
    <div>
      <form css={styles.checkoutContainer}>
        <div>
          <h2>Delivery information</h2>
          <div css={styles.checkoutBox}>
            <div css={styles.twoColumInput}>
              <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="">Mobile Number</label>
                <input type="tel" placeholder="Surname" />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Email" />
              </div>
              <div>
                <label htmlFor="">City</label>
                <input type="tel" placeholder="City" />
              </div>
            </div>
            <div css={styles.threColumnInput}>
              <div>
                <label htmlFor="">Country</label>
                <input type="text" placeholder="Country" />
              </div>
              <div>
                <label htmlFor="">Zip</label>
                <input type="number" placeholder="ZIP" />
              </div>
              <div>
                <label htmlFor="">Province</label>
                <input type="text" placeholder="Province" />
              </div>
            </div>
            <div css={styles.address}>
              <label htmlFor="">Address</label>
              <input type="text" placeholder="Address" />
            </div>
          </div>
          <div>
            <div>
              <h2>Schedule Delivery</h2>
            </div>
            <div css={styles.checkoutBox}></div>
          </div>
          <div>
            <div>
              <h2>Payment Method</h2>
            </div>
            <div css={styles.checkoutBox}></div>
          </div>
        </div>
        <div css={{ display: "flex", flexDirection: "column", flex: "1" }}>
          <h2>Order summary</h2>
          <div css={styles.checkoutBox}></div>
        </div>
      </form>
    </div>
  );
};
