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
   #integrantes {
      margin-top: 50px;
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
         height: 200px;
         width: 200px;
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
   
`;

export default Estilo