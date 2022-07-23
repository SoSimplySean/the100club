import { render, screen } from "@testing-library/react";
import ApplicationProcess from "./ApplicationProcess";
import "@testing-library/jest-dom/extend-expect";

test("edit profile - waitlist member shows up", async () => {
  render(<ApplicationProcess membershipLevel="member" />);
  expect(
    await screen.findByText("You are already a member")
  ).toBeInTheDocument();
});
