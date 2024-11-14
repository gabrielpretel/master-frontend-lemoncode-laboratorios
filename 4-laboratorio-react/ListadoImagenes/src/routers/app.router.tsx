import { AppProviders } from "@/core/providers";
import { AppLayout } from "@/layouts";
import { ChampionsScene, CheckoutScene, RegionsScene } from "@/scenes";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProviders>
        <AppLayout>
          <Routes>
            <Route path={routes.champions} element={<ChampionsScene />}></Route>
            <Route path={routes.regions} element={<RegionsScene />}></Route>
            <Route path={routes.checkout} element={<CheckoutScene />}></Route>
            <Route path="*" element={<Navigate to={"/champions"} />}></Route>
          </Routes>
        </AppLayout>
      </AppProviders>
    </BrowserRouter>
  );
};
