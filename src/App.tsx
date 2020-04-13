import React, { useState, useEffect } from 'react';
import './App.scss';
import theme from 'global/theme';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Routes from './Routes';

const AppWrapper = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  padding: 50px;
`;

function App() {
  const [newsFeedItems, setNewsFeedItems] = useState();

  async function getNewsfeed() {
    let response = await fetch(
      `http://my-json-server.typicode.com/stump-vote/mock-fe-api/newsFeed`
    );
    let data = await response.json();
    setNewsFeedItems(data);
  }

  useEffect(() => {
    getNewsfeed();
  }, []);

  if (!newsFeedItems) {
    return <div>Loading...</div>;
  }

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
