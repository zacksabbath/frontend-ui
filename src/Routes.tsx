import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import {
  NewsfeedPage,
  Homepage,
  LocalIssues,
  FederalIssues,
  StateIssues,
} from 'components';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/newsfeed" exact>
          <Link to="/" style={{ color: 'white' }}>
            Go Home
          </Link>
          <NewsfeedPage />
        </Route>
        <Route path="/" exact>
          <Homepage />
        </Route>

        {/* Standin for the Issues Pages  */}
        <Route path="/LocalIssues" exact>
          <LocalIssues />
        </Route>
        <Route path="/FederalIssues" exact>
          <FederalIssues />
        </Route>
        <Route path="/StateIssues" exact>
          <StateIssues />
        </Route>
        {/* end of standing */}
      </Switch>
    </Router>
  );
}
