import tarotCards from "@/assets/tarot-cards.jpg";

export interface Course {
  id: string;
  title: string;
  tags: string[];
  year?: string;
  description: string;
  coverImage: string;
  hoverImage?: string;
  images: (string | string[])[];
}

export interface Highlight {
  title: string;
  text: string;
  image: string;
}

export interface Course {
  id: string;
  title: string;
  tags: string[];
  year?: string;
  duration?: string;
  modality?: string;
  github?: string;
  youtube?: string;
  website?: string;
  studyRepositories?: { title: string; url: string }[];
  description: string;
  coverImage: string;
  hoverImage?: string;
  images: (string | string[])[];
  highlights?: Highlight[];
  icon?: string;
}

export interface School {
  id: string;
  title: string;
  fullName?: string;
  logo?: string;
  campus?: string;
  website?: string;
  tags: string[];
  year: string;
  description: string;
  coverImage: string;
  hoverImage?: string;
  images: (string | string[])[];
  highlights?: Highlight[];
  courses: Course[];
}

export const schools: School[] = [
  {
  id: "pucpr",
  title: "PUCPR - Pontifícia Universidade Católica do Paraná",
  fullName: "PUCPR - Pontifícia Universidade Católica do Paraná",
  website: "https://www.pucpr.br/",
  tags: ["UNIVERSIDADE"],
  year: "2026 - 2029",
  description: "Fundada em 1959, a PUCPR é uma universidade católica privada sem fins lucrativos orientada por princípios éticos, cristãos e maristas que atua como promotora do desenvolvimento regional e inclusão social.\n\nA PUCPR tem como foco desenvolver a excelência educacional, pesquisas de qualidade, fomentar o empreendedorismo e inovação além de promover a multi e interculturalidade aliadas à inclusão social.\n\nA PUCPR tem conquistado reconhecimento nacional e internacional. De acordo com um dos mais importantes rankings mundiais da educação superior, o Times Higher Education, a PUCPR é a 11ª colocada, entre as universidades brasileiras, e a 1ª do Paraná, empatada com a Universidade Estadual de Ponta Grossa (UEPG).\n\nPresente em quatro cidades no Estado do Paraná, possui cerca de 100 cursos de graduação, 190 cursos de educação continuada e 17 programas de stricto sensu que compreendem diversas áreas do conhecimento distribuídos em seis escolas: Escola de Negócios, Escola de Belas Artes, Escola de Educação e Humanidades, Escola de Medicina e Ciências da Vida, Escola de Direito e Escola Politécnica.",
  coverImage: tarotCards,
  images: [tarotCards],
  courses: [
      {
        id: "bacharelado-ciencia-da-computacao",
        title: "Bacharelado em Ciência da Computação",
        tags: ["GRADUAÇÃO"],
        year: "2026 - 2029",
        website: "https://www.pucpr.br/cursos-graduacao/ciencia-da-computacao/",
        studyRepositories: [
          { title: "Jogo-Jokenp-", url: "https://github.com/ViniNovack/Jogo-Jokenp-" },
          { title: "Programa-o_Inperativa_C", url: "https://github.com/ViniNovack/Programa-o_Inperativa_C" },
          { title: "Programacao_web_PUC", url: "https://github.com/ViniNovack/Programacao_web_PUC" },
          { title: "Racioc-nio_Algoritimico", url: "https://github.com/ViniNovack/Faculdade-Racioc-nio_Algoritimico_1-Periodo" },
        ],
        description: "O Bacharelado em Ciência da Computação da PUCPR forma profissionais prontos para liderar o futuro da tecnologia. Com base nas competências mais valorizadas pelo mercado e nos referenciais da Sociedade Brasileira de Computação (SBC), Institute of Electrical and Electronics Engineers (IEEE) e Association for Computing Machinery (ACM), o curso prepara você para criar softwares inovadores e desenvolver sistemas inteligentes. Toda a formação prepara o futuro profissional para atuação em áreas estratégicas como Ciência de Dados e Inteligência Artificial, com foco em Aprendizagem de Máquina, Big Data e outras tecnologias — transformando desafios em soluções éticas, criativas e de alto impacto.",
        coverImage: tarotCards,
        images: [tarotCards],
        icon: "computer",
      },
    ],
  },
  {
    id: "instituto-tecnologico-avancado",
    title: "Instituto Tecnológico Avançado",
    fullName: "Instituto Tecnológico Avançado",
    campus: "Exemplo",
    website: "https://exemplo.com",
    tags: ["ACADÊMICO"],
    year: "2026",
    description: "Texto de exemplo sobre essa instituição.",
    coverImage: tarotCards,
    images: [tarotCards],
    highlights: [
      {
        title: "Uma Tradição de Excelência",
        text: "Texto de exemplo sobre a tradição e o histórico dessa instituição.",
        image: tarotCards,
      },
      {
        title: "Campus Inovador",
        text: "Texto de exemplo sobre o campus e a estrutura dessa instituição.",
        image: tarotCards,
      },
    ],
    courses: [
      {
        id: "ciencia-de-dados-ia",
        title: "Ciência de Dados e Inteligência Artificial",
        tags: ["DADOS", "IA"],
        modality: "Presencial",
        duration: "4 anos",
        github: "https://github.com/exemplo",
        youtube: "https://youtube.com/exemplo",
        description: "Texto de exemplo sobre esse curso.",
        coverImage: tarotCards,
        images: [tarotCards],
        highlights: [
          {
            title: "Resumo do Curso",
            text: "Texto de exemplo resumindo o curso.",
            image: tarotCards,
          },
          {
            title: "Diferenciais do Curso",
            text: "Texto de exemplo sobre os diferenciais desse curso.",
            image: tarotCards,
          },
        ],
      },
    ],
  },
  {
    id: "cursos-especializacao-rapida",
    title: "Cursos de Especialização Rápida (CER)",
    tags: ["ESPECIALIZAÇÃO"],
    year: "2023",
    description: "Texto de exemplo sobre esse conjunto de cursos rápidos.",
    coverImage: tarotCards,
    images: [tarotCards],
    courses: [
      {
        id: "ux-ui-design-fundamentals",
        title: "UX/UI Design Fundamentals",
        tags: ["DESIGN", "UX", "CRIATIVIDADE"],
        year: "2023",
        description: "Texto de exemplo sobre esse curso.",
        coverImage: tarotCards,
        images: [tarotCards],
      },
    ],
  },
];