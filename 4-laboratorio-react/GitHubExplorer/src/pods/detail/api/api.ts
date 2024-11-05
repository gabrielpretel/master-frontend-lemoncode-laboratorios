import { MemberDetail } from "./api.model";

const authToken = import.meta.env.VITE_GIT_TOKEN;

export const getMemberDetail = (id: string): Promise<MemberDetail> =>
  fetch(`https://api.github.com/users/${id}`, {
    headers: {
      Authorization: authToken ?? "",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  }).then((response) => response.json());
