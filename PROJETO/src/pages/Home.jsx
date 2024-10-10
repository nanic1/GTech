import { onAuthStateChanged } from "firebase/auth"
import Base from "./Base"
import { auth } from "../config/Firebase";
import { useEffect } from "react";
import Retangulo from "../components/Retangulo/Retangulo";
import ParteBranca from "../components/Header2/Header2";

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
      <ParteBranca/>
      <Retangulo titulo='Portofino' texto='Descubra o talento em evolução: projetos e portfolios que transformam ideias em realidade.'/>
    </Base>
  );
}

export default Home