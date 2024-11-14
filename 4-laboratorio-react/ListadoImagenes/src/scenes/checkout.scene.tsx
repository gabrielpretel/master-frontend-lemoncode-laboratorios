import { PageTitle } from "@/core/components";
import { Checkout } from "@/pods/checkout";

export const CheckoutScene: React.FC = () => {
  return (
    <>
      <PageTitle>Checkout</PageTitle>
      <Checkout />
    </>
  );
};
