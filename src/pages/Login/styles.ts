import styled from "styled-components";
import { Link } from "react-router-dom";
import backgroundColor from "../../assets/a2.jpg"

export const FormLogin = styled.div`
  width: 100vw;
  height: 800px;
  background: url(${backgroundColor}) no-repeat center center fixed;
  background-size: cover;
  font-family: "Inter";

  .divContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    color: black;
    font-size: 20px;
    text-align: center;
    margin: 30px 0 10px 0;
  }

  form {
    width: 95%;
    height: 420px;
    background: white;
    -webkit-box-shadow: 3px 2px 0px 5px rgba(0,0,0,1);
-moz-box-shadow: 3px 2px 0px 5px rgba(0,0,0,1);
box-shadow: 3px 2px 0px 5px rgba(0,0,0,1);
border-radius: 4px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
  }
  label {
    color: black;
    font-size: 16px;
    margin: 30px 0 8px 0;
  }
  input {
    background:white;
    border: 1px solid black;
    border-radius: 6px;
    width: 100%;
    height: 45px;
    padding-left: 10px;
    font-size: 12px;
    color: gray;
    font-family: "Inter";
  }
  input:hover {
    border: 2px solid white;
  }
  .buttonSubmit {
    border-radius: 6px;
    width: 100%;
    height: 45px;
    padding-left: 10px;
    font-size: 16px;
    background-color: #01C8E7;
    color: white;
    border: none;
    margin: 25px 0 20px 0;
  }

  h4 {
    color: black;
    font-size: 12px;
    text-align: center;
  }

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .divContainer {
      width: 400px;
    }
    form {
      height: 470px;
      padding: 0 15px;
    }
    input {
      height: 45px;
    }
    .buttonRegister {
      height: 48px;
    }
    .buttonSubmit {
      height: 48px;
    }
    p {
      padding-top: 8px;
      font-size: 10px;
      color: white;
    }
  }
`;

export const LinkRegister = styled(Link)`
  border-radius: 6px;
  width: 100%;
  height: 45px;
  padding-left: 10px;
  background-color: #FE64E0;
  margin-top: 15px;
  color: white;
  text-align: center;
  padding-top: 14px;
  font-size: 16px;
  text-decoration: none;
`;
