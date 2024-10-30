import styled from "styled-components";

const Teste = styled.div `
    height: min-content;
    margin-top: 30px;
    text-align: center;
    background-color: #f5f5f5;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    color: black;

    img {
        display: block;
        max-width: 100%;
        align-items: center;
    }
    #titulo {
        padding-top: 20px;
    }
    #texto {
        background-color: #F5AC00;
        border-radius: 10px;
        text-decoration: none;

    }
`
export default Teste