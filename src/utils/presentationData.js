export const POLOS = {
  vitoria: {
    id: "vitoria",
    name: "Vitória",
    role: "Experiência da Comunidade",
    color: "#FF8800",
    to: "#FFD166",
    gradient: "linear-gradient(135deg, #FF8800, #FFD166)",
    soft: "rgba(255, 136, 0, 0.14)",
  },
  leo: {
    id: "leo",
    name: "Leo",
    role: "Solução Tecnológica & UX",
    color: "#1AB394",
    to: "#177A6E",
    gradient: "linear-gradient(135deg, #1AB394, #177A6E)",
    soft: "rgba(26, 179, 148, 0.14)",
  },
};

export const IMAGES = {
  hero: "/images/hero-court.svg",
  sketchPhones: "/images/sketch-phones.svg",
  sketchMap: "/images/sketch-map.svg",
  sketchFlow: "/images/sketch-flow.svg",
};

export const METRICS = [
  {
    value: "78%",
    label: "já perderam viagem até a quadra",
    foot: "espaço ocupado ao chegar",
  },
  {
    value: "64%",
    label: "têm dificuldade para fechar time",
    foot: "grupos incompletos",
  },
  {
    value: "82%",
    label: "não sabem a agenda oficial dos espaços",
    foot: "informação só no WhatsApp",
  },
];

export const RAW_SIGNALS = [
  "312 respostas",
  "84 falas na qualitativa",
  "9 espaços mapeados",
  "5 modalidades",
  "27 grupos de WhatsApp",
];

export const PATTERNS = [
  {
    title: "Informação fragmentada",
    copy: "Cada grupo guarda um pedaço da verdade sobre a quadra.",
  },
  {
    title: "Ocupação invisível",
    copy: "Quem chega não sabe quem está lá, nem até quando.",
  },
  {
    title: "Grupos fechados",
    copy: "Quem é de fora não encontra com quem jogar.",
  },
];

export const PROFILES = [
  {
    role: "A organizadora",
    name: "Camila",
    detail: "vôlei de areia · Praia Grande",
  },
  {
    role: "O capitão da pelada",
    name: "Diego",
    detail: "futebol society · Perequê",
  },
  {
    role: "A iniciante",
    name: "Rafa",
    detail: "basquete · Itaquanduba",
  },
];

export const STORIES = [
  {
    id: "s1",
    quote: "Eu saio de casa sem saber se a quadra tá livre. Quando chego, tem fila.",
    person: "Camila, 29 · vôlei de areia · Praia Grande",
    story:
      "Como esportista que joga depois do trabalho, quero saber em tempo real se o espaço está livre, para não perder a viagem.",
    feature: "Status ao vivo dos espaços + reserva de horário",
    proto: "/prototipo/tela-1",
  },
  {
    id: "s2",
    quote: "A gente marca no grupo, mas ninguém sabe quem levou a rede.",
    person: "Diego, 34 · futebol society · Perequê",
    story:
      "Como organizador da pelada, quero combinar o jogo e dividir o material, para o grupo não desistir no meio do caminho.",
    feature: "Grupos, escalação e checklist de material",
    proto: "/prototipo/tela-2",
  },
  {
    id: "s3",
    quote: "Queria começar no basquete, mas não conheço ninguém que jogue no meu horário.",
    person: "Rafa, 22 · basquete · Itaquanduba",
    story:
      "Como iniciante, quero encontrar grupos do meu nível e horário, para entrar em quadra sem constrangimento.",
    feature: "Match por nível + convites abertos",
    proto: "/prototipo/tela-3",
  },
];

export const UX_TAGS = [
  {
    label: "Status antes da viagem",
    note: "a quadra livre aparece antes de sair de casa",
  },
  {
    label: "Time completo em 2 toques",
    note: "convidar quem joga no mesmo horário",
  },
  {
    label: "Confiança de quem é de fora",
    note: "nível e convites abertos, sem panelinha",
  },
];

export const SKETCHES = [
  {
    src: IMAGES.sketchMap,
    caption: "Mapa de espaços",
    note: "Onde a informação vive hoje",
    rotate: -1.6,
  },
  {
    src: IMAGES.sketchFlow,
    caption: "Fluxo de reserva",
    note: "Do desejo ao check-in em 3 toques",
    rotate: 1.2,
  },
  {
    src: IMAGES.sketchPhones,
    caption: "Telas em papel",
    note: "Testadas com 4 esportistas",
    rotate: -0.9,
  },
];

export const PERSONA_FIELDS = [
  { key: "name", label: "Nome" },
  { key: "sport", label: "Esporte" },
  { key: "frequency", label: "Frequência" },
  { key: "barreira", label: "Principal barreira" },
];

export const EPICS = [
  {
    id: 1,
    label: "Ato 1",
    title: "O Jogo Travado",
    subtitle: "Problema & Pesquisa",
    scenes: [
      {
        id: "1.1",
        code: "1.1",
        title: "Tela de Abertura",
        hint: "Standby · mapa de Ilhabela",
        polo: "both",
      },
      {
        id: "1.2",
        code: "1.2",
        title: "A Hipótese",
        hint: "Foto + fala da Vitória",
        polo: "vitoria",
      },
      {
        id: "1.3",
        code: "1.3",
        title: "A Realidade em Dados",
        hint: "Big numbers sob comando",
        polo: "leo",
        steps: METRICS.length,
      },
    ],
  },
  {
    id: 2,
    label: "Ato 2",
    title: "Quem Entra em Quadra?",
    subtitle: "Síntese & Personas ao Vivo",
    scenes: [
      {
        id: "2.1",
        code: "2.1",
        title: "Síntese de Dados",
        hint: "Bruto → padrão → oportunidade",
        polo: "leo",
      },
      {
        id: "2.2",
        code: "2.2",
        title: "Placar de Personas",
        hint: "Dinâmica com a plateia",
        polo: "both",
      },
    ],
  },
  {
    id: 3,
    label: "Ato 3",
    title: "Da Arquibancada ao App",
    subtitle: "Histórias de Usuário & Telas",
    scenes: [
      {
        id: "3.1",
        code: "3.1",
        title: "Ponte Voz → Funcionalidade",
        hint: "Fala, história e protótipo",
        polo: "both",
      },
    ],
  },
  {
    id: 4,
    label: "Ato 4",
    title: "Mão na Massa",
    subtitle: "Wireframe & Protótipo",
    scenes: [
      {
        id: "4.1",
        code: "4.1",
        title: "Papel e Caneta",
        hint: "Mesa de rascunhos",
        polo: "leo",
      },
      {
        id: "4.2",
        code: "4.2",
        title: "Antes e Depois",
        hint: "Papel × tela final",
        polo: "leo",
      },
      {
        id: "4.3",
        code: "4.3",
        title: "Protótipo em Palco",
        hint: "Celular em destaque",
        polo: "leo",
      },
    ],
  },
];

export const findEpic = (id) => EPICS.find((epic) => epic.id === id) ?? EPICS[0];

export const findScene = (id) =>
  EPICS.flatMap((epic) => epic.scenes).find((scene) => scene.id === id);

export const epicOfScene = (id) =>
  EPICS.find((epic) => epic.scenes.some((scene) => scene.id === id)) ?? EPICS[0];