import React from "react";
import Teste from "./Style";
import Card from "../Card/Card";


function Cartao(props) {
    return(
        <> 
            <Teste>

                <h3 id="titulo">{props.titulo}</h3>

                <img src={props.imagem} id="foto"></img>
                <button id="texto">{props.texto}</button>

            </Teste>

        
        </>

    )
}

export default Cartao

