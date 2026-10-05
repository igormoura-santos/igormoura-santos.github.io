export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  cover: string;
  preview?: 'web' | 'event';
  featured?: boolean;
  objective: string;
  concept: string;
  techniques: string[];
  result: string;
  resultLabel?: string;
  images: { src: string; alt: string; caption: string; portrait?: boolean }[];
};

export const projects: Project[] = [
  {
    id: '04', name: 'UR USE.RITYS', category: 'Identidade visual & moda', featured: true,
    cover: '/projects/use-ritys/02.png',
    description: 'Estilo, atitude e autenticidade em uma identidade para moda feminina, com aplicações em embalagens, papelaria e comunicação digital.',
    objective: 'Representar uma marca de moda feminina sofisticada, contemporânea e marcante, conectada a mulheres que usam a moda para expressar quem são.',
    concept: 'A moda como extensão da personalidade. A figura feminina ocupa o centro da composição para transmitir confiança, elegância e presença. As letras UR se integram à personagem, conectando símbolo e nome. A assinatura Estilo · Atitude · Você sintetiza o posicionamento visual.',
    techniques: ['Tipografia serifada', 'Contraste preto e branco', 'Ilustração feminina', 'Integração de símbolo e tipografia', 'Hierarquia visual', 'Paleta reduzida', 'Aplicações de marca'],
    resultLabel: 'Resultado esperado',
    result: 'Construir presença visual, reconhecimento e versatilidade nos diferentes pontos de contato da marca. Os mockups apresentam a proposta aplicada a sacolas, etiquetas, cartões, redes sociais e brindes.',
    images: [
      { src: '/projects/use-ritys/02.png', alt: 'Mockup de sacolas, etiquetas e cartões UR USE.RITYS em preto e branco com ilustração feminina.', caption: 'Visão geral · proposta de identidade aplicada à embalagem e à papelaria.' },
      { src: '/projects/use-ritys/01.png', alt: 'Marca UR USE.RITYS com letras serifadas e ilustração de mulher com óculos escuros.', caption: 'Marca principal · integração entre ilustração, iniciais UR e tipografia serifada.' },
      { src: '/projects/use-ritys/03.png', alt: 'Mockup de sacola branca e preta com a marca UR USE.RITYS e assinatura Estilo Atitude Você.', caption: 'Sacola · aplicação da marca em embalagem.' },
      { src: '/projects/use-ritys/04.png', alt: 'Mockup de etiquetas preta e branca com identidade UR USE.RITYS e mensagem de agradecimento.', caption: 'Etiquetas · identidade e mensagem de agradecimento.' },
      { src: '/projects/use-ritys/05.png', alt: 'Mockup de cartões de visita UR USE.RITYS em preto e branco.', caption: 'Cartões de visita · composição de marca e informações de contato.' },
      { src: '/projects/use-ritys/06.png', alt: 'Prancha de proposta visual para Instagram da UR USE.RITYS, com posts, stories, reels e destaques.', caption: 'Redes sociais · proposta de aplicação digital. Os números exibidos fazem parte do mockup, não são métricas de resultado.' },
      { src: '/projects/use-ritys/07.png', alt: 'Prancha com mockups de brindes UR USE.RITYS: ecobag, chaveiro, cartões, adesivos e espelho de bolsa.', caption: 'Brindes e materiais de relacionamento · possibilidades de aplicação da identidade.' },
    ],
  },
  {
    id: '05', name: 'Uma mensagem, muitos universos', category: 'Design gráfico freelance', preview: 'event', featured: false,
    cover: '/projects/freelance/07.png',
    description: 'Direção criativa e comunicação visual para saúde, beleza, moda, eventos, mercado imobiliário, conscientização e comunicação religiosa.',
    objective: 'Criar materiais estratégicos que transmitam mensagens com clareza, despertem interesse e fortaleçam a identidade de cada proposta, respeitando as particularidades de diferentes segmentos.',
    concept: 'O contexto, o público-alvo e a intenção de cada peça definem sua linguagem visual. Saúde e beleza exploram confiança, cuidado e valorização pessoal; eventos e comunicação religiosa trabalham contrastes e composições expressivas. Moda e mercado imobiliário valorizam sofisticação, iluminação e ambientação. Cada escolha orienta o olhar e dá destaque à mensagem.',
    techniques: ['Direção de arte', 'Hierarquia visual', 'Composição', 'Tipografia', 'Contraste e cores', 'Tratamento de imagens', 'Organização da informação'],
    result: 'Um conjunto de peças que demonstra versatilidade criativa, adaptação a diferentes públicos e domínio dos fundamentos do design gráfico, equilibrando identidade, legibilidade e intenção comunicativa.',
    images: [
      { src: '/projects/freelance/07.png', alt: 'Peça de divulgação imobiliária com casa contemporânea, títulos brancos e amarelos e chamada para falar com especialista.', caption: 'Mercado imobiliário · fotografia arquitetônica, contraste e destaque para benefícios e contato.', portrait: true },
      { src: '/projects/freelance/02.png', alt: 'Peça de maquiagem com retrato feminino, cosméticos e tipografia branca e rosa.', caption: 'Beleza · fotografia, tons suaves e tipografia para comunicar valorização pessoal.', portrait: true },
      { src: '/projects/freelance/06.png', alt: 'Campanha Setembro Amarelo com laço amarelo e chamada Falar também é cuidar.', caption: 'Conscientização · hierarquia, contraste e símbolo visual para uma mensagem de acolhimento.', portrait: true },
      { src: '/projects/freelance/01.png', alt: 'Peça de plano de saúde com família, ícones de serviços e tipografia azul sobre fundo claro.', caption: 'Saúde · linguagem visual de confiança e cuidado, com benefícios organizados em blocos.', portrait: true },
      { src: '/projects/freelance/03.png', alt: 'Peça de moda feminina com mulher de blazer e óculos, título Seu estilo do seu jeito e detalhes rosa.', caption: 'Moda · ambientação, fotografia e composição para valorizar estilo e produto.', portrait: true },
      { src: '/projects/freelance/04.png', alt: 'Divulgação de culto jovem com público em evento, tipografia expressiva branca e amarela e informações de encontro.', caption: 'Comunicação religiosa · tipografia expressiva, fotografia e informações do encontro.', portrait: true },
      { src: '/projects/freelance/05.png', alt: 'Peça de divulgação de espaço para eventos com microfone em primeiro plano e chamada para solicitar orçamento.', caption: 'Eventos · profundidade de imagem, lista de serviços e chamada para ação.', portrait: true },
    ],
  },
  {
    id: '01', name: 'Comunicação que conecta', category: 'Campanhas & comunicação visual',
    description: 'Peças gráficas e soluções visuais desenvolvidas no Ser Educacional, conectando comunicação institucional, identidade de marca e diferentes públicos.',
    cover: '/projects/comunicacao-visual/campanhas.png',
    objective: 'Transformar informações e objetivos de comunicação em peças claras, atrativas e profissionais para diferentes marcas e instituições.',
    concept: 'Cada demanda parte do público-alvo, dos objetivos de comunicação e das diretrizes visuais da marca. Composição, hierarquia da informação, tipografia, cores e tratamento de imagens equilibram criatividade, estética e funcionalidade. A adaptação aos formatos e canais preserva a consistência visual e facilita a leitura.',
    techniques: ['Direção de arte', 'Hierarquia visual', 'Tipografia e cores', 'Tratamento e composição de imagens', 'Diagramação', 'Adaptação de formatos'],
    result: 'Um conjunto de peças que demonstra versatilidade e adaptação a diferentes segmentos, equilibrando estética, clareza e estratégia de comunicação.',
    images: [
      { src: '/projects/comunicacao-visual/campanhas.png', alt: 'Seleção de campanhas para UNINASSAU, UNINORTE e outras marcas, com anúncios educacionais e institucionais.', caption: 'Campanhas educacionais e institucionais · fotografia, cor e hierarquia para destacar cada mensagem.' },
      { src: '/projects/comunicacao-visual/multiformatos.png', alt: 'Peças para b.Uni e DOK, campanha UNINASSAU e aplicações gráficas em camisetas UNINASSAU e UNAMA.', caption: 'Comunicação em múltiplos formatos · banners, peças promocionais, e-mail e aplicações em camisetas.' },
    ],
  },
  {
    id: '02', name: 'Informação vira experiência', category: 'Web design & comunicação institucional',
    description: 'Layouts institucionais para apresentar serviços de carreira e informações sobre polos educacionais, organizando conteúdo e chamadas para ação.',
    cover: '/projects/comunicacao-visual/carreiras.png',
    preview: 'web',
    objective: 'Apresentar informações institucionais de forma organizada, com hierarquia entre apresentação, serviços, benefícios e chamadas para ação.',
    concept: 'Seções bem definidas, fotografia, ícones e cores da marca conduzem a leitura. O conteúdo é distribuído para tornar a proposta de cada página compreensível.',
    techniques: ['Web design', 'Hierarquia de conteúdo', 'Diagramação', 'Identidade visual', 'Composição de imagens', 'Chamadas para ação'],
    result: 'Dois layouts que aplicam a comunicação visual ao ambiente digital, com seções organizadas para apresentar serviços, diferenciais e informações institucionais.',
    images: [
      { src: '/projects/comunicacao-visual/carreiras.png', alt: 'Layout da página do Núcleo de Trabalhabilidade, Emprego e Carreiras, com apresentação, serviços, diferenciais e vagas.', caption: 'Núcleo de Trabalhabilidade, Emprego e Carreiras · apresentação dos serviços e diferenciais.', portrait: true },
      { src: '/projects/comunicacao-visual/polos.png', alt: 'Layout institucional do Grupo Ser Educacional para apresentação de polos, com informações sobre o grupo e benefícios.', caption: 'Grupo Ser Educacional · apresentação institucional e informações sobre polos educacionais.', portrait: true },
    ],
  },
  {
    id: '03', name: 'Revive Recife', category: 'Eventos & redes sociais', preview: 'event',
    cover: '/projects/revive/01.png',
    description: 'Fotografia, tipografia e cor para transmitir a energia do evento — da divulgação de atrações às peças informativas.',
    objective: 'Na peça de Emily Louise, criar uma comunicação jovem, vibrante e impactante, valorizando a artista e despertando interesse imediato na divulgação da atração nas redes sociais.',
    concept: 'Movimento, energia e experiência orientam a peça de Emily Louise. A fotografia da artista em performance é o elemento principal; o nome em grande escala facilita a identificação. Formas geométricas sobrepostas criam profundidade e dinamismo, conectando a divulgação à atmosfera de renovação, encontro e celebração do Revive.',
    techniques: ['Fotografia de performance', 'Tipografia em destaque', 'Contraste de cores', 'Formas geométricas', 'Sobreposição de elementos', 'Hierarquia visual', 'Composição vertical', 'Tratamento de imagem'],
    result: 'A peça de Emily Louise une fotografia, tipografia e elementos gráficos em uma composição energética para o público jovem. A galeria reúne também outras divulgações e peças informativas do Revive Recife.',
    images: [
      { src: '/projects/revive/01.png', alt: 'Emily Louise cantando no palco, com seu nome em grande escala e formas azuis e roxas na composição do Revive Recife.', caption: 'Emily Louise · peça principal do estudo: fotografia de performance, tipografia e formas sobrepostas.', portrait: true },
      { src: '/projects/revive/06.png', alt: 'Divulgação de Sarah Farias no Revive Recife, com retrato e tipografia branca sobre fundo azul e roxo.', caption: 'Sarah Farias · divulgação de atração.', portrait: true },
      { src: '/projects/revive/09.png', alt: 'Divulgação de Juliano Son no Revive Recife, com retrato, nome em grande escala e datas do evento.', caption: 'Juliano Son · divulgação de atração.', portrait: true },
      { src: '/projects/revive/04.png', alt: 'Brett Hennes falando ao microfone no palco, com nome em destaque e marca Revive Recife.', caption: 'Brett Hennes · fotografia e identificação da atração.', portrait: true },
      { src: '/projects/revive/05.png', alt: 'Músico com violão e braço levantado sobre tipografia repetida Dia 4.', caption: 'Dia 4 · tipografia em repetição sobre fotografia de performance.', portrait: true },
      { src: '/projects/revive/03.png', alt: 'Conferência Fogo e Vento com retratos dos participantes e formas de fogo e vento em azul e laranja.', caption: 'Conferência Fogo e Vento · composição de participantes e informações do evento.', portrait: true },
      { src: '/projects/revive/08.png', alt: 'Revive Kids Recife com os personagens Renan e Vivi em azul e rosa, datas e Arena Pernambuco.', caption: 'Revive Kids · comunicação visual voltada ao público infantil.', portrait: true },
      { src: '/projects/revive/07.png', alt: 'Marcha de Oração do Revive Recife, com título branco, horário e fotografia da Arena Pernambuco.', caption: 'Marcha de Oração · chamada, horário e local de encontro.', portrait: true },
      { src: '/projects/revive/02.png', alt: 'Peça informativa sobre estacionamento com tipografia branca e fotografia do estádio sobre fundo roxo.', caption: 'Estacionamento · peça de serviço para o público do evento.', portrait: true },
      { src: '/projects/revive/10.png', alt: 'Três mulheres sorrindo na peça O que é o Revive Recife, sobre fundo azul e roxo.', caption: 'O que é o Revive Recife? · apresentação do evento.', portrait: true },
    ],
  },
];
