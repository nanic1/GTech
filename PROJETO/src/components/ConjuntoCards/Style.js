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
`;




export {Bloco, Bloco2}