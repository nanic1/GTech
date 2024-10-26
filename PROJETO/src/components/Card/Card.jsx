import {Bloco} from "./Style"
import { Link } from "react-router-dom"

const Card = (props) => (
    <>
    
        <Bloco>
            <div id='cima'>
                <p>{props.titulo}</p>
            </div>
            <img></img>
            <div id='baixo'>
                <p>{props.texto}</p>
            </div>
            <Link to='/detalhamento' id="teste">
                <button>Ver Mais</button>
            </Link>
        </Bloco>
    </>




)

export default Card