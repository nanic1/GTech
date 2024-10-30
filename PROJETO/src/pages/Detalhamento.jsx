import React from "react";
import dados from "../data/projetos.json"
import DetalhamentoProjetos from "../components/DetalhamentoProjetos/DetalhamentoProjetos";
import { useParams } from 'react-router-dom';
import Base from "./Base";
import Parteazul from "../components/Parteazul/Parteazul";
import ParteBranca from "../components/ParteBranca/ParteBranca";
import ParteAzul2 from "../components/ParteAzul2/ParteAzul2";


function Detalhamento() {
    const { id } = useParams()
    const projeto = dados.find(el => el.id === parseInt(id))
  
    if (!projeto) {
      return <p>Projeto não encontrado!</p>
    }

    return (
        <>
            <Base>
                <Parteazul id={projeto.id} imagem={projeto.imagem}/>
                <ParteBranca descricao={projeto.descricao} id={projeto.id}/>
                <ParteAzul2/>
            </Base>
    
            <DetalhamentoProjetos/>
            
        </>
    )
}

export default Detalhamento;
