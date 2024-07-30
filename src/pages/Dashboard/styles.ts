// DashboardContainer.tsx
import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  padding: 20px;
  position: relative;

  .filters {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 20px;

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

  .contactTitle {
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    margin-top: 20px;
    color: #333;
    font-weight: 500;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

    img {
      max-height: 100px;
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
      }
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
  h3{
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
      margin-top: 30px;
    }

    ul {
      justify-content: center;
    }

    li:hover {
      background-color: #ffdeeb;
    }
  }
`;
