import React from "react";
import Conteiner from "./Style";

const Parteazul = (props) => {
    console.log(props);

    return(
    <Conteiner>
        <div id="Projeto">
            <h1> {props.titulo}</h1>

        </div>
    </Conteiner>
    )

}

export default Parteazul