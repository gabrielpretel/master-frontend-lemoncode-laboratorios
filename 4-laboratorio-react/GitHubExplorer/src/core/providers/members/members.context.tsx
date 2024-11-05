import React, {
  PropsWithChildren,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useDebounce } from "use-debounce";
import { Octokit } from "octokit";
import {
  initialMembersState,
  MemberEntity,
  MembersContextModel,
} from "./members.vm";
import { parseLinkHeader } from "./helpers";

const GITHUB_TOKEN = import.meta.env.VITE_GIT_TOKEN;
const ITEMS_PER_PAGE = 20;
const DEBOUNCE_DELAY = 1500;

const octokit = new Octokit({ auth: GITHUB_TOKEN ?? "" });

export const MembersContext =
  React.createContext<MembersContextModel>(initialMembersState);

export const MembersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [members, setMembers] = useState<MemberEntity[]>([]);
  const [filterOrgs, setFilterOrgs] = useState<string>("Lemoncode");
  const [org] = useDebounce(filterOrgs, DEBOUNCE_DELAY);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchMembers = useCallback(
    async (orgName: string, currentPage: number) => {
      try {
        const response = await octokit.request("GET /orgs/{org}/members", {
          org: orgName,
          page: currentPage,
          per_page: ITEMS_PER_PAGE,
        });

        const linkHeader = response.headers.link;
        const parsedLinks = parseLinkHeader(linkHeader);

        if (parsedLinks?.last) {
          const lastPageUrl = new URL(parsedLinks.last);
          const lastPage = parseInt(
            lastPageUrl.searchParams.get("page") || "1",
            10
          );
          setTotalPages(lastPage);
        }

        setMembers(response.data);
        setError(false);
      } catch (error) {
        setMembers([]);
        setError(true);
      }
    },
    []
  );

  useEffect(() => {
    fetchMembers(org, page);
  }, [org, page, fetchMembers]);

  const handlePaginationChange = (
    _e: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const searchInstantly = useCallback(
    (orgName: string) => {
      setFilterOrgs(orgName);
      setPage(1);
      fetchMembers(orgName, 1);
    },
    [fetchMembers]
  );

  const contextValue: MembersContextModel = {
    members,
    setFilterOrgs,
    error,
    org,
    searchInstantly,
    handlePaginationChange,
    actualPage: page,
    totalPages,
  };

  return (
    <MembersContext.Provider value={contextValue}>
      {children}
    </MembersContext.Provider>
  );
};
