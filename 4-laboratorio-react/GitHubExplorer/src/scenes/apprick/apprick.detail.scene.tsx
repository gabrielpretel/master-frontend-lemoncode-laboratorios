import { DetailRickContainer } from "@/pods/detail-rick";
import { ListRickContainer } from "@/pods/list-rick";
import React from "react";
import { useParams } from "react-router-dom";

export const AppRickDetailScene: React.FC = () => {
  return (
    <>
      <DetailRickContainer />
      <ListRickContainer />
    </>
  );
};
