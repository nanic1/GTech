import React from "react";
import dados from "../data/projetos.json"
import DetalhamentoProjetos from "../components/DetalhamentoProjetos/DetalhamentoProjetos";
import { useParams } from 'react-router-dom';
import Base from "./Base";
import Parteazul from "../components/Parteazul/Parteazul";


function Detalhamento() {
    const { id } = useParams()
    const projeto = dados.find(el => el.id === parseInt(id))
  
    if (!projeto) {
      return <p>Projeto não encontrado!</p>
    }

    return (
        <>
            <Base>
                <Parteazul/>
            </Base>
    
            <DetalhamentoProjetos/>
            
        </>
    )
}

export default Detalhamento;
