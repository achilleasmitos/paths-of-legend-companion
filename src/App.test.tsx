import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders correctly", () => {
    const view = render(<App />);
    expect(view.container).toBeInTheDocument();
  });

  test("renders header and sub-header", () => {
    render(<App />);
    const header1 = screen.getAllByRole("heading")[0];
    const header2 = screen.getAllByRole("heading")[1];
    expect(header1).toBeInTheDocument();
    expect(header2).toBeInTheDocument();
  });
});
