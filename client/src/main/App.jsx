import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import WebGLBackground from './WebGLBackground';
import { WebGL_render } from './WebGL/render.js';
import { router } from './router';
import onResize from './onResize';
import './css/App.scss';

const App = () => {
  const [page, setPage] = useState("Home");
  const handleIndexClick = event => setPage(event.target.innerText);
  const Page = router(page);

  useEffect(() => {
    window.onload = WebGL_render;
    window.onresize = onResize;
  }, []);
  return (
    <div>
      <WebGLBackground />
      <NavBar handleClick={handleIndexClick} />
      <div className="topBuffer" >
        <Page className="pageContents" />
      </div>
    </div>
  );
};

export default App;
