import { render, screen } from "@testing-library/react";
import EditProfile from "./EditProfile";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

test("edit profile - full name text field input working", () => {
  render(<EditProfile membershipLevel="member" />);
  userEvent.type(screen.getByLabelText("fullName"), "test");
  // expect(screen.getByLabelText("fullName")).toHaveValue("test");
});

test("edit profile - waitlist member shows up", async () => {
  render(<EditProfile membershipLevel="waitlist" />);
  expect(await screen.findByText("Waitlist Member")).toBeInTheDocument();
});
