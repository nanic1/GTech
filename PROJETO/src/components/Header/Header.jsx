import { Link } from "react-router-dom";
import { Top } from "./Style";

const Header = () => (
  <Top>
    <Link to="/" id="home">Home</Link>

    <Link to="https://api.whatsapp.com/send?phone=551151081732&text=Ol%C3%A1%21+Preciso+de+atendimento+e+o+meu+protocolo+%C3%A9+287826049.+%28por+favor%2C+%2An%C3%A3o+apague+ou+altere+esta+mensagem%2A+porque+ela+acompanhar%C3%A1+todo+o+seu+atendimento%29&text=Ol%C3%A1%21+Preciso+de+atendimento+e+o+meu+protocolo+%C3%A9+2352159751.+%28por+favor%2C+%2An%C3%A3o+apague+ou+altere+esta+mensagem%2A+porque+ela+acompanhar%C3%A1+todo+o+seu+atendimento%29" id="whatsapp"> WhatsApp</Link>
    <Link to="/sobre-nos" id="sobre-nos">Sobre Nós</Link>
    <Link to="https://estudante.ibmec.br/disciplinas" id="area-do-aluno">Área do Aluno</Link>
    <Link to="/Login" id="login">Login</Link>
  </Top>
)

export default Header;