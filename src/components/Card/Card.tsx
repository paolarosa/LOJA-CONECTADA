import { CardStyled } from "./styles";
import { CardProp } from "../../types";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";



const Card: React.FC<CardProp> = ({ id, title, description, images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    // Troca de imagem ao passar o mouse
    if (images.length > 1) {
      // Alterna entre as imagens disponíveis
      setCurrentImage(images[1]); // Exemplo: alterna para a segunda imagem
    }
  };

  const handleMouseLeave = () => {
    setCurrentImage(images[0]);
  };

  const handleClick = () => {
    navigate(`/car/${id}`);
  };

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <img src={currentImage} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};


export default Card;
