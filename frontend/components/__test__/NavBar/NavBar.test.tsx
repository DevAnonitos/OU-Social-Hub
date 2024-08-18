import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import NavBar from "@/components/NavBar/NavBar";

describe("LeftSideBar", () => {
  it("Should render import LeftSideBar", () => {
    expect(NavBar).toBeDefined()
    expect(NavBar).toMatchSnapshot()
  })
});