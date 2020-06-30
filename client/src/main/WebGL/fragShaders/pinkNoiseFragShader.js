export default `
#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy );

	float color = 0.0;

	
	color += 50.0*sin(4.0*gl_FragCoord.x + 40.0*cos(gl_FragCoord.y + 0.01*time))/2.0;
	color += 40.0*cos(2.0*gl_FragCoord.x + 80.0*sin(gl_FragCoord.y + 0.01*time))/4.0;
	
	color += 70.0*sin(1.0*gl_FragCoord.x + 30.0*cos(gl_FragCoord.y + 0.03*time))/3.0;
	color += 30.0*cos(3.0*gl_FragCoord.x + 60.0*sin(gl_FragCoord.y + 0.03*time + 50.0*cos(gl_FragCoord.x)))/2.0;
	

	gl_FragColor = vec4( vec3( color + gl_FragCoord.x/100.0, color/2000.0 , color + gl_FragCoord.x/100.0), 1.0 );

}`
