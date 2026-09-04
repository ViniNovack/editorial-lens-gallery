# Plano: reposicionar o texto de boas-vindas na página inicial

## Objetivo
Mover o parágrafo de boas-vindas do canto inferior esquerdo da tela principal para uma nova seção logo abaixo da dobra, mantendo o texto longo e acolhedor.

## Alterações propostas

### 1. Hero section (`src/pages/Index.tsx`)
- Remover o bloco de texto do canto inferior esquerdo.
- Manter apenas:
  - nome centralizado;
  - botões do LinkedIn e GitHub no canto inferior direito.
- Garantir que a altura da hero continue ocupando a tela cheia (`h-screen`).

### 2. Nova seção de boas-vindas (`src/pages/Index.tsx`)
- Adicionar uma segunda seção abaixo da hero, fora do `relative h-screen`.
- Usar fundo sólido do tema (`bg-background`) para contraste com a imagem acima.
- Centralizar o texto em um container de largura limitada (`max-w-3xl` ou similar).
- Aplicar tipografia do tema (`font-sans`, `text-foreground/80`, `leading-relaxed`) e espaçamento confortável (`py-20 md:py-32`).
- Preservar o conteúdo atual do parágrafo, mantendo as quebras de linha visuais.

### 3. Navegação e ajustes visuais
- Verificar se o `Layout` e o `Header` continuam funcionando corretamente com a nova altura total da página.
- Garantir que o tema claro/escuro se aplique naturalmente ao fundo da nova seção.

## Resultado esperado
A página inicial terá duas camadas: uma hero impactante com o nome e links sociais, seguida por uma seção de apresentação limpa e legível, sem texto sobreposto à imagem de fundo.
