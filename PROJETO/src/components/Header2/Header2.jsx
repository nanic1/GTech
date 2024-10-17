import React from "react";
import { Base1 } from "./Style"
import { Link } from "react-router-dom";


const ParteBranca = () => {
    return (
        <Base1>
            <div id='header'>
                <Link to="https://www.ibmec.br/"> 
                    <img src="imagens/logo.png"/>     
                </Link>
                <a href="https://www.ibmec.br/selecao?variant=funnel-inversion-off"> 
                    <button type="button">  
                    Inscreva-se
                    </button>
                </a>
            </div>
        
        </Base1>
    )
}

export default ParteBranca