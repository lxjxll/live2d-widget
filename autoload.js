const live2d_path="https://cdn.jsdelivr.net/gh/lxjxll/live2d-widget/";function loadExternalResource(e,t){return new Promise(((i,a)=>{let n;"css"===t?(n=document.createElement("link"),n.rel="stylesheet",n.href=e):"js"===t&&(n=document.createElement("script"),n.src=e),n&&(n.onload=()=>i(e),n.onerror=()=>a(e),document.head.appendChild(n))}))}screen.width>=1024&&Promise.all([loadExternalResource(live2d_path+"waifu.min.css","css"),loadExternalResource(live2d_path+"live2d.min.js","js"),loadExternalResource(live2d_path+"waifu-tips.min.js","js")]).then((()=>{initWidget({waifuPath:live2d_path+"waifu-tips.json",cdnPath:"http://test.lxjxll.ltd/"})}));