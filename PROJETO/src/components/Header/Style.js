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
    padding: .3em;
    margin: 0 .7em;
    min-width: 5%;
    text-decoration: none;
    font-weight: bold;
    color: white;
    font-family: "Open Sans";

    /*border-radius: .3em;*/
  }
`

export {Top}