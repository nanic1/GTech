import React from "react";
import Detalhes from "./Style";

const ParteAzul2 = (props) => {

    return(
    <Detalhes>
        <div id="integrantes">
            <p>Integrantes: nome do aluno | email | curso  </p> 
        </div>
        <div id="linguagens">
            <p>Linguagens e Tecnologias:</p>
        </div>
        <div id="Data">
            <p>Data do Projeto:</p>
        </div>
        <div id="unidades">
            <p>Unidade:</p>
        </div>
    </Detalhes>
    )

}

export default ParteAzul2