import { CartProvider } from "./cart.provider";
import { ChampionsProvider } from "./champions.provider";
import { RegionsProvider } from "./regions.provider";

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <CartProvider>
    <ChampionsProvider>
      <RegionsProvider>{children}</RegionsProvider>
    </ChampionsProvider>
  </CartProvider>
);
