import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Body from "./Body";

test("on initial render, there is a banner", async () => {
  render(<Body user={{ membershipLevel: "member" }} />);
  expect(await screen.findByTestId("banner")).toBeInTheDocument();
  //   screen.getByRole("");
  //   await screen.findByTestId("banner");
});
