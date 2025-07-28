const heartImage = new Image();
heartImage.src = "Undertale_red_soul.svg.png"; // put heart.png in same folder as index.html

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Example player
let player = {
x: 300,
y: 220,
size: 20,
color: "white",
speed: 4
};

// Key handling
const keys = {};
window.addEventListener("keydown", (e) => keys[e.key] = true);
window.addEventListener("keyup", (e) => keys[e.key] = false);

// Game Loop
function update() {
if (keys["ArrowUp"]) player.y -= player.speed;
if (keys["ArrowDown"]) player.y += player.speed;
if (keys["ArrowLeft"]) player.x -= player.speed;
if (keys["ArrowRight"]) player.x += player.speed;
}

function draw() {
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

  function draw() {
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Draw the heart image instead of a square
ctx.drawImage(
heartImage,
player.x,
player.y,
player.size,
player.size
);
}

// Player
ctx.fillStyle = player.color;
ctx.fillRect(player.x, player.y, player.size, player.size);
}

function loop() {
update();
draw();
requestAnimationFrame(loop);
}
loop();
