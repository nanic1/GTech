# CASOS DE USO

## Visualização de Projetos
Ator: Alunos, Professores, Contratantes, Usuários gerais.<br>
Descrição: O usuário visualiza a lista de projetos disponíveis no sistema<br>
Pré-condição: O usuário deve entrar na aba/site onde ficam localizados os projetos.<br>
Fluxo Principal:
* O usuário acessa a página de projetos.
* O sistema carrega e exibe a lista de projetos.
* O usuário visualiza a lista de projetos disponíveis.<br>
Pós-condição: O usuário visualiza a lista completa de projetos.

## Detalhamento de Projeto
Ator: Alunos, Professores, Usuários gerais, Contratantes<br>
Descrição: O usuário seleciona um projeto da lista para ver mais detalhes.<br>
Pré-condição: Clicar no botão "ver mais" para abrir o detalhamento.<br>
Fluxo Principal:
* O usuário localiza o projeto desejado na lista.
* O usuário clica no botão "ver mais".
* O sistema exibe os detalhes do projeto, como descrição, responsável, data de conclusão, etc.<br>
Pós-condição: O usuário visualiza as informações detalhadas do projeto.

## Filtrar Projetos
Ator: Alunos, Professores, Usuários gerais, Contratantes<br>
Descrição: O usuário aplica filtros para restringir a lista de projetos exibidos.<br>
Pré-condição: O usuário deve clicar no botão "filtrar" e selecionar os filtros.<br>
Fluxo Principal:
* O usuário acessa a página de projetos.
* O usuário clica no botão "filtrar".
* O sistema exibe as opções de filtros.
* O usuário escolhe os critérios de filtro (ex.: curso, data, tecnologia).
* O sistema atualiza a lista com os projetos filtrados.<br>
Pós-condição: A lista de projetos é exibida de acordo com os filtros aplicados.

## Pesquisar Projetos
Ator: Alunos, Professores, Usuários gerais, Contratantes<br>
Descrição: O usuário usa uma barra de pesquisa para encontrar projetos por palavras-chave.<br>
Pré-condição: O usuário deve clicar no botão da barra de pesquisa.<br>
Fluxo Principal:
* O usuário clica na barra de pesquisa.
* O usuário insere palavras-chave relacionadas ao projeto.
* O sistema exibe os projetos que correspondem aos termos inseridos.<br>
Pós-condição: O usuário visualiza os projetos que correspondem à pesquisa realizada.

## Entrar em Contato com o Aluno
Ator: Contratante<br>
Descrição: O sistema exibe o e-mail dos alunos no detalhamento do projeto, permitindo contato.<br>
Pré-condição: O contratante deve abrir o detalhamento do projeto.<br>
Fluxo Principal:
* O contratante visualiza a lista de projetos.
* O contratante clica em "ver mais" em um projeto de interesse.
* O sistema exibe os detalhes do projeto, incluindo o e-mail do aluno responsável.
* O contratante copia o e-mail e entra em contato.<br>
Pós-condição: O contratante obtém o e-mail do aluno para iniciar contato.

## Login do Administrador
Ator: Administrador<br>
Descrição: O administrador faz login no sistema usando suas credenciais.<br>
Pré-condição: O administrador deve ter uma conta válida no sistema e clicar no botão de login.<br>
Fluxo Principal:
* O administrador acessa a página de login.
* O administrador insere suas credenciais.
* O sistema verifica as credenciais e concede acesso ao painel administrativo.<br>
Pós-condição: O administrador é autenticado e tem acesso ao painel de administração.

## Adicionar Novo Projeto
Ator: Administrador<br>
Descrição: O administrador pode adicionar um novo projeto ao sistema.<br>
Pré-condição: O administrador deve estar logado e clicar no botão "novo projeto".<br>
Fluxo Principal:
* O administrador acessa o painel de administração.
* O administrador clica no botão "novo projeto".
* O sistema exibe um formulário para o preenchimento dos dados do projeto.
* O administrador insere os dados do projeto e clica em "salvar".
* O sistema armazena o novo projeto.<br>
Pós-condição: O novo projeto é adicionado ao sistema.

## Editar Projeto
Ator: Administrador<br>
Descrição: O administrador pode editar as informações de um projeto existente.<br>
Pré-condição: O administrador deve estar logado e o projeto deve existir no sistema.<br>
Fluxo Principal:
* O administrador acessa o painel de administração.
* O administrador localiza o projeto desejado.
* O administrador clica em "editar".
* O sistema exibe o formulário com os dados do projeto.
* O administrador ajusta os dados e clica em "salvar".
* O sistema atualiza o projeto no banco de dados.<br>
Pós-condição: As informações do projeto são atualizadas no sistema.

## Excluir Projeto
Ator: Administrador<br>
Descrição: O administrador pode excluir um projeto do sistema.<br>
Pré-condição: O administrador deve estar logado e o projeto deve existir no sistema.<br>
Fluxo Principal:
* O administrador acessa o painel de administração.
* O administrador localiza o projeto a ser excluído.
* O administrador clica em "excluir".
* O sistema solicita confirmação.
* O administrador confirma a exclusão.
* O sistema remove o projeto do banco de dados.<br>
Pós-condição: O projeto é removido do sistema.
