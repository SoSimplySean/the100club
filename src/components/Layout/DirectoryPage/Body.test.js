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
  //   const button = screen.getByRole("button", { name: "Open settings" });
  //   await userEvent.click(button);
  //   expect(screen.getByText("Sign Up")).toBeInTheDocument();
});
