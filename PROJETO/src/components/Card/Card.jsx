import Bloco from "./Style"

const Card = (props) => (
    <Bloco>
        <div id='cima'>
            <p>{props.titulo}</p>
        </div>
        <div id='baixo'>
            <p>{props.texto}</p>
        </div>

    </Bloco>

)

export default Card