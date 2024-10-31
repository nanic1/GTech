import styled from "styled-components";

const Footer = styled.div`
    color: black;
    line-height: 1px;
    #unidade{
    text-align: center;
    margin-bottom: 20px 0;
    display: flex;
    padding-top: 30px;
    }
    #unidade p{
        display: inline-block;
        position: relative;
        font-weight: bold;
        margin: auto;
    }
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
        width: 1100px; 
        height: 1px; 
        background-color: black; 
        vertical-align: middle;
        margin: auto;
    }
    .azul {
        color: rgba(0, 37, 85, 1);
    }
    .amarelo{
        color: rgba(245, 172, 0, 1); 
    }
    #conteiner{
    font-size: 10px;
    margin: 0 12px;
    background-color: white;
    align-items: center;   
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    
    }
`



export {Footer}