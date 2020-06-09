import React, { useEffect }  from 'react';
import initCanvas from './onResize';
import './css/App.scss';

const WebGLBackground = () => {
  useEffect(initCanvas, []);
  return <canvas id="glBackground" />;
}

export default WebGLBackground;
