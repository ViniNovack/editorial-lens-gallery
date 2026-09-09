import neonPortrait from "@/assets/neon-portrait.jpg";
import lightSilhouette from "@/assets/light-silhouette.jpg";
import tarotCards from "@/assets/tarot-cards.jpg";
import prismaticPortrait from "@/assets/prismatic-portrait.jpg";
import digitalWaves from "@/assets/digital-waves.jpg";
import abstractPaint from "@/assets/abstract-paint.jpg";
import abstractLayers from "@/assets/abstract-layers.jpg";
import fluidArt from "@/assets/fluid-art.jpg";
import cespBanner from "@/assets/cesp-banner.png";
import cespBoxFront from "@/assets/cesp-box-front.jpg";
import cespBoxSensors from "@/assets/cesp-box-sensors.jpg";
import starWarsCoverAsset from "@/assets/star-wars-cover.png.asset.json";
import starWarsHeroAsset from "@/assets/star-wars-hero.png.asset.json";
import starWarsHover from "@/assets/star-wars-hover.png";
import certificadoAsset from "@/assets/certificado-batalha-naval.png.asset.json";
import equipeAsset from "@/assets/equipe-batalha-naval.png.asset.json";
import geoappCover from "@/assets/geoapp-cover.png";
import geoappHome from "@/assets/geoapp-home.png";
import geoappTriangulo from "@/assets/geoapp-triangulo.png";
import geoappPrisma from "@/assets/geoapp-prisma.png";
import geoappQuestionario from "@/assets/geoapp-questionario.png";

export interface Demonstration {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  client: string;
  tools?: string[];
  github?: string;
  youtube?: string;
  demonstrations?: Demonstration[];
  description: string;
  coverImage: string;
  hoverImage?: string;
  images: (string | string[])[];
}

