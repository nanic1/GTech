import styled from "styled-components"

const Top = styled.header`
  padding: .5em 2em;
  background-color: black;
  display: flex;
  flex-direction: row;
  margin: auto;
  align-items: center;
  justify-content: center;
  gap: 85px;
  a {
    text-align: center;
    padding: .2em;
    margin: 0 .7em;
    min-width: 5%;
    text-decoration: none;
    font-weight: bold;
    color: white;
    font-family: "Open Sans";
  }
  #sobre-nos {
    display: none;
  }
  #home {
    display: none;
  }
  #whatsapp {
    display: none;
  }
  #area-do-aluno {
    display: none;
  }
  #login {
    display: none;
  }
  @media screen and (min-width: 360px) { /*sobrescrever o codigo acima, para quando a largura for 360 */
    #sobre-nos{
      display: block;
      width: 80%;
      margin: 0 auto;
      height: 2em;
    }
  }
  @media screen and (min-width: 834px) { /*sobrescrever o codigo acima, para quando a largura for 360 */
    #home{
      display: block;
      width: 80%;
      margin: 0 auto;
      height: 2em;
    }
    #sobre-nos{
      display: block;
      width: 80%;
      margin: 0 auto;
      height: 2em;
    }
  }
  @media screen and (min-width: 1300px) {
    #sobre-nos{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      margin: 0;
      height: 2em;
    }
    #whatsapp{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      margin: 0;
      height: 2em;
    } 
    #area-do-aluno{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      margin: 0;
      height: 2em;
    } 
    #home{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      margin: 0;
      height: 2em;
    } 
    #login{
      display: none;
    }
}
`;



export {Top}