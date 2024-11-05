import React from "react";

export interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
  bio: string;
}

export interface MembersContextModel {
  members: MemberEntity[];
  setFilterOrgs: React.Dispatch<React.SetStateAction<string>>;
  error: boolean;
  org: string;
  searchInstantly: (orgName: string) => void;
  handlePaginationChange: (e: React.ChangeEvent<unknown>, page: number) => void;
  actualPage: number;
  totalPages: number;
}

export const initialMembersState: MembersContextModel = {
  members: [],
  setFilterOrgs: () => {},
  error: false,
  org: "Lemoncode",
  searchInstantly: () => {},
  handlePaginationChange: () => {},
  actualPage: 1,
  totalPages: 1,
};
