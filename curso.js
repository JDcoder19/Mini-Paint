const canvas = document.getElementById('canvas');
const context = canvas.getContext ("2d");
const dif = canvas.getBoundingClientRect();

let painting, color, linewidth, difX, difY;

canvas.addEventListener("mousedown", e => {
    difX = e.clientX - dif.left;
    difY = e.clienty - dif.top;
    painting = true;
    color = document.getElementById("colores").value;
    linewidth = document.getElementById("lw").value;
    context.beginPath();
})

canvas.addEventListener("mousemove", e =>{
    if (painting){
        dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top);
        difX = e.clientX - difX.left;
        difY = e.clienty - difY.top;
    }

})

canvas.addEventListener("mouseup", () =>{
    context.closePath();
    painting = false;
})

const dibujar = (x1, y1, x2, y2) =>{
    context.strokeStyle = color;
    context.lineWidth = linewidth;
    context.moveTo (x1,y1);
    context.lineTo (x2,y2);
    context.stroke();
}

const borrarCanvas = ()=>{
    context.clearRect(0, 0, canvas.width, canvas.height);
}