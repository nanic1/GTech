import Card from "../Card/Card"
import Bloco from "./Style"


function Filtros () {

    return (
        <Bloco>
            <div>
                <h2>Filtros:</h2>
            </div>
            <div class="grid-container">
                <button class="item1">Linguagens e Ferramentas</button>
                <button class="item2">Cursos</button>
                <button class="item3">Unidade</button>  
                <button class="item4">Período</button>
                <button class="item5">Data</button>
            </div>
        </Bloco>

    )
}
export default Filtros