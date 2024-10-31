import styled from "styled-components";

const Bloco = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
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
`;
const Bloco2 = styled.div`
    background-color: #f5f5f5;
    height: 60px;
    align-items: center;
    justify-content: center;
    #buscar{
    margin: auto;
    display:flex;
    align-items: center;
    border-radius: 10px;
    background-color: rgba(217, 217, 217, 1);
    box-shadow: 1px 1px 1px gray;
    color: black;
    padding: 10px 10px;
    }
`;


export {Bloco, Bloco2}