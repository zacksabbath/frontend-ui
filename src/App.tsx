import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Card from './components/molecules/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <div style={{width:"90%"}}>
          <Card newsFeedImage="http://stump.zackrose.net/images/press_capital.png"/>
        </div>

      </header>

    </div>
  );
}

export default App;
