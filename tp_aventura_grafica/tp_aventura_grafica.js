let pantallaqueestoy = 0;
const totaldepantallas = 25;
let img1;
function preload() {
  img1 = loadImage('data/narutopantalla1.jpeg'); // Cargar la imagen para la pantalla 1
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(150);
  drawScreen(); 
  drawButton(); 
  mostrarPantallaConCursor(); // Mostrar el número de pantalla junto al cursor
}

function drawScreen() {
  if (pantallaqueestoy === 0) {
    image(img1, 0, 0, width, height); 
}
}

function mousePressed() {
  if (mouseX > width - 120 && mouseX < width - 20 && mouseY > height - 60 && mouseY < height - 20) {
    pantallaqueestoy = (pantallaqueestoy + 1) % totaldepantallas; // Avanzar a la siguiente pantalla
  }
}
