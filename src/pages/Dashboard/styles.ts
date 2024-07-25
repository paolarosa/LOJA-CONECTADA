import styled from "styled-components";
import backgroundColor from "../../assets/new.jpg"

export const DashboardContainer = styled.div`
  width: 100vw;
  height: 100vh;
   /*background: url(${backgroundColor}) no-repeat center center fixed;*/
  background-size: cover;
  padding: 10px 20px 0 20px;
  position: relative;

  .nav {
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
  }

  .buttonOut {
    width: 50px;
    height: 32px;
    background: var(--color-gray-800);
    border-radius: 4px;
    margin-top: 15px;
    color: white;
    font-size: 14px;
    height: 40px;
  }
  .buttonAdd {
    background: #FE64E0;
    border-radius: 4px;
    border: none;
    margin-top: 15px;
    margin-right: 10px;
    color: white;
    font-size: 14px;
    padding: 8px;
    height: 40px;
  }
  .buttonDelete{
    background: #01C8E7;
    border-radius: 6px;
    border: none;
    margin-top: 15px;
    color: white;
    font-size: 14px;
    padding: 8px;
    height: 40px;
  }
  .divMain{
    display: flex;
    flex-direction: column;
  }
  ul {
  background: none;
    border-radius: 4px;
    display: flex;
   flex-direction: column;
    gap: 20px;
    padding: 15px 5px;
  }

  .contactTitle {
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    margin-top: 10px;
    color: black;
    weight: 500;
    background-color: white;
    padding: 0 30px;
    gap: 10px;
    -webkit-box-shadow: 4px 4px 0px 6px rgba(0,0,0,1);
-moz-box-shadow: 4px 4px 0px 6px rgba(0,0,0,1);
box-shadow: 4px 4px 0px 6px rgba(0,0,0,1);
  }

  .title{
    width: 150px;
    padding: 10px 10px;
    height: 40px;
    background: white;
    -webkit-box-shadow: 3px 2px 0px 5px rgba(0,0,0,1);
-moz-box-shadow: 3px 2px 0px 5px rgba(0,0,0,1);
box-shadow: 3px 2px 0px 5px rgba(0,0,0,1);
margin: 30px 0 30px
  }

  h2 {
    font-size: 18px;
    color: black;
    margin: 30px 0 20px 0;
  }
  p{font-size: 18px}
  li {
    color: black;
    background: var(--color-gray-100);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    font-size: 15px;
    padding: 0 5px;
    margin: 0 px;
    -webkit-box-shadow: 3px 2px 0px 5px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 2px 0px 5px rgba(0,0,0,0.75);
box-shadow: 3px 2px 0px 5px rgba(0,0,0,0.75);
  }

  h3{
    width: 100%;
    box-shadow: 0px 2px 0px 0px black;

  }
  .icon{
    width:20px;
    height:20px;
    margin-right: 15px;
  }

  li div{
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top:10px;
  }
  .delete{
    border:none;
    background: none;
    display:flex;
    font-size: 15px;
 

  }

  .delete h3{
    box-shadow: none
    
  }
  .divStatusTrash {
    display: flex;
    gap: 30px;
    align-items: center;
    width: 40px
  }

  .buttonTrash{
    weight:100px
  }
  

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    align-items: center;

    
    .divMain {
      width: 100%;
      max-width: 1440px;
      margin-top: 30px;
    }

    .TitleTech {
      width: 100%;
      max-width: 1440px;
    }
    ul {

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
      padding: 15px 5px;
    }

    li {
      width: 300px;
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 10px;
    }
    li:hover {
      background-color: #ffdeeb;
    }

    .trash {
      color: white;
      weight: 25px;
      height: 25px;
      cursor: pointer;
      margin: 0 15px 10px 0;
    }
}
  `