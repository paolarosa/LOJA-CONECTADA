/* DashboardContainer.tsx */
import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  background-color: black;

  .filters {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    select, input {
      padding: 10px;
      border: 2px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }

    input {
      width: 100px;
    }
  }
.header{
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  padding-top: 10px;
}
  .contactTitle {
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    color: #333;
    font-weight: 500;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    width: 1310px;
    height: 100%;

    .logo{
      max-height: 60px;
      object-fit: cover;
      margin-right: 20px;
    }

    h2 {
      margin: 0;
      font-size: 24px;
    }

    div {
      p {
        margin: 5px 0;
        font-size: 16px;
        display: flex;
        align-items: center; /* Alinha verticalmente os itens */
      }
    }
    .number{
      display:flex;
      align-items: center;
      font-size: 16px;
    }
  .number img{
    width:20px;
    height:20px;
    margin-right:8px
  }
  }

  .title {
    width: 100%;
    max-width: 300px;
    padding: 10px;
    height: 40px;
    background: #fff;
    color: #333;
    font-weight: 500;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    margin: 30px 0;
  }

  h2 {
    font-size: 22px;
    color: #333;
    margin: 30px 0 20px 0;
  }
  
  h3 {
    width: 100%;
    box-shadow: 0px 2px 0px 0px black;
  }
  
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 15px 0;
    list-style: none;
    width: 100%;
  }

  @media (min-width: 700px) {
    .divMain {
      width: 100%;
      max-width: 1440px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    ul {
      justify-content: center;
    }
  }
`;
