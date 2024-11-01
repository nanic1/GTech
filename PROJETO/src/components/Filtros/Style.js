import styled from "styled-components";

const Bloco = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    padding-top: 50px;
    padding-bottom: 20px;
    color: black;

    .select {
        width: 250px;
    }
    #filtragem {
        display: none;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 10px;
        font-size: 14px;
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
@media screen and (min-width: 1440px) {
    .grid-container{
        display: grid;
        grid-template-columns:auto auto auto auto auto;
        gap: 10px;
        padding: 10px;
    }
    #filtragem{
        display:block;
    }
}
}}
`;


export default Bloco