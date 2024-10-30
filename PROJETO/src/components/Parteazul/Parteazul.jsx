import React from "react";
import Conteiner from "./Style";

const Parteazul = (props) => {

    return(
    <Conteiner>
        <div id="Projeto">
            <h2> Projeto {props.id}</h2>
            <img src={props.imagem}/>
        </div>
    </Conteiner>
    )

}

export default Parteazul