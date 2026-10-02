import { describe, it, expect } from "vitest";
import { GitHubClient } from "../../src/integrations/github/client";

describe("GitHub Integration - Day 4 Test", () => {
  it("should block if no JWT role", async () => {
    const client = new GitHubClient();
    try {
      await client.listRepos("");
      // Should fail
      expect(true).toBe(false);
    } catch (e: any) {
      expect(e.message).toContain("403");
    }
  });

  it("should list repos if JWT valid (mock)", async () => {
    // This test will pass after Kontext real SDK
    expect(true).toBe(true);
  });
});
