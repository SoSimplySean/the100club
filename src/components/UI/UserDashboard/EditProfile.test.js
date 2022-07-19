import { render, screen } from "@testing-library/react";
import EditProfile from "./EditProfile";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

test("edit profile - full name text field input working", () => {
  render(<EditProfile membershipLevel="member" />);
  userEvent.type(screen.getByLabelText("fullName"), "test");
  expect(screen.getByLabelText("fullName"));
});
