import {Bloco, Bloco2, Bloco3} from "./Style"
import dados from "../../data/projetos.json";
import Cartao from "../Cartao/Cartao";
import { Link, useParams, useSearchParams } from "react-router-dom";
import brutos from "../../data/projetos.json"
import Select from 'react-select'
import React, { useState, useEffect } from 'react';

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


function ConjuntoCards () {
  const[ dados,setDados] = useState(brutos);
  const [searchParams, setSearchParams] = useSearchParams();

  const [tecnologia, setTecnologia] = useState(null);
  const [unidade, setUnidade] = useState(null);
  const [data, setData] = useState(null);
  const [periodo, setPeriodo] = useState(null);
  const [curso, setCurso] = useState(null);

  const filtra = (entrada) => {
    setDados(brutos.filter(
     (ele) =>{
      return ele.titulo.toLowerCase().includes(entrada.toLowerCase())
     } 
    ))
  }
  const { id } = useParams();

  const handleSelectChange = (option, setValue, key) => {
    setValue(option);
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      if (option) {
        newParams.set(key, option.value);
      } else {
        newParams.delete(key);
      }
      return newParams;
    });
  };

  useEffect(() => {
    const filtroTecnologia = searchParams.get("tecnologia") || "";
    const filtroUnidade = searchParams.get("unidade") || "";
    const filtroData = searchParams.get("data") || "";
    const filtroPeriodo = searchParams.get("periodo") || "";
    const filtroCurso = searchParams.get("curso") || "";

    const resultadoFiltrado = brutos.filter((elemento) => {
      return (
        (filtroTecnologia ? elemento.tecnologias.replace(/\s+/g, '').toLowerCase().includes(filtroTecnologia.replace(/\s+/g, '').toLowerCase()) : true) &&
        (filtroUnidade ? elemento.unidade.replace(/\s+/g, '').toLowerCase().includes(filtroUnidade.replace(/\s+/g, '').toLowerCase()) : true) &&
        (filtroData ? elemento.data.replace(/\s+/g, '').toLowerCase().includes(filtroData.replace(/\s+/g, '').toLowerCase()) : true) &&
        (filtroPeriodo ? elemento.periodo.replace(/\s+/g, '').toLowerCase().includes(filtroPeriodo.replace(/\s+/g, '').toLowerCase()) : true) &&
        (filtroCurso ? elemento.curso.replace(/\s+/g, '').toLowerCase().includes(filtroCurso.replace(/\s+/g, '').toLowerCase()) : true) 

      );
    });

    setDados(resultadoFiltrado);
  }, [searchParams]);

  const limparFiltros = () => {
    setSearchParams({});
    setDados(brutos);
    setTecnologia(null);
    setUnidade(null);
    setData(null);
    setPeriodo(null);
    setCurso(null);
  };

  let dadosFiltrados;
  
  if (id) {
    dadosFiltrados = dados.filter((elemento) => elemento.id === parseInt(id));
  } else {
    dadosFiltrados = dados;
  }
    return (
      <>
      <Bloco3>
            <div id="filtragem">
                <h2 id="filtrar-por">Filtrar por:</h2>
              <button onClick={limparFiltros} id="limpar-filtro">Limpar Filtros</button>
            </div>
            <div class="grid-container">
                <Select options={options1} placeholder='Tecnologias' className='select' value={tecnologia} onChange={(option) => handleSelectChange(option, setTecnologia, "tecnologia")}/>
                <Select options={options2} placeholder='Unidade' className='select' value={unidade} onChange={(option) => handleSelectChange(option, setUnidade, "unidade")}/>
                <Select options={options3} placeholder='Data' className='select' value={data} onChange={(option) => handleSelectChange(option, setData, "data")}/>
                <Select options={options4} placeholder='Período' className='select' value={periodo} onChange={(option) => handleSelectChange(option, setPeriodo, "periodo")}/>
                <Select options={options5} placeholder='Curso' className='select' value={curso} onChange={(option) => handleSelectChange(option, setCurso, "curso")}/>
                
            </div>
      </Bloco3>

      <Bloco2>
        <div id="teste">
          <input id="buscar"
            type="text" 
            placeholder="Buscar"
            onChange={ (e) => filtra(e.target.value)} />
          
        </div>
      </Bloco2>
        <Bloco>
                {dadosFiltrados.map((item, index) => (
                    <Link to={`/projetos/${item.id}`}
                    id="no-underline">
                    <Cartao titulo={item.titulo}
                    curso={item.texto} tecnologias={item.tecnologias} periodo={item.data} imagem={item.imagem} unidade={item.unidade} curso={item.curso}/>
                    </Link>
                ))}
    
        </Bloco>
      </>
    )
}
export default ConjuntoCards
