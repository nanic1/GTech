import ParteBranca from "../components/Header2/Header2";
import NovoComponente from "../components/NovoComponente/NovoComponente";
// import Cartao from "../components/Cartao/cartao"; 
import Base from "./Base";
// import ListContainer from "../components/ListContainer/ListContainer";


const SobreNos = () =>(
    <Base>
    <NovoComponente/>
    {/* <ListContainer>
    {
        MeusDados.map(ele => (
            <Cartao
                key={ele.titulo}
                titulo={ele.titulo}
                texto={ele.texto}
            />
        ))
    }
    </ListContainer> */ }
    </Base>
)

export default SobreNos;
 