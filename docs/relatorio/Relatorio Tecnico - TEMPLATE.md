`ARCADE`  

`Análise e Desenvolvimento de Sistemas` 

## Participantes

O grupo é composto por:

> - Débora Pereira Fonseca
> - João Carlos Gonçalves Miranda
> - João Victor Ribeiro da Silva
> - Luiz Sérgio Aires Machado Júnior
> - Marcus Vinicius Ferreira Clemente
> - Savio Belfort Nascimento Gama

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas](#personas)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
- [Projeto da Solução](#projeto-da-solução)
  - [Wireframes](#wireframes)
  - [Mapa de navegação](#mapa-de-navegação)
- [Conclusões](#avaliação-da-aplicação)
  
# Introdução
Na era atual, o interesse por leitura, séries e filmes tem se expandido exponencialmente, impulsionado pelo desejo crescente de enriquecer as experiências nesse vasto universo de entretenimento.

Dentro desse cenário, surge o projeto "ARCADE", dedicado à biblioteca de jogos, que tem como objetivo proporcionar aos entusiastas uma jornada envolvente e esclarecedora ao explorar e descobrir novos títulos. Através de descrições e sinopses criteriosamente elaboradas, a plataforma auxilia os usuários a adquirir uma compreensão completa das narrativas e, assim, tomar decisões bem informadas sobre quais jogos desejam explorar e seguir. Com uma interface intuitiva e recursos adicionais, o "ARCADE" busca proporcionar uma experiência integral aos amantes de jogos, incentivando o compartilhamento de conhecimento e a descoberta de novas aventuras virtuais.

## Problema
Atualmente, os jogadores enfrentam dificuldades para obter informações confiáveis sobre jogos devido à diversidade de plataformas e gêneros. Surge a necessidade de uma fonte confiável de informações detalhadas e imparciais. A solução proposta busca atender a essa necessidade em um mercado saturado.

## Objetivos
O objetivo do projeto "ARCADE" é ser um site confiável para informações sobre jogos e oferecer uma nova maneira de se conectar com comunidades de jogadores. Nosso site também tem como alvo pessoas de todas as idades, oferecendo uma interface intuitiva e novas experiências virtuais.

## Público-Alvo
O público-alvo do "ARCADE" é, em sua maioria, adolescentes e jovens adultos que têm um conhecimento mínimo sobre jogos e plataformas online. O nosso público majoritário busca um site confiável, e esse é um dos nossos objetivos. Nosso site também tem o foco em atingir outros públicos, que sejam mais infantis ou mais velhos e que desejem uma porta de entrada confiável. O público infantil já conhece jogos, porém um problema que essa faixa etária enfrenta pode ser não encontrar comunidades seguras. Já os mais velhos buscam comunidades para se inserirem e jogos para jogarem que se encaixem com seu perfil.

# Especificações do Projeto
A equipe conduziu entrevistas para definir precisamente o problema e identificar os pontos mais cruciais deste projeto. Os detalhes adquiridos neste estágio foram utilizados para criar personas e histórias de usuário para ajudar no desenvolvimento.

## Personas
As personas criadas durante a etapa de compreensão do problema são apresentadas a seguir:

| ![mulher](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2023-02-ti-web-1854101-jogos-eletronicos/assets/130398684/3ccf490f-6661-4b7f-89bb-a45c50251565) |
|--------------------|
* **Nome:** Isadora Ferreira
* **Idade:** 22 anos
* **Cidade:** Curitiba
* **Ocupação:** Médica Veterinária
* **Plataforma preferida:** Xbox
* **Hobbies:** Gosta de filmes e séries de TV, joga videogame casualmente, pratica esportes e toca guitarra
* **História:** Isadora trabalha em uma Clínica Veterinária. Ela adora jogar videogame em seu tempo livre e seus jogos preferidos são FPS, sendo mais voltada para um jogo online. Isadora infelizmente não possui muitos amigos que compartilhem do mesmo gosto ou que tenham interesses em jogos. Após algumas pesquisas ela encontrou a plataforma "ARCADE", onde ela conheceu uma enorme comunidade de gamers que possuíam gostos similares ao dela.

| ![homem](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2023-02-ti-web-1854101-jogos-eletronicos/assets/130398684/873a59b8-df9f-4134-9b8e-b08b1d18692a) |
|--------------------|
* **Nome:** Mauro Silveira
* **Idade:** 34 anos
* **Cidade:** Belém
* **Ocupação:** Professor
* **Plataforma preferida:** Computador
* **Hobbies:** Coleciona CDs, gosta de cozinhar, jogar jogos de tabuleiro e montar quebra-cabeças
* **História:** Mauro é professor de uma faculdade. Entre uma de suas interações com seus alunos durante os intervalos de horário, ele descobriu sobre a plataforma "ARCADE", um site onde os usuários compartilham suas experiências com seus jogos preferidos e conversam em comunidades. Como seu gênero preferido são jogos de tabuleiro e quebra-cabeças, seus alunos o apresentaram aos gêneros de simulação e puzzle. 


| ![garoto](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2023-02-ti-web-1854101-jogos-eletronicos/assets/130398684/ad7f0bb8-7cb9-4a89-b451-15f6fdb983a5) |
|--------------------|
* **Nome:** Eduardo Da Silva
* **Idade:** 13 anos
* **Cidade:** Juiz de Fora
* **Ocupação:** Estudante
* **Plataforma preferida:** Playstation
* **Hobbies:** Gosta de jogar futebol, ir ao cinema e andar de skate
* **História:** Eduardo é um amante de esportes, com isso seu gosto para jogos de futebol acabou crescendo. Ele regularmente participa de campeonatos em sua cidade e, entre esses campeonatos, conheceu a "ARCADE": uma enorme comunidade que reúne dos mais diversos jogadores que existe.

## Histórias de Usuários
Com base na análise das personas foram identificadas as seguintes histórias de usuários:

| EU COMO... | QUERO/PRECISO ... | PARA ...  |
|--------------------|------------------------------------|----------------------------------------|
|Eduardo Da Silva| Encontrar pessoas para jogar | Ter com quem jogar |
|Eduardo Da Silva| Localizar informações sobre os jogos que me interessam | Receber uma notícia ou atualização de um jogo específico |
|Eduardo Da Silva| Poder adicionar um amigo | Competir juntos e compartilhar conquistas no jogo |
|Isadora Ferreira| Poder ler notícias de um jogo facilmente no celular | O celular é portátil e fácil de carregar, tornando-o conveniente para ler notícias enquanto se desloca |
|Isadora Ferreira| Poder dar uma opinião ou fazer um comentário sobre um jogo específico | Criar interações sociais e compartilhamento de ideias |
|Isadora Ferreira| Ter a praticidade de ver jogos de uma determinada categoria | Facilidade para acessar temas específicos em um gênero ou categoria de jogos |
|Mauro Silveira| Receber notificações de um determinado jogo | Me manter atualizado |

## Requisitos
As tabelas a seguir apresentam os requisitos funcionais e não funcionais do projeto. 

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve conter uma opção de criação de conta para o usuário | ALTA |
|RF-002| Oferecer uma funcionalidade de filtro/pesquisa para permitir ao usuário localizar um jogo específico  | ALTA |
|RF-003| Permitir usuário salvar um jogo em sua lista de desejos | MÉDIA |
|RF-004| Conter vídeos e imagens demonstrativas do jogo | ALTA |
|RF-005| Permitir usuário comentar sua análise/opinião na página do respectivo jogo | BAIXO |
|RF-006| O site deve conter um sistema de amizade | ALTA |
|RF-007| Envio de notificação para uma solicitação de amizade e quando um jogo desejado recebe uma atualização/evento | MÉDIA |
|RF-008| O site deve ter notícias atualizadas na página do jogo | MÉDIA |
|RF-009| O site deve apresentar os jogos por categoria | ALTA |

### Requisitos não funcionais

|ID     | Descrição do Requisito  | Prioridade |
|-------|-----------------------------------------|----|
|RNF-001| O site deve ser compatível com a maioria dos navegadores | ALTA |
|RNF-002| Ser de fácil usabilidade e acessibilidade | ALTA |
|RNF-003| O site deve se manter estável, mesmo durante as manutenções | MÉDIA |
|RNF-004| Ser extremamente cauteloso com informações sensíveis, como por exemplo, informações pessoais do usuário | ALTA |
|RNF-005| Ser responsivo e compatível com as diferentes plataformas | ALTA |

### Restrições
O projeto deve ser entregue no dia 05 de dezembro, ao final do semestre. É importante atentar-se a esse prazo para não compremeter o resultado.

# Projeto da Solução
O GitHub foi utilizado para repositório de código fonte e documentação do projeto. Os Wireframes e Diagrama de Navegação foram feitos no Miro e foi utilizado o quadro Kanban para gerenciamento do projeto.
Para o desenvolvimento do projeto Web, utilizamos HTML, CSS, Bootstrap e JavaScript.

## Wireframes

#### Tela - Login
A tela de login conta com um sistema de verificação para que o usuário consiga acessar a página.

![login](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2023-02-ti-web-1854101-arcade/assets/130398684/1aeb221b-c316-4e1a-a87e-1eb18830d328)

#### Tela - Cadastro
A tela de cadastro conta com um sistema de cadastro onde o usuário informa seus dados e se ele deseja receber notificações do site em seu e-mail.

![cadastro](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2023-02-ti-web-1854101-arcade/assets/130398684/94a414cc-5fdc-4aee-aa0e-f1da7d4ded1f)

#### Tela - Home
A tela principal mostra os jogos em destaque e os que já possuem data para lançamento em breve. Além disso, possui um componente de pesquisa que permite ao usuário encontrar o jogo que deseja e uma parte onde será possível filtrar os jogos através da escolha de gênero de um jogo. Desta página, assim como das outras a seguir, é possível acessar também a tela de comunidade, perfil do usuário e uma tela sobre o projeto.

![home](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2023-02-ti-web-1854101-arcade/assets/130398684/b4bb062a-a007-4fc9-b64f-1eb345f1c218)

#### Tela - Perfil
A tela de perfil conta com uma interface onde o usuário poderá colocar sua foto e seu nome. Além disso, é possível que o jogador entre na página de "Amigos", "Notificações" e "Lista de desejos". Se desejar sair da sua conta, mais abaixo é possível encontrar um botão para isso.

![perfil](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2023-02-ti-web-1854101-arcade/assets/130398684/40a61220-5b34-4802-9301-10fc250968f2)

#### Tela - Gênero
A tela de gênero irá mostrar ao usuário todos os jogos do gênero que foi escolhido anteriormente.

![genero](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2023-02-ti-web-1854101-arcade/assets/130398684/06679eed-a640-41e9-b729-6127014cee1a)

#### Tela - Jogo
A tela de jogos consta uma imagem do jogo que foi escolhido pelo usuário, assim como uma breve descrição, trailer e atualizações. Além disso, é possível que o jogador deixe um breve comentário na página para que outras pessoas possam ler também.

![jogo](https://github.com/ICEI-PUCMinas-PSG-SI-TI/psg-si-2023-02-ti-web-1854101-arcade/assets/130398684/128ffcc4-353e-49e5-b8be-e326fed6ce27)

## Mapa de navegação
O Diagrama de Navegação pode ser encontrado no link a seguir:
https://miro.com/app/board/uXjVMoZx6No=/?share_link_id=703808388196

# Conclusões
O arcade atinge sua principal meta sendo um site confiável de informações para a comunidade Gamer, onde jogadores podem pesquisar a respeito das atualizações de seus jogos preferidos, além de acompanhar suas novidades, e apresentar jogos e comunidades para players de todas as idades.

A um futuro próximo o Arcade propõe novas atualizações, como uma aba para comunidade, onde os usuários poderão compartilhar suas experiências com seus jogos preferidos, além de uma interface editável ao gosto do usuário.

As dificuldades notadas durante o desenvolvimento, foi a decisão a respeito da quantidade de telas e incerteza em relação ao modelo do site.



