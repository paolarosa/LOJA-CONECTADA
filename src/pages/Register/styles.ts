import styled from "styled-components";
import backgroundColor from "../../assets/a31.jpg"
import { Link } from "react-router-dom";

export const FormRegister = styled.div`
  width: 100vw;
  height: 800px;
  background: url(${backgroundColor}) no-repeat center center fixed;
  background-size: cover;
  font-size: 10px;

  .divContainer {
    width: 100%;
    height: 560px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imgLogo {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 10px 0;
  }

  form {
    width: 95%;
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
  h2 {
    color: black;
    font-size: 20px;
    text-align: center;
    margin: 30px 0 0 0;
  }
  h3 {
    color: black;
    font-size: 12px;
    text-align: center;
  }
  label {
    color: black;
    font-size: 16px;
    margin: 20px 0 8px 0;
  }
  span{
    margin-top: 5px;
    color: red
  }
  input,
  textarea,
  select {
    border: 1px solid black;
    background: white;
    border-radius: 6px;
    width: 100%;
    height: 38px;
    padding-left: 10px;
    font-size: 12px;
    color: var(--color-gray-600);
    font-family: "Inter";
  }
  textarea {
    padding-top: 10px;
  }
  .buttonSubmit {
    width: 100%;
    height: 45px;
    background-color: #FE64E0;
    border: none;
    border-radius: 4px;
    color: white;
    margin-top: 20px;
    font-size: 16px;
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
      height: 720px;
      padding: 0 15px;
    }


  }
`;


export const LinkLogin = styled(Link)`
  border-radius: 6px;
  width: 100%;
  height: 45px;
  padding-left: 10px;
  background-color: #01C8E7;
  margin-top: 15px;
  margin-bottom: 20px;
  color: white;
  text-align: center;
  padding-top: 14px;
  font-size: 16px;
  text-decoration: none;
`;