import { uniforms, attribs } from './constants';

function prepareAttrib(gl, text, cb, data) {
  let attrib = gl.getAttribLocation(gl.program, text);

  if (attrib < 0)
    console.log('Failed to get the storage location of ' + text);
  else
    cb(gl, attrib, data);
}

function prepareUniform(gl, text, cb, data) {
  let uniform = gl.getUniformLocation(gl.program, text);

  if (uniform < 0)
    console.log('Failed to get the storage location of ' + text);
  else
    cb(gl, uniform, data);
}

function loadShaderBuffer(gl) {
  let verts = [
    1.0, 1.0,
    -1.0, 1.0,
    -1.0, -1.0,
    -1.0, -1.0,
    1.0, -1.0,
    1.0, 1.0
  ];
  let gl_buffer = gl.createBuffer();
  let posLoc = gl.getAttribLocation(gl.program, "a_position");

  gl.bindBuffer(gl.ARRAY_BUFFER, gl_buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(posLoc);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
}

function prepareShaderData(gl, data) {
  uniforms.forEach((el, i) => prepareUniform(gl, el.name, el.func, data[i]));
  loadShaderBuffer(gl);
  attribs.forEach((el, i) => prepareAttrib(gl, el.name, el.func, data[i]));
}

export function WebGL_draw(gl, canvas) {
  let dataArray = [canvas, +new Date * 0.001, { x: window.innerWidth, y: window.innerHeight }];

  console.log(dataArray[1]);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  prepareShaderData(gl, dataArray);
  gl.drawArrays(gl.TRIANGLES, 0, 6);
}
