import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { PortfolioTemplate } from './components/templates/PortfolioTemplate';

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><ThemeProvider theme={theme}><GlobalStyle /><PortfolioTemplate /></ThemeProvider></React.StrictMode>);
