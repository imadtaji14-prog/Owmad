import { Octokit } from "@octokit/rest";
import { getGitHubToken } from "./auth";
import { kontextAuthorize } from "../../services/kontext.service";

export class GitHubClient {
  private octokit: Octokit;

  constructor() {
    this.octokit = new Octokit({ auth: getGitHubToken() });
  }

  async listRepos(userJwt: string) {
    // 1. Check via Kontext - CRITICAL SECURITY
    const check = await kontextAuthorize(userJwt, "execute:api");
    if (!check.allowed) {
      throw new Error(`403 Forbidden - ${check.reason}`);
    }

    // 2. If allowed, call GitHub
    try {
      const { data } = await this.octokit.repos.listForAuthenticatedUser({
        per_page: 10,
        sort: "updated",
      });
      return data.map(repo => ({ id: repo.id, name: repo.name, url: repo.html_url }));
    } catch (err: any) {
      if (err.status === 401) throw new Error("401 GitHub token expired");
      if (err.status === 429) throw new Error("429 Rate limit - retry later");
      throw err;
    }
  }
        }
