import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import SearchBar from "@/components/SearchBar/SearchBar";

describe("LeftSideBar", () => {
  it("Should render import LeftSideBar", () => {
    expect(SearchBar).toBeDefined()
    expect(SearchBar).toMatchSnapshot()
  })
});