import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import {NewsfeedItem} from './components';
import CardContent from './components/molecules/Cards/NewsCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <div style={{width:"90%"}}>
          <NewsfeedItem newsFeedImage="http://stump.zackrose.net/images/press_capital.png">
            <CardContent />
          </NewsfeedItem>
        </div>

      </header>

    </div>
  );
}

export default App;
