import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import {Newsfeed} from './components'
import newsFeedItems from './components/pages/Newsfeed/NewsfeedItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <div style={{width:"90%"}}>
          <Newsfeed newsfeedItems = {newsFeedItems} />
        </div>

      </header>

    </div>
  );
}

export default App;
