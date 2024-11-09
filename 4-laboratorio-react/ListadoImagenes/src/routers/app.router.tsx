import { CartProvider } from "@/core/providers/cart.provider";
import { AppLayout } from "@/layouts";
import { HomeScene } from "@/scenes";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppLayout>
          <Routes>
            <Route path="/" element={<HomeScene />}></Route>
          </Routes>
        </AppLayout>
      </CartProvider>
    </BrowserRouter>
  );
};
