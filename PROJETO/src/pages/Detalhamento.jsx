import React from "react";
import dados from "../data/projetos.json"
import DetalhamentoProjetos from "../components/DetalhamentoProjetos/DetalhamentoProjetos";
import { useParams } from 'react-router-dom';
function Detalhamento() {
    const { id } = useParams()
    const projeto = dados.find(el => el.id === parseInt(id))
  
    if (!projeto) {
      return <p>Projeto não encontrado!</p>
    }

    return (
        <>
            <DetalhamentoProjetos/>
            
        </>
    )
}

export default Detalhamento;