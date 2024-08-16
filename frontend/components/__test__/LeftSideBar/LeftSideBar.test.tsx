import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";

describe("LeftSideBar", () => {
  it("Should render import LeftSideBar", () => {
    expect(LeftSideBar).toBeDefined()
    expect(LeftSideBar).toMatchSnapshot()
  })
});
