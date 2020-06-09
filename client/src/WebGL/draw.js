import handleInput from './input';

function prepareAttrib(gl, text, cb) {
  let attrib = gl.getAttribLocation(gl.program, text);

  if (attrib < 0) {
    console.log('Failed to get the storage location of ' + text);
    return ;
  }
  cb(attrib);
}

export function WebGL_draw(gl, canvas) {
  const a_Positionλ = (attr) => gl.vertexAttrib3f(attr, 0.0, 0.0, 0.0);
  const a_PointSizeλ = (attr) => gl.vertexAttrib1f(attr, 10.0);

  prepareAttrib(gl, 'a_Position', a_Positionλ);
  prepareAttrib(gl, 'a_PointSize', a_PointSizeλ);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  handleInput(gl, canvas);
//  gl.drawArrays(gl.POINTS, 0, 1);
}
