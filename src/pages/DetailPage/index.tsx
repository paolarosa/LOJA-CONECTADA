import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Car } from "../../types";
import pin from "../../assets/redPin.png";
import "./detailpage.tailwind.css";

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
    <div className="detail-wrapper">
      <div className="detail-container">
        <img src={pin} alt="Pin" className="pin-icon" />
        <div
          className="car-image-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={car.photos[currentImageIndex]?.photo || "placeholder.jpg"}
            alt={car.model.name || "Imagem do carro"}
            className="car-image"
          />
        </div>
        <h1 className="car-model">{car.model.name}</h1>
        <p className="car-info">
          <strong>Marca:</strong> {car.manufacturer.name}
        </p>
        <p className="car-info">
          <strong>Ano:</strong> {car.model_year}
        </p>
        <p className="car-info">
          <strong>Preço:</strong> {formatPrice(car.price)}
        </p>
        <p className="car-description">
          <strong>Descrição:</strong>{" "}
          {car.description || "Descrição não disponível"}
        </p>
      </div>
    </div>
  );
};

export default DetailPage;
