import { CardStyled } from "./styles";
import { CardProp } from "../../types";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Card: React.FC<CardProp> = ({ id, model, make, year, price, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<ReturnType<
    typeof setInterval
  > | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      // Limpa o intervalo ao desmontar o componente para evitar erros
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const handleMouseEnter = () => {
    // Inicia um intervalo para trocar de imagem a cada 1000ms (1 segundo)
    const id = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);
    setIntervalId(id);
  };

  const handleMouseLeave = () => {
    // Limpa o intervalo para parar a troca de imagens
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  };

  const handleClick = () => {
    navigate(`/car/${id}`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <CardStyled>
      <div
        className="img-content"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img src={images[currentImageIndex]} alt={model} />
      </div>
      <div className="card-content">
        <h3>{model}</h3>
        <h3>{make}</h3>
        <h3>{year}</h3>
        <p>{formatPrice(price)}</p>
      </div>
    </CardStyled>
  );
};

export default Card;
