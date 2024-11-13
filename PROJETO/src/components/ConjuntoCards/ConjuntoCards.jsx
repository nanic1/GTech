import {Bloco, Bloco2, Bloco3, Container3} from "./Style"
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
  {value: 'RJ-Barra', label: 'RJ-Barra'},
  {value: 'RJ-Centro', label: 'RJ-Centro'},
  {value: 'SP-Paulista', label: 'SP-Paulista'},
  {value: 'SP-Faria Lima', label: 'SP-Faria Lima'},
  {value: 'MG-Belo Horizonte', label: 'MG-Belo Horizonte'},
  {value: 'DF-Brasília', label: 'DF-Brasília'},

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
  {value: '3º Período', label: '3º Período'},
  {value: '4º Período', label: '4º Período'},
  {value: '5º Período', label: '5º Período'},
  {value: '6º Período', label: '6º Período'},
  {value: '7º Período', label: '7º Período'},
  {value: '8º Período', label: '8º Período'},

]
const options5 = [
  {value: 'Ciência de dado e IA', label: 'Ciência de dados e IA'},
  {value: 'Engenharia de Software', label: 'Engenharia de Software'},
  {value: 'ADS', label: 'ADS'},
  {value: 'Engenharia da Computação', label: 'Engenharia da Computação'},
  {value: 'Arquitetura', label: 'Arquitetura'},
  {value: 'Publicidade e Propaganda', label: 'Publicidade e Propaganda'},
  {value: 'Marketing', label: 'Marketing'},
  {value: 'Design Gráfico', label: 'Design Gráfico'},

]


function ConjuntoCards () {
  const[ dados,setDados] = useState(brutos);
  const [searchParams, setSearchParams] = useSearchParams();

  const [tecnologia, setTecnologia] = useState(null);
  const [unidade, setUnidade] = useState(null);
  const [data, setData] = useState(null);
  const [periodo, setPeriodo] = useState(null);
  const [curso, setCurso] = useState(null);
  const [curso2, setCurso2] = useState(null);
  const [curso3, setCurso3] = useState(null);

  const [paginaAtual, setPaginaAtual] = useState(1);
  const cardsPorPagina = 8;

  const indiceUltimoCard = paginaAtual * cardsPorPagina;
  const indicePrimeiroCard = indiceUltimoCard - cardsPorPagina;
  const dadosPaginaAtual = dados.slice(indicePrimeiroCard, indiceUltimoCard);

  const numeroTotalPaginas = Math.ceil(dados.length / cardsPorPagina);

  const irParaPagina = (numero) => {
    setPaginaAtual(numero);
  };


  const filtra = (entrada) => {
    setDados(brutos.filter(
     (ele) =>{
      return ele.titulo.toLowerCase().includes(entrada.toLowerCase()) || ele.curso.toLowerCase().includes(entrada.toLowerCase()) || ele.unidade.toLowerCase().includes(entrada.toLowerCase()) || ele.tecnologias.toLowerCase().includes(entrada.toLowerCase()) || ele.data.toLowerCase().includes(entrada.toLowerCase()) || ele.periodo.toLowerCase().includes(entrada.toLowerCase())
     } 
    ))
    setPaginaAtual(1);
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
    setPaginaAtual(1);
  }, [searchParams]);

  const limparFiltros = () => {
    setSearchParams({});
    setDados(brutos);
    setTecnologia(null);
    setUnidade(null);
    setData(null);
    setPeriodo(null);
    setCurso(null);
    setPaginaAtual(1);
  };

  useEffect(() => {
    if (id) {
      setDados((prevDados) => prevDados.filter((elemento) => elemento.id === parseInt(id)));
    } else {
      setDados(brutos);
    }
  }, [id]);

    return (
      <>
      <Bloco3>
            <div id="filtragem">
                <h2 id="filtrar-por">Filtrar por:</h2>
              <button onClick={limparFiltros} id="limpar-filtro">Limpar Filtros</button>
            </div>
          <div id="filtrageem">
            <div class="grid-container">
                <Select options={options1} placeholder='Tecnologias' className='select' value={tecnologia} onChange={(option) => handleSelectChange(option, setTecnologia, "tecnologia")}/>
                <Select options={options2} placeholder='Unidade' className='select' value={unidade} onChange={(option) => handleSelectChange(option, setUnidade, "unidade")}/>
                <Select options={options3} placeholder='Data' className='select' value={data} onChange={(option) => handleSelectChange(option, setData, "data")}/>
                <Select options={options4} placeholder='Período' className='select' value={periodo} onChange={(option) => handleSelectChange(option, setPeriodo, "periodo")}/>
                <Select options={options5} placeholder='Curso' className='select' value={curso} onChange={(option) => handleSelectChange(option, setCurso, "curso")}/>
                
            </div>
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
                {dadosPaginaAtual.map((item, index) => (
                    <Link to={`/projetos/${item.id}`}
                    id="no-underline">
                    <Cartao titulo={item.titulo}
                    curso={item.curso} curso2={item.curso2} curso3={item.curso3} tecnologias={item.tecnologias} periodo={item.periodo} imagem={item.imagem} unidade={item.unidade} data={item.data}/>
                    </Link>
                ))}
    
        </Bloco>
        <Container3>
      
        <div className="paginacao">
          {Array.from({ length: numeroTotalPaginas }, (_, index) => (
            <button
              key={index}
              onClick={() => irParaPagina(index + 1)}
              className={paginaAtual === index + 1 ? 'ativo' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </Container3>
    </>
  );
}

export default ConjuntoCards
