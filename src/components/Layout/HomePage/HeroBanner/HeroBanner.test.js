import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

test("HeroBanner - confirm button href", async () => {
  render(<HeroBanner />, {
    wrapper: MemoryRouter,
  });

  expect(screen.getByRole("link", { name: "Join Waitlist" })).toHaveAttribute(
    "href",
    "/join"
  );
});
