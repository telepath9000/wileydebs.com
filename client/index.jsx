import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/main/App';
import LinksPath from './src/linksPath/LinksPath';

const paths = {
  '/': App,
  '/links': LinksPath
};

const Index = () => {
  const Result = paths[window.location.pathname] || paths['/'];

  return <Result/>
}

ReactDOM.render(<Index/>, document.getElementById("root"));
