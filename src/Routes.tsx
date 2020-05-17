import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { NewsfeedPage, Homepage, BallotPage } from './components';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/newsfeed" exact>
          <NewsfeedPage />
        </Route>
        <Route path="/ballot" exact>
          <BallotPage />
        </Route>
        <Route path="/issues" exact>
          <Link to="/" style={{ color: 'red' }}>
            Go Home
          </Link>
          <h1>Issues!!!</h1>
        </Route>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}
