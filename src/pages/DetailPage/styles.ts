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
  box-shadow: 
    5px 3px 10px white, /* Sombra da primeira página */
    5px 2px 0px 1px black, /* Sombra da borda da primeira página */
    8px 5px 0px white, /* Sombra da segunda página */
    10px 10px 20px 0px black, /* Sombra da borda da segunda página */
    12px 15px 0px white, /* Sombra da terceira página */
    15px 20px 0px black, /* Sombra da borda da terceira página */
    17px 22px 0px white;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  text-align: left; /* Alinha todo o conteúdo à esquerda */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Garante alinhamento à esquerda */
  position: relative;
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
  margin: 20px 0;
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const PinIcon = styled.img`
  position: absolute;
  top: 5px;
  left: 25px;
  width: 60px; 
  height: auto;
  z-index: 10; 
  transform: rotate(340deg);
`;

export const CarModel = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
`;

export const CarInfo = styled.p`
  margin: 5px 0;
  font-size: 16px;
  text-align: left;
  width: 100%;
  width: 100%;
  box-shadow: 0px 2px 0px 0px black;
`;

export const CarDescription = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: gray;
  text-align: left;
  width: 100%;
`;
