import { initShaders } from './shader';
import { WebGL_draw } from './draw'
import vertShaderText from './vertShader';
import fragShaderText from './fragShader';

export function WebGL_render() {
  const canvas = document.querySelector("#glBackground");
  const gl = canvas.getContext("webgl");

  if (gl == null) {
    alert("Unable to initialize WebGL. not suported");
    return ;
  }
  initShaders(gl, vertShaderText, fragShaderText);
  if (gl.program)
    window.setInterval(() => WebGL_draw(gl, canvas), 20);
}
