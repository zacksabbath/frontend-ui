import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faThumbsUp,
  faThumbsDown,
  faEllipsisH,
  faCalendarAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
// import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

library.add(faThumbsUp, faThumbsDown, faEllipsisH, faCalendarAlt, faUser);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
