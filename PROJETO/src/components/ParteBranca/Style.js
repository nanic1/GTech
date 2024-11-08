import styled from "styled-components";

const Descricao = styled.div`
    background-color: white;
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 30px;
    padding-bottom: 30px;
    #titulo{
        font-family: "Open Sans";
        font-size: 12pt;
        color: black;
    }
    #texto{
        font-family: "Open Sans";
        font-size: 12pt;
        color: black;
    }
    @media screen and (max-width: 360px) {
    #titulo{
        padding-left: 10px  !important;
        padding-right: 10px !important;
        background-color: red;
    }
    #texto{
        padding-left: 10px !important;
        padding-right: 10px !important;   
    }
    }
`

export default Descricao