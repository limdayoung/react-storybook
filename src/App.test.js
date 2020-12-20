import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 'Learn storybook tutorial' link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn storybook tutorial/i);
  expect(linkElement).toBeInTheDocument();
});
