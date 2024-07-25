import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from "../../services/api";
import { Car } from '../../types';


const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);

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
  }, [id]);

  if (!car) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{car.model}</h1>
      <h3>{car.price}</h3>
      <p>{car.model_year}</p>
      {car.fuel && <p>{car.fuel}</p>}
      <img src={car.photos[0]?.photo || 'placeholder.jpg'} alt={car.model} />
    <p>{car.description}</p>
    </div>
  );
};

export default DetailPage;
