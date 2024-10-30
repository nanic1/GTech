import React from "react";
import Descricao from "./Style";

const ParteBranca = (props) => {

    return(
    <Descricao>
        <div id="titulo">
            <h2> Descrição do Projeto {props.id}</h2>
        </div>
        <div id="texto">
            <p>{props.descricao}</p>

        </div>
    </Descricao>
    )

}

export default ParteBranca