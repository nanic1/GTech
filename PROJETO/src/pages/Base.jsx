import Rodape from "../components/Footer/Footer";
import { Footer } from "../components/Footer/Style";
import Header from "../components/Header/Header";
import ParteBranca from "../components/Header2/Header2";

const Base = (props) => (
  <>
    <Header />
    <ParteBranca/>
    <div className="container">
      {props.children}
    </div>
    <Rodape/>
  </>
)

export default Base;