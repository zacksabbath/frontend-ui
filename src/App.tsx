import React from 'react';
import theme from './global/theme';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Routes from './Routes';

export const AppWrapper = styled.div`
  text-align: center;
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* font-size: calc(10px + 2vmin); */
  color: white;
  max-width: 700px;
  font-family: ${({ theme }) => theme.font.family};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <GlobalStyle />
        <Routes />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
