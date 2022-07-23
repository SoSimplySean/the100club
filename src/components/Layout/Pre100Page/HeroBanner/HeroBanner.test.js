import { render, screen } from "@testing-library/react";
import HeroBanner from "./HeroBanner";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

test("pre100 - button hover", async () => {
  render(<HeroBanner />);
  const button = screen.getByRole("link");
  await userEvent.click(button);
  //   This isn't an actual test. Just practicing.
  expect(button).toHaveTextContent("Become a partner society");
});
