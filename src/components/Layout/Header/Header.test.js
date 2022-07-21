import { render, screen } from "@testing-library/react";
import Header from "./Header";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

test("header - account menu opening up", async () => {
  render(<Header />);
  screen.getByRole("");
  //   const button = screen.getByRole("button", { name: /we help members/i });
  //   await userEvent.click(button);
  //   expect(
  //     screen.getByText(
  //       "We match like-minded aspiring entrepreneurs within the society, into groups of 4, using our proven system in The 100 Club. These groups will meet biweekly, in order for them to support each other in staying accountable, sharing advice, and networking to build their business."
  //     )
  //   ).toBeInTheDocument();
});
