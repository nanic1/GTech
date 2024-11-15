import styled from "styled-components";

const Bloco = styled.div`
    /* width: 1350px;
    height: 265px; */
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #002555;
    font-family: "Inter";
    font-weight: 500;
    font-size: 14pt;
    
    #navCima{
        display: flex;
        gap: 10px;
    }
    .inicio {
        text-decoration: none;
        color: #E0E6EC;
        font-family: "Inter";
    }
    @media (min-width: 360px) {
        padding-left: 30px;
        padding-top: 20px;
        padding-bottom: 20px;
        .inicio {
            font-size: 10px;
        }
        #navCima{
            font-size: 10px;
        }
        h2 {
            padding-top: 10px;
        }
        #baixo p{
            font-size: 12px;
        }  
    }
    @media (min-width: 1300px) {
        padding-left: 100px;
        padding-right: 100px; 
        #baixo p{
            font-size: 20px;
        }
        #navCima{
            font-size: 14px;
        .inicio{
            font-size: 14px;
        }
    }
}
`;


export default Bloco