import React from "react";
import Conteiner from "./Style";
import CircularDemo from "../Carrossel/Carrossel";

const Parteazul = (props) => {


    return(
    <Conteiner>
        <div id="Projeto">
            <h2> Projeto {props.id}</h2>
           <CircularDemo imagem="imagens/projeto1.png"
            imagem2="imagens/react-foto.jpg"
            imagem3="imagens/react2.jpg">

            
            </CircularDemo> 
        </div>
    </Conteiner>
    )

}

export default Parteazul