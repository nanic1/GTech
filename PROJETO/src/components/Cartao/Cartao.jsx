 import { Container } from "./style";
 import React from "react";

 function Cartao(props) {
     return(

     <Container>
         <h3 id="titulo">{props.titulo}</h3>
         <img src={props.imagem} id="teste"></img>
         <p id="texto">{props.texto}</p>
     </Container>
     )
}

export default Cartao

