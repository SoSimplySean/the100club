import { render, screen } from "@testing-library/react";
import HeroBanner from "./HeroBanner";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

test("pre100 - button hover", async () => {
  render(<HeroBanner />);
  await userEvent.click(screen.getByRole("link"));
});
