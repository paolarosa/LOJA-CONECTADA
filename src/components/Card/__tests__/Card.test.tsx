import { render, screen } from "@testing-library/react";
import Card from "../Card";
import { MemoryRouter } from "react-router-dom";

const mockProps = {
  id: 1,
  model: "Model X",
  make: "Brand X",
  year: 2021,
  price: 100000,
  images: ['"https://via.placeholder.com/150"'],
};

describe("Card Component", () => {
  test("renders Card component with correct data", () => {
    render(<Card {...mockProps} />);
    screen.debug();
    expect(screen.getByText(/Model S/i)).toBeInTheDocument();
    expect(screen.getByText(/Brand/i)).toBeInTheDocument();
    expect(screen.getByText(/2021/i)).toBeInTheDocument();
    expect(screen.getByText(/\$100,999/i)).toBeInTheDocument();
  });
});
