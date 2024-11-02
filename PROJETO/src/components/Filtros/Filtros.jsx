import Card from "../Card/Card"
import Bloco from "./Style"
import Select from "react-select"
import React from "react"

const options1 = [
    {value: 'React', label: 'React'},
    {value: 'Figma', label: 'Figma'},
    {value: 'Firebase', label: 'Firebase'},
    {value: 'Python', label: 'Python'},
    {value: 'Photoshop', label: 'Photoshop'},
  
  ]
  const options2 = [
    {value: 'Rio-Barra', label: 'Rio-Barra'},
    {value: 'Rio-Centro', label: 'Rio-Centro'},
    {value: 'Belo Horizonte', label: 'Belo Horizonte'},
    {value: 'São Paulo', label: 'São Paulo'},
    {value: 'Brasilia', label: 'Brasilia'},
  
  ]
  const options3 = [
    {value: '2023.1', label: '2023.1'},
    {value: '2023.2', label: '2023.2'},
    {value: '2024.1', label: '2024.1'},
    {value: '2024.2', label: '2024.2'},
    {value: '2025.1', label: '2025.1'},
    {value: '2025.2', label: '2025.2'},
  
  
  ]
  const options4 = [
    {value: '1º Período', label: '1º Período'},
    {value: '2º Período', label: '2º Período'},
    {value: '3º Periodo', label: '3º Periodo'},
    {value: '4º Período', label: '4º Período'},
    {value: '5º Período', label: '5º Período'},
    {value: '6º Período', label: '6º Período'},
    {value: '7º Período', label: '7º Período'},
    {value: '8º Período', label: '8º Período'},
  
  ]
  const options5 = [
    {value: 'Ciência de Dados', label: 'Ciência de dados'},
    {value: 'Engenharia de Software', label: 'Engenharia de Software'},
    {value: 'ADS', label: 'ADS'},
    {value: 'Engenharia da Computação', label: 'Engenharia da Computação'},
    {value: 'Arquitetura', label: 'Arquitetura'},
    {value: 'Publicidade e Propaganda', label: 'Publicidade e Propaganda'},
  
  ]

function Filtros () {

    return (
        <Bloco>
            <div id="filtragem">
                <h2 id="filtrar-por">Filtrar por:</h2>
                <button id="limpar-filtro">Limpar Filtros</button>
            </div>
            <div class="grid-container">
                <Select options={options1} placeholder='Tecnologias' className='select'/>
                <Select options={options2} placeholder='Unidade' className='select'/>
                <Select options={options3} placeholder='Data' className='select'/>
                <Select options={options4} placeholder='Período' className='select'/>
                <Select options={options5} placeholder='Curso' className='select'/>
            </div>

        </Bloco>

    )
}
export default Filtros