var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="color";
linewidth="linewidth";
canvas.addEventListener("mousedown", mymousedown);
function mymousedown(e){
    mouseEvent="mousedown";
    color=document.getElementById("color").value;
    linewidth=document.getElementById("linewidth").value;
    radius=document.getElementById("radius").value;
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        console.log("Current position of x and y are");
        console.log("x="+current_position_of_x+"y="+current_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=linewidth;
        ctx.arc(current_position_of_x,current_position_of_y,radius,0,2*Math.PI);
        console.log("Last position of x and y are");
        console.log("x="+last_position_of_x+"y="+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("Current position of x and y are");
        console.log("x="+current_position_of_x+"y="+current_position_of_y);
        ctx.LineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseEvent="mouseleave";
}