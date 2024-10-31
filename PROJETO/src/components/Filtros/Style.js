import styled from "styled-components";

const Bloco = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    padding-top: 50px;
    padding-bottom: 20px;
    color: black;
    .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        gap: 10px;
        background-color: white;
        padding: 10px;
        
}

    .grid-container > button {
        cursor: pointer;
        background-color: rgba(217, 217, 217, 1);
        border: none;
        text-align: center;
        padding: 20px 0;
        font-size: 20px;
        border-radius: 20px;
        text-align: left;
        padding-left: 10px;
        &:hover {
            background-color: rgba(200, 200, 200, 1); 
}
`;



export default Bloco