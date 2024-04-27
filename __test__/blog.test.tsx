import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../src/app/(regular)/blog/page";
import { describe } from "node:test";

describe("Blog Page", () => {
  it("should render the page", async () => {
    const jsx = await Page();
    render(jsx);
    expect(
      screen.getByRole("heading", { level: 2, name: "Latest Post" })
    ).toBeDefined();
    expect(
      screen.getByRole("heading", { level: 2, name: "Older Post" })
    ).toBeDefined();
  });
});
