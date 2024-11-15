import React from "react";
import Conteiner from "./Style";
import CircularDemo from "../Carrossel/Carrossel";
import dados from '../../data/projetos.json'

const Parteazul = (props) => {


    return(
    <Conteiner>
        <div id="Projeto">
            <h2> Projeto {props.id}</h2>
           <CircularDemo imagem={props.imagem}
            imagem2={props.imagem2}
            imagem3={props.imagem3} >

            
            </CircularDemo> 
        </div>
    </Conteiner>
    )

}

export default Parteazul