import React from "react";
import dados from   "../data/projetos.json"


function Projects() {
    const {id} = useParams();
    const dadosProjetos = dados.find(
        (elemento) => elemento.id === parseInt(id) || !id
)
}