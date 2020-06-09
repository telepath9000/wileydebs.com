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
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  initShaders(gl, vertShaderText, fragShaderText);
  if (gl.program)
    WebGL_draw(gl, canvas);
}
