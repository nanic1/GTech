import styled from "styled-components";

const Bloco = styled.div`
    @media (min-width: 1440px) {
        margin-left: 100px;
        margin-right: 100px;
    }
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-around;
    /* #teste {    
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 30px;
        gap: 5px;
    }  */
    #no-underline {
        text-decoration: none;
    }
    @media screen and (min-width: 360px) {
    margin: 0;
    #buscar{
        width:250px;
        }
    }
`;
const Bloco2 = styled.div`
    display: flex;
    justify-content: center;
    #teste {

        background-color: #f5f5f5;
        height: fit-content;
        display: flex;
        justify-content: center;
        box-shadow: 1px 1px 1px gray;
        padding: 10px 10px;
        border-radius: 10px;
    }
    #buscar{
        margin: auto;
        display:flex;
        align-items: center;
        border-radius: 10px;
        background-color: rgba(217, 217, 217, 1);
        color: black;
        width: 450px;
        padding-right: 10px;
        padding-left: 10px;
        padding-top: 10px;
        padding-bottom: 10px;

    }
    input {
        border: 0;
    }
    @media screen and (min-width: 360px) {
    padding: 0;
    #buscar{
        width:250px;
        }
    }
    @media screen and (min-width: 834px) {
    #buscar{
        width:450px;
        }
    }
    @media screen and (min-width: 1440px) {
    #buscar{
        width:650px;
        }
    }
`;

const Bloco3 = styled.div`
@media (min-width: 1000px) {
    margin-left: 100px;
    margin-right: 100px;
}
    padding-top: 20px;
    padding-bottom: 20px;
    color: black;

    .select {
        width: 250px;
    }
    .grid-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
@media screen and (min-width: 360px) {
    .grid-container{
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    #filtrageem{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #filtragem{
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;;
    }
    #limpar-filtro {
        border: 0;
        background-color: white;
        font-family: 'Lora', serif;
        font-weight: bolder;
        font-size: 17px;
    }
@media screen and (min-width: 834px) {
    .grid-container{
        display: grid;
        grid-template-columns:
        "auto"
        "auto"
        ;
        gap: 10px;
        padding: 10px;
    }
    #filtragem{
        display:block;
    }
    #limpar-filtro {
        border: 0;
        background-color: white;
        font-family: 'Lora', serif;
        font-weight: bolder;
        font-size: 21px;
    }
@media screen and (min-width: 1300px) {
    .grid-container{
        display: grid;
        grid-template-columns:auto auto auto auto auto;
        gap: 10px;
        padding: 10px;
    }
    #filtragem {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 10px;
        font-size: 14px;
    }
    #limpar-filtro {
        border: 0;
        background-color: white;
        font-family: 'Lora', serif;
        font-weight: bolder;
        font-size: 21px;
        cursor: pointer;
    }
}
}}
`
const Container3 = styled.div `
.paginacao {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 30px;
  margin-bottom: 30px;
}

.paginacao button {
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  background-color: white;
  color: black;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.paginacao button.ativo {
  background-color: #FFA500; /* Cor amarela para a página ativa */
  color: white;
}

`

export {Bloco, Bloco2, Bloco3, Container3}