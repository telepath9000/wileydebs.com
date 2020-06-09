function createShader(gl, source, type) {
  var shader = gl.createShader(type);

  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.log("ERROR compiling vertex shader!", gl.getShaderInfoLog(shader));
  }
  return shader;
}

export function initShaders(gl, vst, fst) {
  const program = gl.createProgram();
  const vertexShader = createShader(gl, vst, gl.VERTEX_SHADER);
  const fragmentShader = createShader(gl, fst, gl.FRAGMENT_SHADER);

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.useProgram(program);
  gl.program = program;
  return program;
}
