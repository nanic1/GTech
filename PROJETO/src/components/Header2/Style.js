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
        border-radius: 10px;
        font-family: "Inter";
        font-weight: 500;
        font-size: 12pt;
        height: 45px;
        width: 150px;
        margin-top: 10px;
        cursor: pointer;

    }
    img {
        height: 60px;
    }
    @media screen and (min-width: 360px) {
    button {
        display: block;
        height: 35px;
        width: 110px;
        margin-top:15px;
    }
    a{
        text-decoration: none;
    }
    }

`;


export {Base1}