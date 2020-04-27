import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { NewsfeedPage, Homepage, Local, Federal, State } from 'components';

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
        <Route path="/Local" exact>
          <Local />
        </Route>
        <Route path="/Federal" exact>
          <Federal />
        </Route>
        <Route path="/State" exact>
          <State />
        </Route>
        {/* end of standing */}
      </Switch>
    </Router>
  );
}
