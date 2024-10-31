import { signOut } from "firebase/auth"
import { auth } from "../config/Firebase";
import Base from "./Base";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = (e) =>{
    e.preventDefault();
    signOut(auth);
    window.sessionStorage.removeItem("accessToken");
    navigate("/");
  }

  return (
    <>
    
    <Header/>
      <div style={{"backgroundColor": "white", "margin": "170px"}}>
        <div style={{"background-color": "#f5f5f5", "height": "270px", "display": "Flex", "justifyContent": "center", "flexDirection": "column", "border-radius": "10px", "paddingBottom": "40px"}}> 
          <form action="" style={{"display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems":"center", "gap":"15px"}}>
            <img src="imagens/logo.png" style={{"width": "200px","display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems":"center"}}/>
            <h1 style={{"color": "black", "border": "0px", "padding": "5px 5px", "width": "300px", "textAlign": "center", "fontSize": "30px", "paddingBottom": "35px"}}>Clique para sair</h1>
            <button onClick={handleLogout} style={{"border": "0px", "padding": "15px 15px", "border-radius": "10px", "width": "300px", "backgroundColor": "#002555", "color":"white"}}>Logout</button>
          </form>
        </div>
      </div>
    </>
  )
}


export default Logout;