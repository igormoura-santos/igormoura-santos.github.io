import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 90px; }
  body { margin: 0; background: ${({ theme }) => theme.colors.ink}; color: ${({ theme }) => theme.colors.paper}; font-family: Arial, Helvetica, sans-serif; -webkit-font-smoothing: antialiased; }
  a { color: inherit; text-decoration: none; } button { font: inherit; } button, a { -webkit-tap-highlight-color: transparent; }
  button { cursor: pointer; } ::selection { background: #ff572d; color: #181918; }
  :focus-visible { outline: 3px solid #ff572d; outline-offset: 6px; }
  img { max-width: 100%; display: block; } h1,h2,h3,p { margin: 0; }
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } *, *::before, *::after { animation: none !important; transition: none !important; } }
`;
