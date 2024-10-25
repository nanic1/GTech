import React from "react";
import Bloco from "./Style"
import { useParams } from "react-router-dom";
import dados from "../../data/projetos.json";
import Cartao from "../Cartao/Cartao";
import { Link } from "react-router-dom";


function ConjuntoCards () {

    const { id } = useParams();

    let dadosFiltrados;
    
    if (id) {
      dadosFiltrados = dados.filter((elemento) => elemento.id === parseInt(id));
    } else {
      dadosFiltrados = dados;
    }
    return (
        <Bloco>
                {dadosFiltrados.map((item, index) => (
                    <Link to={`/projetos/${item.id}`}
                    id="no-underline">
                    <Cartao titulo={item.titulo}
                    texto={item.texto} imagem={item.imagem}/>
                    </Link>
                ))}
    
        </Bloco>

    )
}
export default ConjuntoCards
