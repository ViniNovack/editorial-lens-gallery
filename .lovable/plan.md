# Plano: transformar a identidade visual do site para tons de azul

## Objetivo
Tornar o azul a cor dominante do portfólio, mantendo os elementos brancos como estão e transformando as superfícies escuras em um azul muito escuro (quase preto, mas azulado).

## Alterações propostas

### 1. Tokens de cor em `src/index.css`
Ajustar as variáveis CSS do tema claro e escuro para uma paleta azul:

#### Tema escuro (prioridade — é o que o usuário vê no preview)
- `--background`: trocar preto puro por azul muito escuro (~`220 40% 4%`).
- `--card`, `--popover`, `--secondary`, `--muted`, `--sidebar-background`: derivados do mesmo azul escuro, em camadas levemente mais claras.
- `--primary`: azul vibrante médio (~`217 90% 55%`).
- `--accent`: azul brilhante (~`210 100% 60%`).
- `--ring`: azul primário.
- `--border`, `--input`, `--separator`: tons azulados escuros.
- `--hover-bg`: azul escuro um pouco mais claro que o fundo.
- `--foreground` permanece branco (`0 0% 100%`), conforme pedido.

#### Tema claro
- `--background`: branco levemente azulado (~`220 20% 98%`).
- `--foreground`: mantém escuro, mas levemente azulado.
- `--primary` e `--accent`: azul vibrante, iguais ao tema escuro.
- `--card`, `--secondary`, `--muted`: tons claros com leve fundo azulado.
- `--border`, `--input`, `--separator`: cinzas azulados claros.

### 2. Configuração do Tailwind (`tailwind.config.ts`)
- Verificar se as cores mapeadas (`background`, `foreground`, `primary`, `accent`, etc.) continuam apontando para as variáveis CSS sem alteração.
- Adicionar tokens customizados se necessário para gradientes ou sombras azuis.

### 3. Ajustes em componentes
- Revisar `src/components/Header.tsx`, `Footer.tsx` e outras páginas para garantir que não haja cores hardcoded (preto, cinza, amarelo do tema anterior) e que tudo derive dos tokens.
- Preservar textos e imagens existentes.

### 4. Verificação visual
- Gerar screenshots das páginas principais (`/`, `/work`, `/about`, `/contact`) nos temas claro e escuro para validar contraste e legibilidade.
- Confirmar que brancos permanecem brancos e que o fundo escuro ficou azulado, não preto.

## Resultado esperado
O site passa a ter uma identidade visual azulada: fundo escuro azul-marinho quase preto, destaques e interações em azul vibrante, texto branco preservado, e tema claro com base branca e acentos azuis.
