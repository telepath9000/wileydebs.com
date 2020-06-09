function useAttribOrError(attrib, cb) {
  if (attrib < 0) {
    console.log('failed to find attribute');
    return ;
  }
  cb();
}

var g_points = [];
function click(ev, gl, canvas, a_Position) {
  let x = ev.clientX;
  let y = ev.clientY;
  let rect = ev.target.getBoundingClientRect();

  console.log("x and y before: " + x + " " + y);
  x = (((x - rect.left) / canvas.width)*2)-1;
  y = ((((y - rect.top) / canvas.height)*2)-1)*-1;
  console.log("x and y after: " + x +  " " + y);
  g_points.push(x);
  g_points.push(y);
  gl.clear(gl.COLOR_BUFFER_BIT);
  var len = g_points.length;
  for (var i = 0; i < len; i += 2) {
    gl.vertexAttrib3f(a_Position, g_points[i], g_points[i+1], 0.0);
    gl.drawArrays(gl.POINTS, 0, 1);
  }
}

export default function(gl, canvas) {
  const a_Position = gl.getAttribLocation(gl.program, 'a_Position');

  useAttribOrError(a_Position, () => {
    canvas.onmousedown = (ev) => click(ev, gl, canvas, a_Position)
  });
}
