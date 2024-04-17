#version 330 core

layout (location = 0) out vec4 fragColor;


uniform sampler2D u_texture_0;

in vec2 uv_0;

void main(){
    vec3 color = texture(u_texture_0, uv_0).rgb;
    fragColor = vec4(color, 1.0);

    
}