import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { auth } from "../config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Base from "./Base";
import Header from "../components/Header/Header";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
    
    <Header/>
    <div style={{"backgroundColor": "white", "margin": "150px"}}>
      <div style={{"background-color": "#f5f5f5", "height": "350px", "display": "Flex", "flexDirection": "column"}}> 
        <form action="" style={{"display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems":"center", "gap":"20px"}}>
        <img src="imagens/logo.png" style={{"width": "200px" }}/>

            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            style={{"border": "0px", "padding": "15px 15px", "border-radius": "10px", "width": "200px", "textAlign": "center"}}
            />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{"border": "0px", "padding": "15px 15px", "border-radius": "10px", "width": "200px", "textAlign": "center"}}
            placeholder="Senha"
            />
          <button type="submit"
            style={{"border": "0px", "padding": "15px 15px", "border-radius": "10px", "width": "230px", "backgroundColor": "#002555", "color":"white"}}
          >Login</button>

        </form>

      </div>
    </div>
    </>
  )
}

export default Login;