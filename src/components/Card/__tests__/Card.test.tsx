import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "../Card";
import { CardProp } from "../../../types";

const mockCardProps: CardProp = {
  id: 1,
  model: "Model S",
  make: "Tesla",
  year: 2020,
  price: 79999,
  images: ["image1.jpg", "image2.jpg", "image3.jpg"],
};

describe("Card Component", () => {
  it("renders correctly with given props", () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <Card {...mockCardProps} />
      </BrowserRouter>
    );

    expect(getByText("Model S")).toBeInTheDocument();
    expect(getByText("Tesla")).toBeInTheDocument();
    expect(getByText("2020")).toBeInTheDocument();
    expect(getByText("R$ 79.999,00")).toBeInTheDocument();
    expect(getByAltText("Model S")).toBeInTheDocument();
  });

  it("displays the correct image with alt text", () => {
    render(
      <BrowserRouter>
        <Card {...mockCardProps} />
      </BrowserRouter>
    );

    const image = screen.getByAltText("Model S") as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toContain("image1.jpg");
  });
});
