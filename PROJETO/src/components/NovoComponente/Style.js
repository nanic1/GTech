import styled from "styled-components";


const Estilo = styled.div`
   background-color: rgba(28, 39, 76, 1);
   padding-left: 100px;
   padding-right: 100px;
   padding-top: 75px;
   padding-bottom: 10px;
   color: white;
   text-align: center;
   min-height: 80vh;
   font-family: inter, sans-serif;

   img{
   text-align: center;
   height: 100px;
   
}
#nosso-time{
   font-size: 20px;
   color: black;
   margin-top: 50px;
   background-color: #F5AC00;
   border-radius: 20px;
   height: 35px;
   width: 140px;
   display: inline-flex;
   justify-content: center;
   align-items: center;
   box-sizing: border-box;
   scroll-behavior: smooth;
}
   #integrantes {
      margin-top: 300px;
      margin-bottom: 150px;
      display: flex;
      flex-direction: row;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: space-around;
      
      ul {
         margin: 0;
         padding: 0;
      }
      .foto {
         border-radius: 100px;
         height: 150px;
         width: 150px;
         box-shadow: 0 0 15px rgba(0, 0, 0, 1.5);


      }
      .textos{
         line-height: 1.5px;
      }
      #bloco {
         margin-top: 50px;
      display: flex;
      flex-direction: row;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: space-around; 
      }
   }
   @media screen and (max-width: 360px) { 
      body {
         overflow: auto !important;
      }
      #nosso-time {
      display: none;
      }
      #integrantes {
         margin-top: 150px;
      }
      .textos{
         font-size: 14px;
      }
   }
@media screen and (min-width: 834px) { 
      #nosso-time {
         height: 35px; 
         width: 130px; 
      }

      #nosso-time a {
         font-size: 16px; 
      }
   }

   @media screen and (min-width: 1300px) { 
      #nosso-time {
         height: 50px; 
         width: 150px; 
      }

      #nosso-time a {
         font-size: 20px; 
      }
   }
`;

export default Estilo