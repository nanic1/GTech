import dados from "../data/projetos.json"
import DetalhamentoProjetos from "../components/DetalhamentoProjetos/DetalhamentoProjetos";
import { useParams } from 'react-router-dom';
import Base from "./Base";
import Parteazul from "../components/Parteazul/Parteazul";
import ParteBranca from "../components/ParteBranca/ParteBranca";
import ParteAzul2 from "../components/ParteAzul2/ParteAzul2";
import React, { useEffect } from 'react';

function Detalhamento() {
  useEffect(() => {            // para o rolamento da página começar no inicio da pag
    window.scrollTo(0, 0);
  }, []);

    const { id } = useParams()
    const projeto = dados.find(el => el.id === parseInt(id))
  
    if (!projeto) {
      return <p>Projeto não encontrado!</p>
    }

    return (
        <>
            <Base>
                <Parteazul id={projeto.id} imagem={projeto.imagem} imagem2={projeto.imagem2} imagem3={projeto.imagem3}/>
                <ParteBranca descricao={projeto.descricao} id={projeto.id}/>
                <ParteAzul2 tecnologias={projeto.tecnologias} data={projeto.data} unidade={projeto.unidade} curso={projeto.curso} nome={projeto.nome} 
                email={projeto.email} nome2={projeto.nome2} nome3={projeto.nome3} curso2={projeto.curso2} curso3={projeto.curso3} email2={projeto.email2} email3={projeto.email3} periodo={projeto.periodo}/>
            </Base>
    
            <DetalhamentoProjetos/>
            
        </>
    )
}

export default Detalhamento;
