import neonPortrait from "@/assets/neon-portrait.jpg";
import lightSilhouette from "@/assets/light-silhouette.jpg";
import tarotCards from "@/assets/tarot-cards.jpg";
import prismaticPortrait from "@/assets/prismatic-portrait.jpg";
import digitalWaves from "@/assets/digital-waves.jpg";
import abstractPaint from "@/assets/abstract-paint.jpg";
import abstractLayers from "@/assets/abstract-layers.jpg";
import fluidArt from "@/assets/fluid-art.jpg";
import starWarsCoverAsset from "@/assets/star-wars-cover.png.asset.json";
import starWarsHeroAsset from "@/assets/star-wars-hero.png.asset.json";
import certificadoAsset from "@/assets/certificado-batalha-naval.png.asset.json";
import equipeAsset from "@/assets/equipe-batalha-naval.png.asset.json";

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
  images: (string | string[])[];
}

export const projects: Project[] = [
  {
    id: "cesp",
    title: "Carbon Emissions Solution Plan (CEsp)",
    category: "Sistemas Ciberfísicos",
    tags: ["CIBERFÍSICO", "DADOS", "FRONT-END"],
    year: "2026",
    client: "PUCPR",
    tools: ["PYTHON", "SQL", "HTML", "CSS", "JAVASCRIPT", "INTELIGÊNCIA ARTIFICIAL"],
    demonstrations: [
      { label: "Demonstração 1", url: "https://youtu.be/0aMfXd0QXBA?si=biUxHwbFQVD0xI1m" },
      { label: "Demonstração 2", url: "https://youtu.be/Cp38IOcQFeU?si=6oF7MbjI3ORUxZXY" },
      { label: "Demonstração 3", url: "https://youtu.be/yd_mg0r41ZQ?si=l5GwU2rzgtbzrU3k" },
    ],
    description: `O projeto foi desenvolvido a partir da necessidade de facilitar a medição da concentração de CO₂ em ambientes fechados, oferecendo uma forma simples e acessível de monitorar a qualidade do ar. Para atender a esse objetivo, a equipe projetou e construiu uma caixa equipada com dois sensores: um sensor de concentração de gases e um sensor responsável pela medição da temperatura e da pressão atmosférica.

Os dados coletados pelos sensores são processados por um ESP32, que atua como controlador do sistema, realizando a aquisição das informações e disponibilizando-as para processamento. A partir desses dados, o sistema calcula a concentração aproximada de CO₂ presente no ambiente e estima a quantidade de árvores necessária para compensar essa concentração, permitindo ao usuário compreender de forma prática o impacto ambiental observado.

Para tornar a visualização das informações mais intuitiva, foi desenvolvido um site responsável por apresentar todos os dados coletados e calculados de maneira interativa e dinâmica. Durante o desenvolvimento da aplicação, utilizamos ferramentas de inteligência artificial, para acelerar a implementação de funcionalidades, aprimorar a qualidade do código e aumentar a produtividade da equipe, mantendo as decisões técnicas e a validação das soluções sob responsabilidade dos desenvolvedores.`,
    coverImage: neonPortrait,
    images: [neonPortrait],
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
    coverImage: starWarsHeroAsset.url,
    images: [
      starWarsCoverAsset.url,
      [certificadoAsset.url, equipeAsset.url],
    ],
  },
  {
    id: "mystic-arcana",
    title: "Mystic Arcana",
    category: "Fine Art",
    tags: ["FINE ART", "ILLUSTRATION"],
    year: "2024",
    client: "Digital Arts Foundation",
    description: "A delicate study of Art Nouveau tarot imagery, blending traditional illustration with contemporary botanical arrangements and spiritual symbolism.",
    coverImage: tarotCards,
    images: [tarotCards],
  },
  {
    id: "prismatic-dreams",
    title: "Prismatic Dreams",
    category: "Photography",
    tags: ["PHOTOGRAPHY", "EXPERIMENTAL"],
    year: "2023",
    client: "Bloom Publishing",
    description: "Ethereal portrait series exploring identity through prismatic light distortion, creating otherworldly compositions that blur the line between reality and dream.",
    coverImage: prismaticPortrait,
    images: [prismaticPortrait],
  },
  {
    id: "digital-currents",
    title: "Digital Currents",
    category: "Digital Art",
    tags: ["DIGITAL", "INSTALLATION"],
    year: "2023",
    client: "Neon Collective",
    description: "Immersive digital projections capturing the flow of data and light, where human figures become conduits for streams of vibrant digital energy.",
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
