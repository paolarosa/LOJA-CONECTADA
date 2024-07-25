import { CardStyled } from "./styles";
import { useContext } from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}
const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <CardStyled>
    <div>
      <img src={imageUrl} alt={title} />
    </div>
    <h3>{title}</h3>
    <h4>Default Category</h4>
    <p>{description}</p>
    <button onClick={() => console.log("Add to cart")}>Adicionar</button>
  </CardStyled>
);

export default Card;
