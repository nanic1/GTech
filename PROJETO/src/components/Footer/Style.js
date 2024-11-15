import styled from "styled-components";

const Footer = styled.div`
    color: black;
    line-height: 1px;
    #unidade{
    text-align: center;
    margin-bottom: 20px 0;
    display: flex;
    padding-top: 8px;
    }
    #unidade p{
        display: inline-block;
        position: relative;
        font-weight: bold;
        margin: auto;
    }
    /* #unidade p::before{
        content: "";
        display: inline-block;
        width: 100px; 
        height: 1px; 
        background-color: black; 
        vertical-align: middle;
        margin: auto;
    }
    #unidade p::after{
        content: "";
        display: inline-block;
        width: 1100px; 
        height: 1px; 
        background-color: black; 
        vertical-align: middle;
        margin: auto;
    } */
    .azul {
        color: rgba(0, 37, 85, 1);
    }
    .amarelo{
        color: rgba(245, 172, 0, 1); 
    }
    }
    @media screen and (min-width: 360px) { 
    #unidade p::before{
        content: "";
        display: inline-block;
        width: 50px; 
        height: 1px; 
        background-color: black; 
        vertical-align: middle;
        margin: auto;
    }
    #unidade p::after{
        content: "";
        display: inline-block;
        width: 230px; 
        height: 1px; 
        background-color: black; 
        vertical-align: middle;
        margin: auto;
    }
    #conteiner{
    font-size: 10px;
    margin: 0 20px;
    margin-top: 10px;
    background-color: white;
    align-items: center;   
    display: grid;
    flex-direction: row;
    justify-content: space-between;
    grid-template-columns: auto auto;
    gap: 10px;
}

    }
    @media screen and (min-width: 834px) { 
    #unidade p::before{
        content: "";
        display: inline-block;
        width: 100px; 
        height: 1px; 
        background-color: black; 
        vertical-align: middle;
        margin: auto;
    }
    #unidade p::after{
        content: "";
        display: inline-block;
        width: 650px; 
        height: 1px; 
        background-color: black; 
        vertical-align: middle;
        margin: auto;
    }
    #conteiner{
    font-size: 10px;
    margin: 0 20px;
    margin-top: 10px;
    background-color: white;
    align-items: center;   
    display: grid;
    flex-direction: row;
    justify-content: space-between;
    grid-template-columns: auto auto auto;
    gap: 10px;
    }
}
    @media screen and (min-width: 1300px) { 
    #unidade p::before{
        content: "";
        display: inline-block;
        width: 150px; 
        height: 1px; 
        background-color: black; 
        vertical-align: middle;
        margin: auto;
    }
    #unidade p::after{
        content: "";
        display: inline-block;
        width: 1000px; 
        height: 1px; 
        background-color: black; 
        vertical-align: middle;
        margin: auto;
    }
    #conteiner{
    font-size: 10px;
    margin: 0 20px;
    margin-top: 10px;
    background-color: white;
    align-items: center;   
    display: grid;
    flex-direction: row;
    justify-content: space-between;
    grid-template-columns: auto auto auto auto auto auto;
    gap: 10px;
    }

`;



export {Footer}