import React from "react";
import { switchRoutes } from "./routes";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  DetailScene,
  ListScene,
  AppRickDetailScene,
  AppRickListScene,
} from "@/scenes";
import { AppLayout } from "@/layouts";
import { CharactersProvider, MembersProvider } from "@/core/providers";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <MembersProvider>
          <Routes>
            <Route path="/app/*" element={<MainAppRouter />} />
            <Route path="/apprick/*" element={<AppRickRouter />} />
            <Route path="*" element={<Navigate to={switchRoutes.fullList} />} />
          </Routes>
        </MembersProvider>
      </AppLayout>
    </BrowserRouter>
  );
};

const MainAppRouter: React.FC = () => {
  return (
    <MembersProvider>
      <Routes>
        <Route path={switchRoutes.list} element={<ListScene />} />
        <Route path={switchRoutes.detail} element={<DetailScene />} />
        <Route path="*" element={<Navigate to={switchRoutes.list} />} />
      </Routes>
    </MembersProvider>
  );
};

const AppRickRouter: React.FC = () => {
  return (
    <CharactersProvider>
      <Routes>
        <Route path={switchRoutes.listRick} element={<AppRickListScene />} />
        <Route
          path={switchRoutes.detailRick}
          element={<AppRickDetailScene />}
        />
        <Route path="*" element={<Navigate to={switchRoutes.listRick} />} />
      </Routes>
    </CharactersProvider>
  );
};
