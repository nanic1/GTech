import React from "react";
import Conteiner from "./Style";
import CircularDemo from "../Carrossel/Carrossel";
import dados from '../../data/projetos.json'

const Parteazul = (props) => {


    return(
    <Conteiner>
        <div id="Projeto">
            <h2> Projeto {props.id}</h2>
           <CircularDemo imagem="imagens/projeto1.png"
            imagem2="imagens/react-foto.jpg"
            imagem3="imagens/react2.jpg"
            imagem4={props.imagem4} >

            
            </CircularDemo> 
        </div>
    </Conteiner>
    )

}

export default Parteazul