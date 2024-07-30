import { render, screen } from "@testing-library/react";

test("simple test", () => {
  render(<div>Hello, World!</div>);
  expect(screen.getByText("Hello, World!")).toBeInTheDocument();
});
