import Estilo from "./Style";
import { useState, useEffect } from "react";


const NovoComponente = () => {
    const [isMobile, setIsMobile] = useState(false); // Para detectar quando a tela for 360px

    // Função de scroll suave para a seção "integrantes"
    const scrollToIntegrantes = (e) => {
        e.preventDefault();
        const element = document.getElementById("integrantes");
        element.scrollIntoView({ behavior: "smooth" });

        // Após rolar até a seção, garantir que o scroll esteja habilitado
        if (window.innerWidth > 360) {
            document.body.style.overflow = 'auto';  // Habilitar o scroll em telas grandes
        }
    };

    // Efeito para controlar o bloqueio de scroll em telas grandes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 360) {
                setIsMobile(true);  // Se a largura for 360px ou menos
                document.body.style.overflow = 'auto'; // Permitir scroll em telas menores
            } else {
                setIsMobile(false);
                document.body.style.overflow = 'hidden'; // Bloquear o scroll em telas maiores
            }
        };

        handleResize(); // Verifica a largura inicialmente
        window.addEventListener("resize", handleResize); // Adiciona o ouvinte para alterações de tamanho

        return () => window.removeEventListener("resize", handleResize); // Limpa o ouvinte quando o componente for desmontado
    }, []);
    
    return(
        <Estilo>
            <img src="imagens/gtechbrnco.png" alt="Logo" />
            <h1>Sobre Nós</h1>
            <p>Bem-vindo ao nosso site, um espaço dedicado a exibir os portfólios de alunos e professores do IBMEC. Aqui, você encontrará projetos desenvolvidos por talentos atuais e por aqueles que já passaram pela instituição, além de trabalhos de professores que inspiram essas jornadas.
            Nosso site foi criado como parte de um projeto da matéria front-end desenvolvido pelos alunos Júlia Curto, Barbara Malta, Pedro Kurtz, Enzo Lazzarotto e Kauan Gama. Queremos proporcionar uma vitrine para que todos possam visualizar suas conquistas, criatividade e inovações com o mundo.
            Explore e descubra o que torna a nossa comunidade tão única!</p>

            {/* Link de ancoragem que chama a função de rolagem */}
            <h1 id="nosso-time">
                <a href="#integrantes" onClick={scrollToIntegrantes} style={{ textDecoration: "none", color: "inherit" }}>
                    Nosso Time
                </a>
            </h1>

            {/* Seção de integrantes */}
            <div id="integrantes">
                <div className="nomes">
                    <img className="foto" src="imagens/barbara.jpg" alt="Barbara Malta"/>
                    <ul>
                        <div className="textos" >
                            <h4>Barbara Malta</h4>
                            <p>Engenharia de Software</p>
                            <p>2º Período</p>
                        </div>
                    </ul>
                </div>
                <div className="nomes">
                    <img className="foto" src="imagens/enzo.jpeg" alt="Enzo Lazzarotto"/>
                    <ul>
                        <div className="textos">
                            <h4>Enzo Lazzarotto</h4>
                            <p>Ciência de dados</p>
                            <p>2º Período</p>
                        </div>
                    </ul>
                </div>
                <div className="nomes">
                    <img className="foto" src="imagens/julia.jpeg" alt="Júlia Curto"/>
                    <ul>
                        <div className="textos">
                            <h4>Júlia Curto</h4>
                            <p>Ciência de dados</p>
                            <p>2º Período</p>
                        </div>
                    </ul>
                </div>
                <div className="nomes">
                    <img className="foto" src="imagens/kauan.jpeg" alt="Kauan Gama"/>
                    <ul>
                        <div className="textos">
                            <h4>Kauan Gama</h4>
                            <p>ADS</p>
                            <p>1º Período</p>
                        </div>
                    </ul>
                </div>
                <div className="nomes">
                    <img className="foto" src="imagens/pedro.jpeg" alt="Pedro Kurtz"/>
                    <ul>
                        <div className="textos">
                            <h4>Pedro Kurtz</h4>
                            <p>ADS</p>
                            <p>1º Período</p>
                        </div>
                    </ul>
                </div>
            </div>
        </Estilo>
    );
}

export default NovoComponente;
