import React, {useState, useEffect} from 'react';
import './App.scss';
import theme from 'theme';
import {ThemeProvider} from 'styled-components';

import {Newsfeed} from 'components'

function App() {
  const [newsFeedItems, setNewsFeedItems] = useState()

  async function getNewsfeed() {
    let response = await fetch(`http://my-json-server.typicode.com/stump-vote/mock-fe-api/newsFeed`);
    let data = await response.json();
    setNewsFeedItems(data);
};

  useEffect(() => {
    getNewsfeed();
  }, []);

  if (!newsFeedItems) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ThemeProvider theme={theme}>
          <div style={{width:"90%"}}>
            <Newsfeed newsfeedItems = {newsFeedItems} />
          </div>
        </ThemeProvider>

      </header>

    </div>
  );
}

export default App;
