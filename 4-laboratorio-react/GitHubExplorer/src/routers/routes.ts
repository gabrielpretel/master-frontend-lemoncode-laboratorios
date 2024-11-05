interface SwitchRoutes {
  root: string;
  list: string;
  fullList: string;
  detail: string;
  listRick: string;
  fullListRick: string;
  detailRick: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "list",
  fullList: "/app/list",
  detail: "detail/:id",
  listRick: "list",
  fullListRick: "/apprick/list",
  detailRick: "detail-rick/:id",
};
