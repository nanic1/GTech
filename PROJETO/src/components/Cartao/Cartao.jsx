import React from "react";
import Teste from "./Style";
import Card from "../Card/Card";


function Cartao(props) {

    const cursos = [props.curso, props.curso2, props.curso3].filter(curso => curso); // para filtrar os filtros vazios

    return(
        <> 
            <Teste>
                <div id="projeto">
                    <h3 id="titulo">{props.titulo}</h3>
                    <img src={props.imagem} id="foto"></img>
                </div>
                <div id="caracteristicas">
                    <ul>
                        <li><p className="descricao">{cursos.join(', ')}</p></li>
                        <li><p className="descricao">{props.tecnologias}</p></li>  
                        <li><p className="descricao">{props.periodo}</p></li>
                        <li><p className="descricao">{props.data}</p></li>
                        <li><p className="descricao">{props.unidade}</p></li>
                    </ul>
                </div>
                <div id="botao">
                    <button id="texto">Saiba Mais</button>
                </div>
                    

            </Teste>

        
        </>

    )
}

export default Cartao

