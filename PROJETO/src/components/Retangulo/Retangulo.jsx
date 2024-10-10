
import Bloco from "./Style"

const Retangulo = (props) => (
    <Bloco>
        <div>
            <h2>{props.titulo}</h2>
            <p>{props.texto}</p>
        </div>

    </Bloco>
)

export default Retangulo