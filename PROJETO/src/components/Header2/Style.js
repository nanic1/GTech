import styled from "styled-components";

const Base1 = styled.div`
    background-color: white;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 10px;
    padding-bottom: 10px;
    #header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    button {
        border: 0;
        background-color: #F5AC00;
        border-radius: 15px;
        font-family: "Inter";
        font-weight: 500;
        font-size: 14pt;
    }
    img {
        height: 50px
    }
`;

export {Base1}