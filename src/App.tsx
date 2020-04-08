import React, { useState, useEffect } from 'react';
import './App.scss';
import theme from 'global/theme';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Newsfeed } from 'components';

function App() {
  const [newsFeedItems, setNewsFeedItems] = useState();

  async function getNewsfeed() {
    let response = await fetch(
      `http://localhost:8000/api/v0/frontend/`
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
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Router>
          <ThemeProvider theme={theme}>
            <div style={{ width: '90%' }}>
              <Switch>
                <Route path="/newsfeed">
                  <Link to="/" style={{ color: 'white' }}>
                    Home
                  </Link>
                  <Newsfeed newsfeedItems={newsFeedItems} />
                </Route>

                <Route path="/" exact={true}>
                  <div>
                    <h1>Put Homepage here</h1>
                    <Link to="/newsfeed" style={{ color: 'white' }}>
                      Newsfeed
                    </Link>
                  </div>
                </Route>
              </Switch>
            </div>
          </ThemeProvider>
        </Router>
      </header>
    </div>
  );
}

export default App;
