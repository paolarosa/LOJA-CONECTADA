import styled from 'styled-components';

export const DetailWrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;

export const DetailContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  max-width: 600px;
  width: 100%;
  text-align: left; /* Alinha todo o conteúdo à esquerda */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Garante alinhamento à esquerda */
`;

export const CarImageContainer = styled.div`
  width: 100%;
  height: 300px; /* Define a altura fixa da imagem */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const CarModel = styled.h1`
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
`;

export const CarInfo = styled.p`
  margin: 10px 0;
  font-size: 16px;
  text-align: left;
  width: 100%;
`;

export const CarDescription = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: gray;
  text-align: left;
  width: 100%;
`;
