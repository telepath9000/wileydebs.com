export const uniforms = [
  {
    name: "mouse",
    func: (gl, uLoc, canvas) => gl.uniform2f(uLoc, canvas.clientX, canvas.clientY)
  },
  {
    name: "time",
    func: (gl, uLoc, time) => gl.uniform1f(uLoc, time)
  },
  {
    name: "resolution",
    func: (gl, uLoc, xy) => gl.uniform2f(uLoc, xy.x, xy.y)
  }
];

export const attribs = [];
