# Detalhamento dos requisitos funcionais:


#O sistema deve apresentar a listagem dos projetos dos alunos
     - O sistema deve apresentar uma listagem dos projetos através de páginas para facilitar a referência (pequenos quadrados citando o nome do projeto, com imagem e botão de "ver mais" para abrir demais informações do projeto)
     - Na listagem dos projetos, cada projeto terá uma visão prévia do que ele se trata, tendo o máximo de conteudo necessario, porem sem poluicao da tela (apenas nome do projeto, imagem, curso e linguagem utilizada)
     - Deve apresentar também um botão de voltar para a página referenciada e não para a página zero (na parte superior esquerda da tela)
     - ⁠O sistema deve organizar a exibição dos projetos em colunas
   
O sistema deve possibilitar uma identificação do administrador, tendo um login apenas para ele (somente ele irá add/modificar/remover projetos), os demais usuários NÃO precisarão de cadastro para ter acesso ao sistema:
     - O sistema deve conter um botão de login que deve direcionar o adm para uma pag de login
     - O email e a senha do administrador deve ser o unico metodo de fazer login(de forma discreta para evitar invasores ou pessoas não liberadas para login)
     - O sistema deve conter um botão de logout, que SÓ irá aparecer se o ADM estiver logado
     - O sistema deve possibilitar recuperar a senha caso seja esquecida
     
O sistema deverá ter busca de projetos através de filtros, botão de limpar filtros e barra de busca
     - Os filtros devem ser: linguagem de programação ou ferramentas, cursos, unidade
     - Deve possuir um botão para selecionar os filtros desejados, e ao clicar nesse botão, aparecerão outros sub-filtros
     - Deve ter um botão para limpar os filtros escolhidos
     - Deve conter uma barra de busca, para facilitar na hora de pesquisar por nome
     
O sistema deverá ter uma explicação do que se trata cada projeto e duração do mesmo
     - Ao clicar no botão "ver mais", o sistema deve abrir uma nova aba e apresentar mais imagens do projeto e uma sessão de descrição geral em texto embaixo das imagens 
     
O sistema deve apresentar o perfil, a função individual e o período de cada integrante do projeto
    - Ao lado dos nomes e contatos dos integrantes, apresentar a função que cada um teve naquele determinado projeto
    - O sistema deve conter um link "sobre nós" que vai especificar os detalhes sobre os integrantes
    
O sistema deve apresentar a linguagem de programação, as tecnologias e ferramentas para a criação dos projetos (após a descrição do projeto)
    - Se algum estudo ou referência for ultilizado para a realização do projeto isso deverá ser apresentado e com o link para essa fonte
    - A linguagem deve ser referenciada com forma de simbolos e de forma não escrita
    
O sistema deve apresentar o Email para contato e o nome dos integrantes do projeto, ou da plataforma. (após a descrição do projeto, embaixo das linguagens e tecnologias)
    - A forma de contato com os integrantes deve ser adicionada pelo ADM 
    - Essa forma de contato dever ser facil de se localizar dentro do perfil

# Detalhamento dos requisitos não funcionais:

O sistema deverá utilizar uma API de Banco de dados armazenando os projetos
      - Permitir o envio de dados para o sistema através de uma API fornecida pelo cliente
      
O sistema deve ser compatível com os principais navegadores e dispositivos móveis, incluindo computadores, tablets e celulares, fazer um layout responsivo
      - O sistema deverá ser flexivel e compativel com qualquer alteração de tamanho da janela que o usuário fizer (layout responsivo)
      - O sistema deverá ser compativel para diferentes tamanhos de tela como, notebooks, desktops, celulares e tablets.
      - Para notebooks e desktops aparecem N projetos em cada pagina, para tablets aparecem N projetos por pagina, para celulares, N projetos por pagina
     - Em telas menores o botão filtrar deverá aparecer no canto superior esquerdo de uma forma mais discreta, assim como o botão de login para adms
     - Da mesma forma que, nas telas menores, o detalhamento dos projetos se encaixe de forma uniforme sem perder nenhuma informação
     
O sistema deverá possuir um design inspirado na IBMEC
      - Manter a base da identidade visual da instituição
      - Deve respeitar a paleta de cores do IBMEC
      - O conteúdo do site deve ser adequado para a instituição    

O sistema deve ser feito por javascript, react
      - O sistema será feito na linguagem de marcação de texto HTML, estilizado em CSS e por ultimo, programado com Javascript. (notas: talvez usemos react, decidir isso em grupo)
