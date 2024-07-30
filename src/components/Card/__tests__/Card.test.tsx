import { render, screen } from "@testing-library/react";
import Card from "../Card";
import { BrowserRouter } from "react-router-dom";

const mockProps = {
  id: 1,
  model: "Model X",
  make: "Tesla",
  year: 2021,
  price: 100000,
  images: ["https://via.placeholder.com/150"],
};

test("renders Card component with correct data", () => {
  render(
    <BrowserRouter>
      <Card {...mockProps} />
    </BrowserRouter>
  );

  expect(screen.getByText("Model X")).toBeInTheDocument();
  expect(screen.getByText("Tesla")).toBeInTheDocument();
  expect(screen.getByText("2021")).toBeInTheDocument();
  expect(screen.getByText("R$ 100.000,00")).toBeInTheDocument();
});
