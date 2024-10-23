import { Link } from "react-router-dom";
import Bloco from "./Style"

const Retangulo = (props) => (
    <Bloco>
        <div id='navCima'>
            <Link to="https://www.ibmec.br/" className="inicio"><p>Inicio</p></Link>
            <p>-</p>
            <p>Portfólios</p>
        </div>
        <div id='baixo'>
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
        </div>

    </Bloco>
)

export default Retangulo