import styled from "styled-components";

const Detalhes = styled.div`
    background-color: rgba(0, 37, 85, 1);
    padding-left: 100px;
    padding-right: 100px;
    padding-top: 30px;
    padding-bottom: 30px;
    font-family: "Open sans";
    font-weight: 500;
    font-size: 18px; 
    @media screen and (max-width: 360px) {
        padding: 20px 30px !important;
        font-size: 14px;
    }

    @media screen and (min-width: 834px) {
    .outros{
        margin-Left:108px;
    }
    .primeiro{
        white-space: normal;
    }
    }
    @media screen and (min-width: 1300px) {
    .outros{
        margin-Left:112px;
    }
    }

`;
export default Detalhes;
