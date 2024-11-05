import * as am from "./api/api.model";
import * as vm from "./detail.vm";

export const mapDetailToVM = (data: am.MemberDetail): vm.MemberDetail => ({
  login: data.login,
  id: data.id,
  name: data.name,
  company: data.company,
  bio: data.bio,
  avatarUrl: data.avatar_url,
  location: data.location,
  htmlUrl: data.html_url,
  publicRepos: data.public_repos,
  followers: data.followers,
  following: data.following,
  publicGists: data.public_gists,
});
