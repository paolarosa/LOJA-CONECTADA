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
      <h1>{car.title}</h1>
      <img src={car.photos[0]?.url || 'placeholder.jpg'} alt={car.title} />
      <p>{car.description}</p>
      {/* Adicione mais detalhes conforme necessário */}
    </div>
  );
};

export default DetailPage;
