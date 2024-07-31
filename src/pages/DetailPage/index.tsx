import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Car } from "../../types";
import pin from "../../assets/redPin.png";
import {
  CarDescription,
  CarImageContainer,
  CarImage,
  CarInfo,
  CarModel,
  DetailContainer,
  DetailWrapper,
  PinIcon, // Importando o novo componente
} from "./styles";

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState<ReturnType<
    typeof setInterval
  > | null>(null);

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await api.get(`/inventory/${id}`);
        console.log("Dados do carro:", response.data);
        setCar(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do carro:", error);
      }
    };

    fetchCarDetails();

    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [id, intervalId]);

  const handleMouseEnter = () => {
    const id = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        car && prevIndex === car.photos.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);
    setIntervalId(id);
  };

  const handleMouseLeave = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  if (!car) return <p>Carregando...</p>;

  return (
    <DetailWrapper>
      <DetailContainer>
        <PinIcon src={pin} alt="Pin" />
        <CarImageContainer
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <CarImage
            src={car.photos[currentImageIndex]?.photo || "placeholder.jpg"}
            alt={car.model.name || "Imagem do carro"}
          />
        </CarImageContainer>
        <CarModel>{car.model.name}</CarModel>
        <CarInfo>
          <strong>Marca:</strong> {car.manufacturer.name}
        </CarInfo>
        <CarInfo>
          <strong>Ano:</strong> {car.model_year}
        </CarInfo>
        <CarInfo>
          <strong>Preço:</strong> {formatPrice(car.price)}
        </CarInfo>
        <CarDescription>
          <strong>Descrição:</strong>{" "}
          {car.description || "Descrição não disponível"}
        </CarDescription>
      </DetailContainer>
    </DetailWrapper>
  );
};

export default DetailPage;
