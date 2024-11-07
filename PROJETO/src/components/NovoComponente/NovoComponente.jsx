import Estilo from "./Style";

const NovoComponente = () =>
(
    <Estilo>
        <img src="imagens/gtechbrnco.png" />
        <h1>Sobre Nós</h1>
        <p>Bem-vindo ao nosso site, um espaço dedicado a exibir os portfólios de alunos e professores do IBMEC. Aqui, você encontrará projetos desenvolvidos por talentos atuais e por aqueles que já passaram pela instituição, além de trabalhos de professores que inspiram essas jornadas.

Nosso site foi criado como parte de um projeto da matéria 
 front-end desenvolvido pelos alunos Júlia Curto, Barbara Malta, Pedro Kurtz, Enzo Lazzarotto e Kauan Gama. Queremos proporcionar uma vitrine para que todos possam visualizar suas conquistas, criatividade e inovações com o mundo.

Explore e descubra o que torna a nossa comunidade tão única!</p>
        <div id="integrantes">
            <div Classname="nomes">
                <img className="foto" src="imagens\barbara.jpg"/>
                <ul>
                    <p>Barbara Malta</p>
                    <p>Engenharia de Software</p>
                    <p>2º Período</p>
                </ul>
            </div>
            <div ClassName="nomes">
                <img className="foto" src="imagens\enzo.jpeg"/>
                <ul>
                    <p>Enzo Lazzarotto</p>
                    <p>Ciência de dados</p>
                    <p>2º Período</p>
                </ul>
            </div>
            <div ClassName="nomes">
                <img className="foto" src="imagens\julia.jpeg"/>
                <ul>
                    <p>Júlia Curto</p>
                    <p>Ciência de dados</p>
                    <p>2º Período</p>
                </ul>
            </div>
            <div ClassName="nomes">
                <img className="foto" src="imagens\kauan.jpeg"/>
                <ul>
                    <p>Kauan Gama</p>
                    <p>ADS</p>
                    <p>1º Período</p>
                </ul>
            </div>
            <div ClassName="nomes">
                <img className="foto" src="imagens\pedro.jpeg"/>
                <ul>
                    <p>Pedro Kurtz</p>
                    <p>ADS</p>
                    <p>1º Período</p>
                </ul>
            </div>
        </div>
    </Estilo>
)

export default NovoComponente;