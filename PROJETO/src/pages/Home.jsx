import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import Retangulo from "../components/Retangulo/Retangulo";
import ParteBranca from "../components/Header2/Header2";
import Card from "../components/Card/Card";
import ConjuntoCards from "../components/ConjuntoCards/ConjuntoCards";
import Filtros from "../components/Filtros/Filtros";
import { Footer } from "../components/Footer/Style";
import Rodape from "../components/Footer/Footer";


const Home = () => {

  /* useEffect(()=> {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        window.sessionStorage.setItem("accessToken", user.accessToken);
      } else {
        window.sessionStorage.removeItem("accessToken");
      }
    })
  },[]) */
  

  return (
    <Base>
      <Retangulo titulo='Portfólios' texto='Descubra o talento em evolução: projetos e portfolios que transformam ideias em realidade.'/>
      <Filtros/>
      <ConjuntoCards/>
    </Base>
  );
}

export default Home