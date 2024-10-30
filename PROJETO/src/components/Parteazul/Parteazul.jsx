import React from "react";
import Conteiner from "./Style";

const Parteazul = (props) => {
    console.log(props);

    return(
    <Conteiner>
        <div id="Projeto">
            <h2> {props.titulo}</h2>

        </div>
    </Conteiner>
    )

}

export default Parteazul