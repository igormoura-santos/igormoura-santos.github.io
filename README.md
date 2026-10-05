# Igor Moura — Portfólio

React + TypeScript + Vite + styled-components. Interface em português, responsiva, com animações CSS e respeito a `prefers-reduced-motion`.

## Executar

```sh
npm install
npm run dev
```

`npm run build` verifica TypeScript e gera `dist`. `npm run preview` serve a build.

## Arquitetura atômica

- `src/components/atoms`: elementos básicos e tokens visuais.
- `src/components/molecules`: composição dos cards de projeto.
- `src/components/organisms`: seções completas e navegação.
- `src/components/templates`: composição da página.
- `src/styles`: tema e estilos globais.
- `src/data`: conteúdo de projetos.

## Conteúdo antes de publicar

Os projetos de comunicação visual, web design institucional e Revive Recife usam os trabalhos reais enviados pelo usuário. O estudo de motion segue como conceito ilustrativo identificado. A direção visual inclui colagens, texturas, recortes e animações. Substituir por trabalhos autorizados do Igor com imagens, contexto, participação, processo e resultados verificáveis. Confirmar o endereço do LinkedIn e a disponibilidade profissional com o cliente. O currículo original está em `public/curriculo-igor-moura.pdf`; atualizar esse arquivo quando necessário.

Não há serviço de formulário: contato abre o cliente de email. Nenhuma publicação foi configurada.

## Recursos visuais

`public/artwork-sheet.png` foi criado com a ferramenta integrada de geração de imagens, usando o conceito aprovado como referência. Prompt: quatro quadrantes independentes com mesa escura de objetos de design, colagem de Recife e sketches, papelaria azul e laranja e cena isométrica de jogo; estética de papel recortado, sem conteúdo textual. O componente Artwork seleciona os quadrantes por CSS. `public/paper.svg` fornece textura procedural. As imagens são ilustrativas e não representam projetos reais do cliente.

## Projetos reais

Conteúdo em `src/data/projects.ts`. Arquivos originais em `public/projects/comunicacao-visual` e `public/projects/revive`. As galerias preservam as proporções e oferecem acesso às imagens originais. O texto de processo do Revive se refere à peça de Emily Louise, conforme a explicação fornecida; as demais peças são apresentadas como conjunto. Substituir as capturas pequenas por exportações de maior resolução quando disponíveis.
