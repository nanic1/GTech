import React from "react";
import Teste from "./Style";
import Card from "../Card/Card";


function Cartao(props) {
    return(
        <> 
            <Teste>
                <div id="projeto">
                    <h3 id="titulo">{props.titulo}</h3>
                    <img src={props.imagem} id="foto"></img>
                </div>
                <div id="caracteristicas">
                    <ul>
                        <li><p className="descricao">{props.curso}</p></li>
                        <li><p className="descricao">{props.tecnologias}</p></li>  
                        <li><p className="descricao">{props.periodo}</p></li>
                    </ul>
                </div>
                <div id="botao">
                    <button id="texto">{props.texto}</button>
                </div>
                    

            </Teste>

        
        </>

    )
}

export default Cartao

