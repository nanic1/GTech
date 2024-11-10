import React from "react";
import Detalhes from "./Style";

const ParteAzul2 = (props) => {

    return(
    <Detalhes>
        <div id="descricao">
        <p id="integrantes">
                    {props.nome && props.email && props.curso && (
                        <>Integrantes: <span className="primeiro"></span>{props.nome} | {props.email} | {props.curso} <br /></>
                    )}
                    {props.nome2 && props.email2 && props.curso2 && (
                        <> <span className="outros"></span>{props.nome2} | {props.email2} | {props.curso2} <br/> </>
                    )}
                    {props.nome3 && props.email3 && props.curso3 && (
                        <> <span className="outros"></span> {props.nome3} | {props.email3} | {props.curso3} </>
                    )}
        </p>
        </div>
        <div id="linguagens"> 
            <p>Linguagens e Tecnologias: {props.tecnologias}</p>
        </div>
        <div id="Data">
            <p>Data do Projeto: {props.data}</p>
        </div>

        <div id="unidade2">

            <p>Unidade: {props.unidade}</p>
        </div>
    </Detalhes>
    )

}

export default ParteAzul2