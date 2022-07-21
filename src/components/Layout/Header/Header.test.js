import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

test("Header - opening up mini menu", async () => {
  render(<Header />, { wrapper: MemoryRouter });
  //   screen.getByRole("");
  const button = screen.getByRole("button", { name: "Open settings" });
  await userEvent.click(button);
  expect(screen.getByText("Sign Up")).toBeInTheDocument();
});
