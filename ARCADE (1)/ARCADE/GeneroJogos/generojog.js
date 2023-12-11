const apiData = [
  
  {
    id: 11,
    nome: "NBA 2K24",
    descricao: "Experimente a intensidade do basquete como nunca antes em NBA 2K24, o mais recente lançamento da renomada franquia de simulação de basquete.",
    genero: "Esporte",
    imagem: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70070000018343/6438941d1a6aed43c898e300cb25968ee0e773a44191544b7bc3e3ef5dfaa8b4",
    noticias: "NBA 2K24 se torna o pior jogo da história após avaliação de usuários. O NBA 2K24 foi eleito o pior jogo de videogame da história na plataforma Steam...",
    trailer: "https://cdn.akamai.steamstatic.com/steam/apps/256968106/movie480_vp9.webm?t=1694019888",
    comentarios: ["Com gráficos incríveis!", "A jogabilidade deixou a desejar.", "Esperava mais inovação."]
  },
  {
    id: 12,
    nome: "EA SPORTS FC™ 24",
    descricao: "Prepare-se para a emoção do futebol com o EA SPORTS FC™ 24, agora com a emocionante atualização gratuita da UEFA Euro 2024.",
    genero: "Esporte",
    imagem: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000061749/bd653d83bdcc1613cfacae62845933633ce97fffc52e7e4070014eb41f9e75f7",
    noticias: "UEFA Euro 2024 chega gratuitamente ao EA Sports FC 24 em 2024. Hoje (23), a Electronic Arts anunciou que a UEFA EURO 2024 convidará os jogadores do EA SPORTS FC™ 24...",
    trailer: "https://cdn.akamai.steamstatic.com/steam/apps/256973023/movie480_vp9.webm?t=1696287435",
    comentarios: ["Mal posso esperar pela atualização!", "Os gráficos estão incríveis.", "EA fazendo história no mundo do futebol virtual."]
  },
  {
    id: 13,
    nome: "Mortal Kombat 1",
    descricao: "Prepare-se para a brutalidade de Mortal Kombat 1, o game que redefine a ação e esportes de luta com uma incrível variedade de personagens e movimentos.",
    genero: "Ação",
    imagem: "https://cdn1.epicgames.com/offer/fda0f2b4047f46ffb4e94d5595c1468e/EGS_MortalKombat1PremiumEdition_NetherRealmStudios_Editions_S1_2560x1440-43d47cfc125118b13b26cea9c80ae15c",
    noticias: "Fãs de Mortal Kombat 1 fazem 'gambiarra' para evitar microtransações. Com uma forte aposta na monetização, Mortal Kombat 1 é o game da franquia que traz mais conteúdos pagos...",
    trailer: "https://cdn.akamai.steamstatic.com/steam/apps/256961756/movie480_vp9.webm?t=1691093271",
    comentarios: ["Os fatalities são incríveis!", "Difícil resistir aos conteúdos pagos.", "A comunidade encontrou uma boa solução para as microtransações."]
  },
  {
    id: 14,
    nome: "Need for Speed™",
    descricao: "Sinta a adrenalina nas ruas com Need for Speed™, o jogo que promete uma experiência intensa de corrida com uma lista impressionante de 51 carros totalmente customizáveis.",
    genero: "Esporte",
    imagem: "https://image.api.playstation.com/cdn/UP0006/CUSA01925_00/RxeNb9Ph1y2VhBGv5Ct0tuY6f5xC4t9f.png",
    noticias: "Com os preparativos para o lançamento da aguardada nova versão de Need for Speed, a desenvolvedora sueca Ghost Games anunciou todos os carros que estarão no jogo...",
    trailer: "https://cdn.akamai.steamstatic.com/steam/apps/256786654/movie480_vp9.webm?t=1591282622",
    comentarios: ["A lista de carros é impressionante!", "Sem microtransações? Estou dentro!", "Ansioso pelo lançamento."]
  },
  {
    id: 15,
    nome: "Forza Horizon 4",
    descricao: "Explore o mundo aberto e dinâmico de Forza Horizon 4, mas esteja ciente de que os serviços online de Forza Horizon 1 e 2 serão desligados em breve.",
    genero: "Esporte",
    imagem: "https://t.ctcdn.com.br/tXNBQsCdYSW_5qLp3MHTvMrldTo=/1200x675/smart/i493194.jpeg",
    noticias: "Serviços online de Forza Horizon 1 e 2 serão desligados. A Turn10 Studios, desenvolvedora por trás dos populares jogos Forza Horizon 1 e Forza Horizon 2, anunciou...",
    trailer: "https://cdn.akamai.steamstatic.com/steam/apps/256820720/movie480_vp9.webm?t=1612810706",
    comentarios: ["Triste notícia sobre os serviços online.", "Hora de aproveitar enquanto ainda podemos!", "Forza Horizon 4 é incrível."]
  },
  {
    id: 16,
    nome: "Forza Horizon 5",
    descricao: "Descubra a emocionante colaboração entre a Playground Games e a Rivian em Forza Horizon 5, que traz dois novos veículos elétricos para desbloquear e pilotar.",
    genero: "Esporte",
    imagem: "https://i0.wp.com/news.xbox.com/pt-br/wp-content/uploads/sites/8/2021/08/Forza_gamescom_HERO-1.jpg?resize=1920%2C1080&ssl=1",
    noticias: "A Playground Games, desenvolvedora do popular jogo Forza Horizon 5, anunciou nesta semana uma colaboração com a Rivian, fabricante americana de veículos elétricos...",
    trailer: "https://cdn.akamai.steamstatic.com/steam/apps/256859757/movie480_vp9.webm?t=1636489104",
    comentarios: ["Veículos elétricos são uma adição interessante.", "Mal posso esperar pelos novos desafios.", "Forza Horizon 5 vai ser épico!"]
  },
  {
    id: 17,
    nome: "F1® 23",
    descricao: "Experimente a emoção da Fórmula 1 em F1® 23, mas esteja ciente das advertências emitidas aos chefes de equipe Toto Wolff e Frédéric Vasseur por xingamentos em coletiva.",
    genero: "Esporte",
    imagem: "https://media.contentapi.ea.com/content/dam/ea/f1/f1-23/common/featured-image/f123-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg",
    noticias: "F1: Wolff e Vasseur são advertidos pelos comissários por xingamentos em coletiva do GP de Las Vegas. A direção de prova da FIA anunciou na manhã desta quinta-feira...",
    trailer: "https://cdn.akamai.steamstatic.com/steam/apps/256954435/movie480_vp9.webm?t=1687382288",
    comentarios: ["A F1 está ficando cada vez mais intensa!", "Comissários agindo com rigor.", "Espero mais fair play na próxima corrida."]
  },
  {
    id: 18,
    nome: "WWE 2K23",
    descricao: "Entre no ringue e divirta-se com WWE 2K23, o game que oferece uma experiência emocionante com uma variedade de lutadores, incluindo lendas e estrelas atuais da WWE.",
    genero: "Esporte",
    imagem: "https://cdn.wrestletalk.com/wp-content/uploads/2022/03/WWE-2K23.png",
    noticias: "WWE 2K23: vale a pena? É impossível não se divertir jogando WWE 2K23. Tá bom, não é tão legal quanto os games desse gênero dos tempos de Nintendo 64, mas ainda assim, uma experiência bacana...",
    trailer: "https://cdn.akamai.steamstatic.com/steam/apps/256938239/movie480_vp9.webm?t=1680028225",
    comentarios: ["John Cena sempre será meu favorito!", "Muitos lutadores para escolher.", "Modos de jogo"],
},
{
    id: 19,
    nome: " Stardew Valley",
    descricao:"",
    genero: "Simulaçao",
    imagem: " https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg?t=1666917466",
    noticias: " Stardew Valley 1.6: veja lista de novidades da atualização.  Anteriormente, em abril deste ano, Barone havia indicado que o novo patch seria focado em adicionar melhorias para facilitar a comunidade de criadores de mods para o simulador de vida no campo, mas pelo visto ConcernedApe teve um lampejo de criatividade extra. Afinal, em sua recente publicação sobre o status da atualização, ele deixou bem claro que vem muita coisa legal por aí.",
    trailer : " https://cdn.cloudflare.steamstatic.com/steam/apps/256660296/movie480.webm?t=1454099186",
    comentarios: ["Perfeito. Ótimo para jogar com amigos, trilha sonora calminha, gráficos fofos e histórias bonitinhas", "Relaxante e cativante. Stardew Valley me distraiu por muitos momentos difíceis."," não tenho mais vida social mas a fazenda ta em dia. recomendo"]
},
{
    id: 20,
    nome: "The Sims 4",
    descricao:"",
    genero: "Simulaçao",
    imagem: " https://cdn.cloudflare.steamstatic.com/steam/apps/1222670/header.jpg?t=1700160976",
    noticias: " Seja um Sim Proprietário de sucesso com o The Sims 4 Pacote de Expansão Aluga-se. No The Sims 4 Pacote de Expansão Aluga-se, será possível construir e criar uma variedade de residências, incluindo casas, duplexes, apartamentos e mais! Simmers vão descobrir que viver perto de outras pessoas pode resultar em relacionamentos harmoniosos para unir a comunidade... ou instaurar o caos nela! Agora, abra a porta e prepare-se para deixar o drama entrar!",
    trailer : " https://cdn.cloudflare.steamstatic.com/steam/apps/256980388/movie480_vp9.webm?t=1699288095",
    comentarios: ["Jogo maravilhoso, merecia multiplayer!", " Apesar de eu ser um grande fã da franquia Sims, acho o sistema de DLC's algo cara de pau e desonesto, não faz sentido pagar por um conteudo que deveria estar no jogo desde seu lançamento"," É ótimo para simular uma vida que você gostaria de ter."]
},
{
    id: 21,
    nome: "Euro Truck Simulator 2",
    descricao:"",
    genero: "Simulaçao",
    imagem: " https://cdn.cloudflare.steamstatic.com/steam/apps/227300/header.jpg?t=1700739799",
    noticias: " Euro Truck Simulator 2 passa a conta com caminhão de distribuição DAF. O mais novo caminhão disponível para o Euro Truck Simulator 2 foi anunciado. A partir de agora, os jogadores terão a disposição da nova linha DAF XD, um caminhão voltado para a distribuição urbana de mercadoria, que é o primeiro do tipo dentro do simulador.",
    trailer : " https://cdn.cloudflare.steamstatic.com/steam/apps/256882174/movie480_vp9.webm?t=1683632053",
    comentarios: ["Jogo muito bem construído. Com a possibilidade da adição de MODs o game fica ainda mais atrativo!", " Jogo simples mas muito bom para passar o tempo e curtir a evolução da sua frota"," Nem sou fã de caminhão, mas é daora jogar o jogo. Da pra perceber que a empresa se importa com os jogadores e busca sempre trazer melhorias ao jogo."]
},
{
    id: 22,
    nome: " Jurassic World Evolution 2",
    descricao:"",
    genero: "Simulaçao",
    imagem: " https://cdn.cloudflare.steamstatic.com/steam/apps/1244460/header.jpg?t=1700748244",
    noticias: " PACOTE DE PREDADORES DO CRETÁCEO E ATUALIZAÇÃO 8 CHEGAM EM 30 DE NOVEMBRO DE 2023. Proporcione aos visitantes do seu parque uma experiência extraordinária com quatro novas espécies únicas do período Cretáceo: répteis pré-históricos que merecem sua fama de poderosos. Sem dúvida, serão adições fantásticas para seus parques. Uma atualização gratuita também chega em 30 de novembro! Traremos alguns recursos bem interessantes na Atualização 8, que estará disponível para todos os jogadores no PC, PlayStation e Xbox.",
    trailer : " https://cdn.cloudflare.steamstatic.com/steam/apps/256859644/movie480_vp9.webm?t=1686217856",
    comentarios: ["Simplesmente o melhor jogo de dinossauros da atualidade, seja para construir um parque/zoo ou só pra ficar olhando os dinossauros existirem", " Achei o jogo incrível! minha única reclamação é a campanha ser muito curta"," Jogo muito bom, os dinossauros são bem realistas , mas o jogo é um pouco mal otimizado"]
},
{
    id: 23,
    nome: "Surviving Mars",
    descricao:"",
    genero: "Simulaçao",
    imagem: " https://cdn.cloudflare.steamstatic.com/steam/apps/464920/header.jpg?t=1700137869",
    noticias: " Surviving Mars atraiu 5 milhões de jogadores e mudou de desenvolvedor, e um novo DLC será lançado este ano. A Paradox Interactive anunciou a retomada do suporte para o simulador de construção de cidades no Red Planet Surviving Mars – o jogo será gerenciado pelo estúdio Abstraction Games. Além disso, a editora revelou que ao longo de toda a existência do projeto, 5 milhões de jogadores o lançaram em todas as plataformas.  A Paradox and Abstraction Games também anunciou que uma expansão massiva para Surviving Mars está em desenvolvimento e será lançada este ano.",
    trailer : " https://cdn.cloudflare.steamstatic.com/steam/apps/256737064/movie480.webm?t=1543582962",
    comentarios: ["O jogo é legal? Sim. Mas atualmente não existe mais comunidade no jogo, os mods criados não são mais atualizados, o jogo se torna bem monótono.", " Surviving Mars é um dos melhores jogos do gênero, possuindo uma atmosfera e jogabilidade totalmente diferente do encontrado em outros jogos"," Muito legal!! Viciante"]
},


{
    id: 24,
    nome: " Cities: Skylines II",
    descricao:"",
    genero: "Simulaçao",
    imagem: " https://cdn.cloudflare.steamstatic.com/steam/apps/949230/header.jpg?t=1700492572",
    noticias: " Cities: Skylines 2 adia Passe de Temporada enquanto jogo-base é consertado. A Paradox Interactive anunciou que decidiu adiar um pouco o lançamento do Passe de Temporada de Cities: Skylines 2. Segundo a companhia, a decisão é resultante do fato de que ela quer permitir que os membros do estúdio Colossal Order tenham o tempo necessário para finalizar os ajustes dos quais o jogo-base precisa.",
    trailer : " https://cdn.cloudflare.steamstatic.com/steam/apps/256977928/movie480_vp9.webm?t=1698163155",
    comentarios: ["O jogo está muito mal-otimizado, não recomendaria ninguém a comprar até ajeitarem o game", " Apesar dos problemas de desempenho, o jogo é muito bom, não me arrependi de ter comprado.","Simplesmente o melhor city build de todos os tempos."]
},
{
    id: 25,
    nome: " Oxygen Not Included",
    descricao:"",
    genero: "Simulaçao",
    imagem: " https://cdn.cloudflare.steamstatic.com/steam/apps/457140/header_alt_assets_12.jpg?t=1700199887",
    noticias: "Ao invés de DLC para o jogo, desenvolvedores decidem fazer atualizações gratuitas. Oxygen Not Included não receberá mais DLC, anunciou a Klei Entertainment. Eles explicaram que quanto mais DLC eles fizessem, mais difícil seria manter para todos. Então, em vez disso, eles estão “mudando nosso foco para construir muitos dos mesmos conteúdos e sistemas que você esperaria de uma DLC, e lançá-los regularmente como atualizações gratuitas de jogos que funcionam tanto para o jogo base quanto para Spaced Out”. ",
    trailer : " https://cdn.cloudflare.steamstatic.com/steam/apps/256983075/movie480_vp9.webm?t=1700199880",
    comentarios: ["Jogo incrível, mas recomendo fazer facul de engenharia antes de fazer as paradas de automação", " Difícil demais, recomendo"," otimo jogo, porém leva um tempo até acostumar com as diversas mecânicas apresentadas."]
},

{
    id: 26,
    nome: " My Time at Sandrock",
    descricao:"",
    genero: "Simulaçao",
    imagem: " https://cdn.cloudflare.steamstatic.com/steam/apps/1084600/header_brazilian.jpg?t=1700732786",
    noticias: " RPG Sandbox do Velho Oeste 'My Time at Sandrock' agora disponível em consoles Xbox. Desenvolvedor JOGOS PATHEA e editora PM Studios anunciaram que a última sequência de seu sucesso multimilionário 'My Time at Portia', 'My Time at Sandrock', já está disponível em consoles Xbox. Neste jogo de RPG sandbox lifesim slash, os jogadores salvarão uma cidade à beira do colapso, restaurarão sua antiga glória, assumirão missões emocionantes, criarão, criarão relacionamentos significativos - e jogarão com até quatro jogadores online mais tarde. uma atualização chegando no verão de 2024.",
    trailer : " https://cdn.cloudflare.steamstatic.com/steam/apps/256978192/movie480_vp9.webm?t=1698242881",
    comentarios: ["Joguinho de fazenda simplesmente não tem como ser ruim.", " Não sabia que iria gostar tanto desse jogo, me levou até a jogar o seu antecessor."," Não esperava menos! Por mais esteja em beta, o jogo está incrivel! muitas coisas novas, aguardando o modo multiplayer também, unica coisa que precisa é corrigir os erros no idioma em portugues."]
},
{
    id: 27,
    nome: "Need for Speed™",
    genero: "Corrida",
    imagem: "https://image.api.playstation.com/cdn/UP0006/CUSA01925_00/RxeNb9Ph1y2VhBGv5Ct0tuY6f5xC4t9f.png",
    noticias: "Com os preparativos para o lançamento da aguardada nova versão de Need for Speed, a desenvolvedora sueca Ghost Games anunciou todos os carros que estarão no jogo. A EA já havia revelado alguns veículos e avisou que uma lista completa seria divulgada em breve -- e aqui está ela.São 51 carros no total, incluindo marcas clássicas como BMW, Mercedes, Ferrari e muitas outras, que poderão ser completamente customizados sem a obrigação de se pagar mais por isso: a EA afirmou que Need For Speed não terá microtransações e não possui planos de lançar um DLC pago.O game será lançado para PlayStation 4 e Xbox One no dia 3 de novembro, enquanto a versão para PC foi adiada para 2016.",
    trailer : "https://cdn.akamai.steamstatic.com/steam/apps/256786654/movie480_vp9.webm?t=1591282622",
    comentarios: ["", "",""]
},

{
    id: 28,
    nome: "Forza Horizon 4",
    genero: "Corrida",
    imagem: "https://t.ctcdn.com.br/tXNBQsCdYSW_5qLp3MHTvMrldTo=/1200x675/smart/i493194.jpeg",
    noticias: "Serviços online de Forza Horizon 1 e 2 serão desligados.A Turn10 Studios, desenvolvedora por trás dos populares jogos Forza Horizon 1 e Forza Horizon 2, anunciou nesta semana que encerrará os serviços online destes dois jogos a partir deste ano. Conforme o comunicado emitido pela empresa, eles perderam conexão com os servidores no dia 22 de agosto.O estúdio justificou a decisão afirmando que, devido à idade desses jogos e ao número atual de jogadores que utilizam seus serviços online, preferiu se concentrar em desenvolver seus jogos mais recentes​. Os títulos chegaram às plataformas há mais de uma década, com o primeiro em 2012 e o segundo em 2014.",
    trailer : "https://cdn.akamai.steamstatic.com/steam/apps/256820720/movie480_vp9.webm?t=1612810706",
    comentarios: ["", "",""]
    },

{
    id: 29,
    nome: "Forza Horizon 5",
    genero: "Corrida",
    imagem: "https://i0.wp.com/news.xbox.com/pt-br/wp-content/uploads/sites/8/2021/08/Forza_gamescom_HERO-1.jpg?resize=1920%2C1080&ssl=1",
    noticias: "A Playground Games, desenvolvedora do popular jogo Forza Horizon 5, anunciou nesta semana uma colaboração com a Rivian, fabricante americana de veículos elétricos. A parceria traz dois novos veículos elétricos para o jogo: o Rivian R1T, um caminhão todo-terreno, e o Rivian R1S, um SUV de luxo.Os jogadores poderão desbloquear esses veículos elétricos ao completar desafios específicos no Festival Playlist. O Rivian R1T será desbloqueado na segunda semana do Horizon Creatives, através do desafio “Mudslinger’s Scramble”. Já o Rivian R1S poderá ser obtido na terceira semana, completando o desafio “Stadium Supercross”.",
    trailer : "https://cdn.akamai.steamstatic.com/steam/apps/256859757/movie480_vp9.webm?t=1636489104",
    comentarios: ["", "",""]
    },

{
    id: 30,
    nome: "F1® 23",
    genero: "Corrida",
    imagem: "https://media.contentapi.ea.com/content/dam/ea/f1/f1-23/common/featured-image/f123-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg",
    noticias: "F1: Wolff e Vasseur são advertidos pelos comissários por xingamentos em coletiva do GP de Las Vegas.Caso foi repassado para esta semana a pedido dos comissários do GP de Las Vegas.A direção de prova da FIA anunciou na manhã desta quinta-feira (23) a convocação dos chefes da Mercedes e da Ferrari, Toto Wolff e Frédéric Vasseur, para comparecerem perante os comissários e explicarem o uso de certa linguagem durante a coletiva para o GP de Las Vegas de Fórmula 1. Após a audiência, ambos foram formalmente advertidos pelo comportamento.Os dois participaram da coletiva dos chefes de equipe, realizada pouco após o cancelamento do TL1 devido ao incidente de Carlos Sainz. Devido às grandes forças dos assoalhos dos carros atuais da F1 na era efeito solo, o concreto ao redor da tampa do bueiro não resistiu e acabou se soltando, danificando o SF-23 do espanhol.",
    trailer : "https://cdn.akamai.steamstatic.com/steam/apps/256954435/movie480_vp9.webm?t=1687382288",
    comentarios: ["", "",""]
    },

{
    id: 31,
    nome: "Offroad Survival",
    genero: "Corrida",
    imagem: "https://www.aroged.com/wp-content/uploads/2023/08/Offroad-Survival-Announced.jpeg",
    noticias: "Offroad Survival: Com o movimento cada vez maior em direção a aventuras mais profundas no interior, o mercado de trailers de camping verdadeiramente robustos está mais forte do que nunca. Existem muitos trailers que foram adaptados para uso fora da rede. E há alguns que são projetados especificamente para trabalhos difíceis em locais e caminhos que não chegam nem perto de se assemelhar à civilização ou às estradas.Nós vasculhamos o planeta para trazer a você uma coleção de alguns dos mais resistentes trailers de camping off-road e off-grid. Cada um tem seu próprio caráter e design, mas todos apresentam equipamentos (muitas vezes padrão) que os empurram da categoria “adaptada” para um domínio mais elevado de terreno sério e gerenciamento climático severo.",
    trailer : "https://cdn.akamai.steamstatic.com/steam/apps/256961874/movie480_vp9.webm?t=1691150854",
    comentarios: ["", "",""]
    },

{
    id: 32,
    nome: "Euro Truck Simulator 2",
    genero: "Corrida",
    imagem: "https://1.bp.blogspot.com/-NuecJ4QIMm0/XY0Worll0yI/AAAAAAAAB_s/mlC0TCrrCSsFdbM_p1SlUq9Kd7EhQ5j7ACLcBGAsYHQ/s1600/CAPA.jpg",
    noticias: "Euro Truck Simulator 2 passa a conta com caminhão de distribuição DAF.O mais novo caminhão disponível para o Euro Truck Simulator 2 foi anunciado. A partir de agora, os jogadores terão a disposição da nova linha DAF XD, um caminhão voltado para a distribuição urbana de mercadoria, que é o primeiro do tipo dentro do simulador.O caminhão é bem menor que a linha XF/XG, mas a cabine ainda é espaçosa e confortável, com diversas opções de tecnologia e segurança, como o DAF Digital Vision System, que substitui os retrovisores por câmeras e telas, a janela Corner View, na porta direita, entre outros.",
    trailer : "https://cdn.akamai.steamstatic.com/steam/apps/256962665/movie480_vp9.webm?t=1691582123",
    comentarios: ["", "",""]
    },

{
    id: 33,
    nome: "Euro Truck Simulator",
    genero: "Corrida",
    imagem: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000057936/6874e7f822d82a8c9c98e1347e286c19911f6ea27f8098a3377525b50766e58b",
    noticias: "Euro Truck Simulator é um simulador que coloca você na boléia de um caminhão, transportando uma sorte de cargas através das estradas européias.Para tornar-se o melhor caminhoneiro, você terá que ser mais rápido do que a concorrência, levando os fretes através da Europa, sentindo toda a liberdade da estrada.O jogo não fica preso somente a direção, você também terá que gerenciar a sua empresa de transporte de cargas. Controlando o dinheiro, fazendo a manutenção do seu caminhão e tomando cuidado com as multas por excesso de velocidade.",
    trailer : "não tem",
    comentarios: ["", "",""]
    },

{
    id: 34,
    nome: "Grand Theft Auto V",
    genero: "Ação, Corrida",
    imagem: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_2560x1440_Landscaped%20Store-2560x1440-79155f950f32c9790073feaccae570fb.jpg",
    noticias: "Ex-desenvolvedor de GTA abre blog sobre os bastidores e isso não agradou a Rockstar.um ex-membro da equipe da Rockstar que trabalhou em uma série de jogos Grand Theft Auto retirou seu blog sobre os bastidores do desenvolvimento depois que alguém do estúdio entrou em contato. O ex-diretor técnico da Rockstar Games, Obbe Vermeij, iniciou o blog em 11 de novembro para discutir seu tempo na Rockstar North, o estúdio escocês por trás dos principais jogos da série Grand Theft Auto.Uma série de postagens de blog se aprofundaram no desenvolvimento dos jogos Grand Theft Auto mais antigos e até mesmo em outros projetos da Rockstar. Uma revelou novos insights sobre o colapso do desenvolvimento de Agent, um jogo que a Rockstar nunca cancelou formalmente, e outras postagens discutiram outros projetos descartados, como um jogo escocês de sobrevivência de zumbis.",
    trailer : "https://cdn.akamai.steamstatic.com/steam/apps/256656353/movie480.webm?t=1447378034",
    comentarios: ["", "",""]
    },
{
    id: 35,
    nome: "Steep™",
    genero: "Corrida",
    imagem: "https://image.api.playstation.com/cdn/UP0001/CUSA05489_00/gV7Pmv4iDwA0fnZRUbHapjIDxiMonKTv.png",
    noticias: "Percorra o mundo aberto dos Alpes, onde a neve é sempre fresca e a adrenalina nunca acaba.Domine ambientes selvagens do continente americano com a atualização grátis do Alasca: uma região nova cheia de desafios.A montanha é sua para ser explorada. Então, aperte as presilhas, se prepare e se jogue nessa!- PARTICIPE À SUA MANEIRA - Conquiste montanhas épicas com skis, wingsuits, snowboards e parapentes!- VIVA MOMENTOS INESQUECÍVEIS COM OUTROS - Participe sozinho ou se jogue próximo a outros jogadores para compartilhar momentos cheios de emoção e adrenalina.- A MONTANHA É SUA PARA SER EXPLORADA - Crie sua própria trilha através do mundo aberto e compartilhe seus melhores trajetos com amigos.- PONHA SUAS HABILIDADES À PROVA - Mostre que é o rei da montanha em desafios únicos.- COMPARTILHE TUDO - Capture suas proezas mais insanas e as compartilhe nas mídias sociais.É preciso ter conexão permanente com a Internet para poder jogar.",
    trailer : "https://www.youtube.com/watch?v=BfWb1rXX3oc",
    comentarios: ["", "",""]
    },

{
    id: 36,
    nome: "Riders Republic",
    genero: "Corrida",
    imagem: "https://cdn1.epicgames.com/83d6990f16444655866b04be562bf589/offer/MAD_STD_Store_Landscape_2560x1440-2560x1440-0d275f75a75f6367c373e727bc78b4d1.jpg",
    noticias: "Riders Republic adicionará modalidade de skate nesta semana.O skate chega a Riders Republic nesta quarta-feira (27) junto de uma nova temporada, intitulada de The Deck Skateboard Festival. Além de esquiar, praticar snowboard, andar de bicicleta e fazer manobras no BMX, os jogadores têm ainda mais opções para se divertir sozinho ou com amigos.A cultura do skate invade a República com a nova área The Deck, que será dividida em seis distritos principais. Além disso, o festival traz uma carreira renovada, com quatro manobras, 15 eventos e três novos patrocinadores.",
    trailer : "https://cdn.akamai.steamstatic.com/steam/apps/256956002/movie480_vp9.webm?t=1688149157",
    comentarios: ["", "",""]
    },
];
localStorage.setItem("apiData", JSON.stringify(apiData));
const storedData = JSON.parse(localStorage.getItem("apiData"));
document.addEventListener("DOMContentLoaded", function () {
  const jogosPorGenero = JSON.parse(localStorage.getItem("jogosPorGenero"));

  // Verificar se há jogos filtrados no localStorage
  if (jogosPorGenero) {
    const cardContainer = document.getElementById("cardContainer");

    // Renderizar os cards com os jogos filtrados
    jogosPorGenero.forEach((data, index) => {
      const cardElement = document.createElement("div");
      cardElement.className = index < 5 ? "cardjogo" : "cardjogo1";

      const imgElement = document.createElement("img");
      imgElement.src = data.imagem;
      imgElement.alt = data.nome;

      cardElement.addEventListener("click", function () {
        window.location.href = `/Arcade/Pagjogos/paginajogos.html?id=${data.id}`;
      });

      cardElement.appendChild(imgElement);
      cardContainer.appendChild(cardElement);
    });
  }
});