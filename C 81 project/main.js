canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200, 200, 40, 0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color=document.getElementById("color").value;
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_Y = e.clientY - canvas.offsetTop;
    console.log("X= "+mouse_x+" ,Y= "+mouse_Y);
    circle(mouse_x,mouse_Y);
}

function circle(mouse_x,mouse_Y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_Y, 40, 0, 2*Math.PI);
    ctx.stroke();
}

function cleararea() { ctx.clearRect(0, 0, canvas.width, canvas.height); }