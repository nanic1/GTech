import Card from "../Card/Card"
import Bloco from "./Style"


function ConjuntoCards () {
    const listaCartoes = [
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},
        {titulo: 'Projeto 1', texto: 'Descrição do projeto'},


    ]
    return (
        <Bloco>

            <div id='teste'>
                {listaCartoes.map((item, index) => (
                    <Card key={index} titulo={item.titulo} texto={item.texto}/>
                ))}
            </div>
        </Bloco>

    )
}
export default ConjuntoCards