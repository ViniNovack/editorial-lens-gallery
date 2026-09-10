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
  description: string;
  coverImage: string;
  hoverImage?: string;
  images: (string | string[])[];
  highlights?: Highlight[];
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
    id: "plataforma-codigo-livre",
    title: "Plataforma Código Livre",
    tags: ["VÍDEO", "COMPLETO"],
    year: "2024",
    description: "Texto de exemplo sobre essa plataforma de cursos em vídeo. Substitua por uma descrição real quando quiser.",
    coverImage: tarotCards,
    images: [tarotCards],
    courses: [
      {
        id: "web-development-masterclass",
        title: "Web Development Masterclass",
        tags: ["DEV", "FRONT-END", "CSS"],
        description: "Texto de exemplo sobre esse curso.",
        coverImage: tarotCards,
        images: [tarotCards],
      },
      {
        id: "react-native-apps-moveis",
        title: "React Native para Apps Móveis",
        tags: ["DEV", "MOBILE", "AVANÇADO"],
        description: "Texto de exemplo sobre esse curso.",
        coverImage: tarotCards,
        images: [tarotCards],
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
            text: "Texto de exemplo sobre os diferenciais do curso.",
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