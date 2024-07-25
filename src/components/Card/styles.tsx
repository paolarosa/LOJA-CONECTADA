import styled from "styled-components";

export const CardStyled = styled.li`
  height: 310px;
  width: 300px;
  min-width: 240px;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 0 0 15px;

  div {
    height: 45%;
    width: 100%;
    background-color: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 160px;
    height: 160px;
  }
  h3 {
    font-size: 18px;
    margin: 15px;
  }
  h4 {
    font-size: 12px;
    color: #828282;
    font-weight: 400;
    margin: 0 15px;
  }
  p {
    font-size: 14px;
    color: #27ae60;
    font-weight: 600;
    margin: 15px;
  }
  button {
    background: #27ae60;
    border: 2px solid #27ae60;
    border-radius: 8px;
    font-size: 12px;
    color: white;
    height: 35px;
    width: 100px;
    margin-left: 15px;
  }

  @media (min-width: 700px) {
    width: 100%;
    max-width: 1440px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    height: 100%;
    margin-top: 20px;
    justify-content: center;
  }
`;
