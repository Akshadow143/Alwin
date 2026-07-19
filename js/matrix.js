// ===============================
// Matrix Rain Background
// ===============================

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

document.body.prepend(canvas);

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.zIndex = "-5";
canvas.style.opacity = "0.15";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&";

const fontSize = 16;

const columns = Math.floor(canvas.width / fontSize);

const drops = Array(columns).fill(1);

function draw() {
   ctx.shadowBlur = 0;
   ctx.fillStyle = "rgba(5,5,5,0.12)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.font = "bold " + fontSize + "px monospace";

// Anime color palette
const colors = [
    "#00E5FF", // Cyan
    "#00BFFF", // Sky Blue
    "#7A00FF", // Purple
];

const color = colors[Math.floor(Math.random() * colors.length)];

ctx.fillStyle = color;

// Glow effect
ctx.shadowColor = color;
ctx.shadowBlur = 10;

    for(let i=0;i<drops.length;i++){

        const text = letters[Math.floor(Math.random()*letters.length)];

        ctx.fillText(text,i*fontSize,drops[i]*fontSize);

        if(drops[i]*fontSize>canvas.height && Math.random()>0.98){

            drops[i]=0;

        }

        drops[i]++;

    }

}

setInterval(draw,35);

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

});
