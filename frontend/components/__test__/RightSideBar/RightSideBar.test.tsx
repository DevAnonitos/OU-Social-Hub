import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import RightSideBar from "@/components/RightSideBar/RightSideBar";

describe("RightSideBar", () => {
  it("Should render import RightSideBar", () => {
    expect(RightSideBar).toBeDefined()
    expect(RightSideBar).toMatchSnapshot()
  })
});
