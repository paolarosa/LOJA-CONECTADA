import styled from "styled-components";

export const ModalContainer = styled.div`
   width: 370px;
  height: 340px;
  background-color: white;
  z-index: 10;
  position: absolute;
  top: 150px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #f8f9fa;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  div button {
    margin-right: 20px;
    color: white;
  }
  h2,
  label {
    margin-left: 15px;
    font-size: 16px;
  }
  input,
  select {
    width: 90%;
    height: 30px;
    margin-left: 15px;
    background: #343b41;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    color: white;
    padding: 0 15px;
  }
  .modalButtons{
    display:flex;
   
  }
  button{
    width: 200px;
    height: 30px;
    border-radius: 4px;
    margin-left: 15px;
    background: var(--color-gray-600)
  }

`;

export const ModalContent = styled.div`
  background-color: var(--color-gray-400);
  padding: 20px;
  width: 500px;
`;