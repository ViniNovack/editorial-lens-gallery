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
    title: "Harvard",
    fullName: "Harvard",
    website: "https://www.harvard.edu/",
    tags: ["UNIVERSIDADE", "CURSOS"],
    year: "2024",
    description: "A Universidade Harvard é uma das instituições de ensino superior mais antigas e reconhecidas dos Estados Unidos, fundada em 1636 e localizada em Cambridge, Massachusetts. Ao longo de sua história, tornou-se uma referência internacional em educação, pesquisa e produção de conhecimento, reunindo diversas áreas de estudo e uma comunidade acadêmica formada por estudantes, professores e pesquisadores de diferentes partes do mundo.\n\nHarvard possui uma forte tradição de excelência acadêmica e pesquisa, com escolas e programas dedicados a diferentes campos do conhecimento. A universidade também se destaca por sua contribuição para a ciência, tecnologia, artes, humanidades, negócios, direito, medicina e outras áreas, além de manter iniciativas educacionais abertas ao público, como cursos online que permitem que pessoas de diferentes lugares tenham acesso a conteúdos produzidos pela instituição.",
    coverImage: tarotCards,
    images: [tarotCards],
    courses: [
      {
        id: "cs50",
        title: "CS50",
        tags: ["RACIOCÍNIO ALGORÍTMICO", "LINGUAGENS DE PROGRAMAÇÃO", "CONCEITOS DE COMPUTAÇÃO"],
        website: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
        description: "Este é o CS50x, a introdução da Universidade de Harvard aos fundamentos da ciência da computação e à arte da programação, destinada tanto a alunos da área quanto a não alunos, com ou sem experiência prévia em programação. Ministrado por David J. Malan, o CS50x é um curso introdutório que ensina os alunos a pensar algoritmicamente e a resolver problemas de forma eficiente. Os tópicos incluem abstração, algoritmos, estruturas de dados, encapsulamento, gerenciamento de recursos, segurança, engenharia de software e desenvolvimento web. As linguagens utilizadas são C, Python, SQL e JavaScript, além de CSS e HTML. Os conjuntos de problemas são inspirados em áreas do mundo real, como biologia, criptografia, finanças, ciência forense e jogos. A versão presencial do CS50x, o CS50, é o maior curso oferecido por Harvard.\n\nAlunos que obtiverem uma nota satisfatória em 9 listas de exercícios (ou seja, tarefas de programação) e em um projeto final estarão aptos a receber um certificado. Este é um curso autodidático – você pode cursar CS50x no seu próprio ritmo.",
        coverImage: tarotCards,
        images: [tarotCards],
        icon: "duck",
      },
    ],
  },
  {
    id: "cursos-especializacao-rapida",
    title: "Data ICMC",
    website: "https://data.icmc.usp.br/",
    tags: ["CURSOS"],
    year: "2026",
    description: "O Data ICMC é um grupo de extensão do Instituto de Ciências Matemáticas e de Computação ICMC-USP da Universidade de São Paulo USP localizado no campus de São Carlos. Fundado em 2019, o grupo é focado em Ciência de Dados e Aprendizado de Máquina. O Data busca integrar estudantes, acadêmicos e profissionais do setor, promovendo a troca de conhecimento e o desenvolvimento de habilidades técnicas. Através de aulas, eventos, grupos de estudo e palestras, o grupo facilita o acesso a tecnologias de ponta e práticas atuais, preparando seus membros para os desafios do mercado de trabalho.",
    coverImage: tarotCards,
    images: [tarotCards],
    courses: [
      {
        id: "curso-machine-learning",
        title: "Curso de Machine Learning",
        tags: ["MATEMÁTICA", "MACHINE LEARNING"],
        year: "2026",
        youtube: "https://youtube.com/playlist?list=PLFE-LjWAAP9QEC8KhIBWxM_tquU8UmuYW&si=M5hab7q035Bq8ZBg",
        github: "https://github.com/icmc-data/Curso-de-Machine-Learning-2025",
        description: "Abordando desde conceitos básicos até técnicas avançadas. Aprenda regressão, classificação, redes neurais e mais, com aulas práticas em Python. Ideal para quem quer dominar inteligência artificial e ciência de dados!",
        coverImage: tarotCards,
        images: [tarotCards],
        icon: "brain",
      },
    ],
  },
];