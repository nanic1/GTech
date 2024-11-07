import styled from "styled-components";

const Teste = styled.div `
    height: min-content;
    margin-top: 30px;
    background-color: #f5f5f5;
    width: 250px;
    border-radius: 10px;
    color: black;

    img {
        display: block;
        max-width: 100%;
        align-items: center;
        border-radius: 10px;
        padding-bottom: 0px;
        width: 200px;
        padding-top: 0px;
    }
    button {
        border: none;
        width: 100px;
        height: 25px;
        align-items: center;
        margin-bottom: 10px;
        cursor: pointer;
    }
    #titulo {
        padding-top: 10px;
        padding-bottom: 10px;
    }
    #texto {
        background-color: #F5AC00;
        border-radius: 10px;
    }
    #caracteristicas {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    #projeto {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
    }
    #botao {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .descricao {
        margin: 0;
        padding-top: 5px;
        padding-bottom: 5px;
        font-size: 13px;
    }
    ul {
        p{
            margin-top: 5px;
            margin-bottom: 5px;
        }
    }
`
export default Teste