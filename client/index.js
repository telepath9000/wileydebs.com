import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-route-dom';

import App from './src/main/App';

ReactDOM.render(<App />, document.getElementById("root"));
