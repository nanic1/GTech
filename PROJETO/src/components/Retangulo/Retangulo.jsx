
import Bloco from "./Style"

const Retangulo = (props) => (
    <Bloco>
        <div id='navCima'>
            <p>Inicio</p>
            <p>-</p>
            <p>Portfólio</p>
        </div>
        <div id='baixo'>
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
        </div>

    </Bloco>
)

export default Retangulo