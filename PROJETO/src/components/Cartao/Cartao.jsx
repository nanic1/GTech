import React from "react";
import Teste from "./Style";


function Cartao(props) {
    return(
        <> 
            <Teste>


                <h3 id="titulo">{props.titulo}</h3>
                <img src={props.imagem} id="teste"></img>
                <p id="texto">{props.texto}</p>

            </Teste>

        
        </>

    )
}

export default Cartao