export const projects: Project[] = [
  {
    id: "cesp",
    title: "Carbon Emissions Solution Plan (CEsp)",
    category: "Sistemas Ciberfísicos",
    tags: ["CIBERFÍSICO", "DADOS", "FRONT-END", "INOVAÇÃO"],
    year: "2026",
    client: "PUCPR",
    tools: ["PYTHON", "SQL", "HTML", "CSS", "JAVASCRIPT", "INTELIGÊNCIA ARTIFICIAL"],
    demonstrations: [
      { label: "CEsp em Prática", url: "https://youtu.be/0aMfXd0QXBA?si=biUxHwbFQVD0xI1m" },
      { label: "Site do CEsp", url: "https://youtu.be/Cp38IOcQFeU?si=6oF7MbjI3ORUxZXY" },
      { label: "Apresentação Criativa", url: "https://youtu.be/yd_mg0r41ZQ?si=l5GwU2rzgtbzrU3k" },
    ],
    description: `O projeto foi desenvolvido a partir da necessidade de facilitar a medição da concentração de CO₂ em ambientes fechados, oferecendo uma forma simples e acessível de monitorar a qualidade do ar. Para atender a esse objetivo, a equipe projetou e construiu uma caixa equipada com dois sensores: um sensor de concentração de gases e um sensor responsável pela medição da temperatura e da pressão atmosférica.

Os dados coletados pelos sensores são processados por um ESP32, que atua como controlador do sistema, realizando a aquisição das informações e disponibilizando-as para processamento. A partir desses dados, o sistema calcula a concentração aproximada de CO₂ presente no ambiente e estima a quantidade de árvores necessária para compensar essa concentração, permitindo ao usuário compreender de forma prática o impacto ambiental observado.

Para tornar a visualização das informações mais intuitiva, foi desenvolvido um site responsável por apresentar todos os dados coletados e calculados de maneira interativa e dinâmica. Durante o desenvolvimento da aplicação, utilizamos ferramentas de inteligência artificial, para acelerar a implementação de funcionalidades, aprimorar a qualidade do código e aumentar a produtividade da equipe, mantendo as decisões técnicas e a validação das soluções sob responsabilidade dos desenvolvedores.`,
    coverImage: cespBanner,
    hoverImage: cespBanner,
    images: [
      cespBanner,
      [cespBoxFront, cespBoxSensors],
    ],
  },
  {
    id: "batalha-naval-star-wars",
    title: "Jogo Batalha Naval Star Wars",
    category: "Desenvolvimento de Jogos",
    tags: ["DEV", "BACKEND", "CRIATIVIDADE"],
    year: "2026",
    client: "PUCPR",
    tools: ["PYTHON"],
    github: "https://github.com/ViniNovack/Star_Wars-Batalha-Naval",
    youtube: "https://youtu.be/MypyOYpI6LI?si=4-hmDq9H5NDxS2N1",
    description: `O projeto consistiu no desenvolvimento de uma adaptação do clássico jogo Batalha Naval, totalmente tematizada no universo de Star Wars. O jogador pode escolher entre duas perspectivas da história: Império Galáctico ou Aliança Rebelde, o que influencia a narrativa apresentada durante a partida e torna a experiência mais imersiva.

Para enriquecer a jogabilidade, foram implementados diálogos dinâmicos que variam de forma aleatória conforme o contexto da partida, fazendo com que cada sessão apresente interações diferentes. O jogo também utiliza artes em ASCII e trilhas sonoras inspiradas na franquia Star Wars para criar uma experiência mais envolvente, além de contar com dois desfechos distintos, determinados pelo resultado obtido pelo jogador.

O desenvolvimento foi realizado integralmente em Python, com execução em ambiente de terminal, permitindo aprofundar conhecimentos na linguagem e na construção de aplicações baseadas em interface textual. Durante o projeto, utilizamos inteligência artificial, para auxiliar na criação das artes em ASCII e na geração de trechos repetitivos de código, aumentando a produtividade da equipe e permitindo maior dedicação aos aspectos criativos e à lógica do jogo.

Um dos principais diferenciais do projeto foi o desenvolvimento da narrativa. Todo o roteiro, os diálogos e a construção da história foram idealizados e escritos por mim de forma autoral, buscando integrar os elementos clássicos da franquia à mecânica do jogo e proporcionar uma experiência dinâmica e imersiva para o jogador.`,
    coverImage: starWarsHover,
    hoverImage: starWarsHover,
    images: [
      starWarsCoverAsset.url,
      [certificadoAsset.url, equipeAsset.url],
    ],
  },
  {
    id: "geoapp",
    title: "GeoApp",
    category: "Aplicativo Educacional",
    tags: ["DEV", "FRONTEND", "EDUCAÇÃO"],
    year: "2026",
    client: "PUCPR",
    tools: ["JAVA", "INTELIGÊNCIA ARTIFICIAL"],
    github: "https://github.com/ViniNovack/Geoapp",
    youtube: "https://youtu.be/hCVdKhzTnA4?si=uliohF95KZU_Svep",
    description: `O aplicativo foi desenvolvido com o objetivo de auxiliar estudantes do ensino fundamental e médio na memorização e compreensão de fórmulas de geometria. A proposta surgiu a partir da percepção de que muitos alunos encontram dificuldades para lembrar as fórmulas durante os estudos e na resolução de exercícios, tornando o processo de aprendizagem menos eficiente.

Para atender a essa necessidade, foi criada uma aplicação que reúne as principais fórmulas de geometria em um ambiente organizado, permitindo consultas rápidas durante o estudo. Além disso, o aplicativo conta com um questionário interativo para estimular a memorização por meio da prática, bem como ferramentas para o cálculo de áreas e volumes das principais figuras geométricas. Como diferencial, grande parte das fórmulas é acompanhada de suas respectivas deduções matemáticas, possibilitando que o usuário compreenda sua origem e aprofunde seus conhecimentos, em vez de apenas memorizar os resultados.

O desenvolvimento foi realizado utilizando o Processing 4, ambiente baseado na linguagem Java, proporcionando experiência prática na linguagem e no desenvolvimento de aplicações desktop. Durante o projeto, também utilizamos inteligência artificial, por meio de engenharia de prompt, para apoiar melhorias no design da interface, na qualidade da implementação e na avaliação de diferentes soluções técnicas ao longo do desenvolvimento.`,
    coverImage: geoappCover,
    images: [
      [geoappHome, geoappTriangulo],
      [geoappPrisma, geoappQuestionario],
    ],
  },
  
  {
    id: "rom-retired-old-man",
    title: "ROM-Retired-Old-Man",
    category: "Desenvolvimento de Jogos",
    tags: ["DEV", "FRONTEND", "BACKEND", "CRIATIVIDADE"],
    year: "2026",
    client: "PUCPR",
    tools: ["CONSTRUCT 3", "INTELIGÊNCIA ARTIFICIAL"],
    github: "https://github.com/ViniNovack/ROM-Retired-Old-Man",
    youtube: "https://www.youtube.com/watch?v=5zuqjlvKfAw",
    description: `O projeto consistiu no desenvolvimento de um jogo de plataforma 2D inspirado na mecânica de clássicos do gênero, como a franquia Mario. A narrativa acompanha um antigo herói que, após anos de aposentadoria em uma vila pacífica, precisa voltar à ação quando a comunidade que o acolheu é atacada por um monstro. A história foi utilizada como base para criar uma experiência envolvente e criativa para a luta contra o monstro.

O desenvolvimento teve como principal objetivo aprofundar os conhecimentos em lógica de programação e na implementação de mecânicas de jogos. Durante o projeto, foram desenvolvidas funcionalidades como movimentação do personagem, detecção de colisões e sistemas de combate, incluindo barras de vida, animações de ataque e dano, movimentação do chefe (boss) e outras mecânicas fundamentais para a jogabilidade, proporcionando experiência prática na implementação de sistemas interativos e na resolução de problemas.

Além dos aspectos relacionados à programação, o projeto também representou uma oportunidade para explorar o uso de inteligência artificial no processo de desenvolvimento. Os cenários e personagens foram criados com o auxílio de ferramentas de IA, permitindo experimentar técnicas de geração de ativos visuais desde a concepção inicial, além de compreender como essas tecnologias podem otimizar o processo criativo e acelerar o desenvolvimento de jogos.`,
    coverImage: prismaticPortrait,
    images: [prismaticPortrait],
  },
  {
    id: "cronologia-dc-comics",
    title: "Site Linha do Tempo DC Comics",
    category: "Desenvolvimento Web",
    tags: ["DEV", "FRONTEND", "BACKEND", "CRIATIVIDADE"],
    year: "2026",
    client: "PUCPR",
    tools: ["HTML", "CSS", "JAVASCRIPT", "INTELIGÊNCIA ARTIFICIAL"],
    github: "https://github.com/ViniNovack/cronologia_DC.github.io",
    youtube: "https://youtu.be/CcCcA_SHiqI?si=nUOgWE2k_yCv0-jr",
    description: `Este é um projeto pessoal desenvolvido nas horas vagas, motivado pelo meu interesse pelo universo da DC Comics. A ideia surgiu da dificuldade em encontrar uma referência organizada da cronologia das histórias e eventos publicados pela editora. Com isso, iniciei o desenvolvimento de uma plataforma que tem como objetivo reunir, em uma única linha do tempo, as principais obras da continuidade da DC, facilitando a descoberta de novas leituras e a compreensão da ordem cronológica dos acontecimentos.

A aplicação oferece recursos de pesquisa e filtragem para facilitar a localização das histórias, além de disponibilizar um resumo individual para cada obra cadastrada. O projeto é desenvolvido com foco na experiência do usuário, buscando organizar um grande volume de informações de forma intuitiva e acessível.

Além de representar um projeto de interesse pessoal, essa aplicação também funciona como um ambiente de experimentação para o estudo de inteligência artificial e engenharia de prompt. Durante o desenvolvimento, utilizo ferramentas como Claude e Antigravity para apoiar a implementação de funcionalidades, acelerar tarefas repetitivas e explorar diferentes abordagens de desenvolvimento. Esse processo me permite aprofundar conhecimentos sobre o uso da IA como ferramenta de engenharia, sempre mantendo a análise crítica, a validação das soluções e as decisões técnicas como parte essencial do desenvolvimento.`,
    coverImage: digitalWaves,
    images: [digitalWaves],
  },
  {
    id: "chromatic-burst",
    title: "Chromatic Burst",
    category: "Fine Art",
    tags: ["FINE ART", "ABSTRACT"],
    year: "2023",
    client: "Independent",
    description: "Bold abstract expressionism exploring raw emotion through vivid color application and dynamic brushwork on textured canvas surfaces.",
    coverImage: abstractPaint,
    images: [abstractPaint],
  },
  {
    id: "layered-depths",
    title: "Layered Depths",
    category: "Fine Art",
    tags: ["FINE ART", "MIXED MEDIA"],
    year: "2022",
    client: "Heritage Museum",
    description: "Complex layered compositions merging digital and traditional techniques, creating depth through overlapping textures and complementary color harmonies.",
    coverImage: abstractLayers,
    images: [abstractLayers],
  },
  {
    id: "fluid-dynamics",
    title: "Fluid Dynamics",
    category: "Fine Art",
    tags: ["FINE ART", "EXPERIMENTAL"],
    year: "2022",
    client: "Art Basel",
    description: "Mesmerizing fluid art exploring the organic flow of pigments, capturing moments of chaos and harmony in vibrant turquoise and magenta compositions.",
    coverImage: fluidArt,
    images: [fluidArt],
  },
];
