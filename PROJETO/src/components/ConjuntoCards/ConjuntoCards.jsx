import React from "react";
import Bloco from "./Style"
import { useParams } from "react-router-dom";
import dados from "../../data/projetos.json";
import Cartao from "../Cartao/Cartao";
import { Link } from "react-router-dom";


function ConjuntoCards () {

    const {id} = useParams();
    let dadosFiltrados;
       
       dadosFiltrados = dados.filter(
        (elemento) => elemento.id === parseInt(id) || !id
      );
    return (
        <Bloco>
                {/* {dadosFiltrados.map((item, index) => ( */}
                    <Link to={`/projeto/${item.id}`}
                    id="no-underline">
                    <Cartao titulo="help"
                    texto="precisamos de ajuda" imagem="imagens/tulio.jpeg"/>
                    </Link>
                {/* ))} */}
    
        </Bloco>

    )
}
export default ConjuntoCards
