import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Body from "./Body";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

test("Directory - checking for existence of banner when not logged in", async () => {
  render(<Body user={{ membershipLevel: "waitlist" }} />, {
    wrapper: MemoryRouter,
  });
  expect(
    await screen.findByText(
      "Create an account and apply to become a member of The 100 Club for access"
    )
  ).toBeInTheDocument();
});

test("Directory - checking for search bar feature", async () => {
  render(<Body user={{ membershipLevel: "member" }} />, {
    wrapper: MemoryRouter,
  });
  userEvent.type(await screen.findByLabelText("search directory"), "Sean Tan");
  expect(await screen.findByText("Sean Tan")).toBeInTheDocument();
  expect(await screen.findByText("Shawn Kok")).not.toBeInTheDocument();
});
