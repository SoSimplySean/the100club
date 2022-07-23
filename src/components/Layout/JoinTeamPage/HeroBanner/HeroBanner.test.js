import { render, screen } from "@testing-library/react";
import HeroBanner from "./HeroBanner";
import "@testing-library/jest-dom/extend-expect";

test("join team page - hero banner with correct text", () => {
  render(<HeroBanner />);
  expect(screen.getByTestId("header")).toHaveTextContent("We want");
});
