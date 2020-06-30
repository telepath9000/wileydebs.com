export default `
#ifdef GL_ES
precision mediump float;
#endif

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main(void) {
  vec2 p = (gl_FragCoord.xy / resolution.xy) - 0.5;

  float c = mod(0.5 * length(p * 10.0) * sin(time) * 10.0 + abs(tan(p.x * p.y * 200.0)), 2.0) + 0.5 * cos(time) - 0.5;
  gl_FragColor = vec4(vec3(c, -c, c * c), 1.0);
}`
