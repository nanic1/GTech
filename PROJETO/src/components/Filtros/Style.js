import styled from "styled-components";

const Bloco = styled.div`
    margin-left: 100px;
    margin-right: 100px;
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
        display:none;
    }
    #limpar-filtro {
        border: 0;
        background-color: white;
        font-family: 'Lora', serif;
        font-weight: bolder;
        font-size: 21px;
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
@media screen and (min-width: 1440px) {
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
`;


export default Bloco