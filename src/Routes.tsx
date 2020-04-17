import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { NewsfeedPage, Homepage, Header } from 'components';

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
        {/*  remove before push, temp route */}
        <Route path="/header" exact>
          <Header />
          {/*  */}
        </Route>

        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}
