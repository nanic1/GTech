import styled from "styled-components";

const Base1 = styled.div`
    position: relative;
    background-color: white;
    padding-left: 10px;
    padding-right: 10px;
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
        height: 50px;
        width: 125px;
        cursor: pointer;
    }
    img {
        height: 55px
    }
`;

export {Base1}