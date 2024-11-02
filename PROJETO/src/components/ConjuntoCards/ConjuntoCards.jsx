import React from "react";
import {Bloco, Bloco2} from "./Style"
import { useParams } from "react-router-dom";
import dados from "../../data/projetos.json";
import Cartao from "../Cartao/Cartao";
import { Link } from "react-router-dom";
import brutos from "../../data/projetos.json"
import { useState } from 'react';

function ConjuntoCards () {
  const[ dados,setDados] = useState(brutos);

  const filtra = (entrada) => {
    setDados(brutos.filter(
     (ele) =>{
      return ele.titulo.includes(entrada) || ele.imagem.includes(entrada);
     } 
    ))
  }
  const { id } = useParams();

  let dadosFiltrados;
  
  if (id) {
    dadosFiltrados = dados.filter((elemento) => elemento.id === parseInt(id));
  } else {
    dadosFiltrados = dados;
  }
    return (
      <>
      <Bloco2>
        <div id="teste">
          <input id="buscar"
            type="text" 
            placeholder="Buscar"
            onChange={ (e) => filtra(e.target.value)} />
          
        </div>
      </Bloco2>
        <Bloco>
                {dadosFiltrados.map((item, index) => (
                    <Link to={`/projetos/${item.id}`}
                    id="no-underline">
                    <Cartao titulo={item.titulo}
                    texto={item.texto} imagem={item.imagem} imagem2={item.imagem2} imagem3={item.imagem3}/>
                    texto={item.texto} imagem={item.imagem} curso={item.curso} tecnologias={item.tecnologias} periodo={item.periodo} />
                    </Link>
                ))}
    
        </Bloco>
      </>
    )
}
export default ConjuntoCards
