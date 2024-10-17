let pantallaqueestoy = 0;
const totaldepantallas = 27;
let pantallas = []; 

function preload() {
  for (let i = 0; i < totaldepantallas; i++) {
    pantallas[i] = loadImage(`data/narutopantalla${i}.jpeg`); 
  }
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(150);
  dibujarPantalla();
  dibujarBoton();
  mostrarPantallaConCursor();
}

function mousePressed() {
  if (
    pantallaqueestoy > 0 && 
    mouseX > width - 120 && mouseX < width - 20 &&
    mouseY > height - 60 && mouseY < height - 20
  ) {
    pantallaqueestoy = (pantallaqueestoy + 1) % totaldepantallas;
  }
  // Botón Inicio
  if (
    pantallaqueestoy === 0 && 
    mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
    mouseY > height - 60 && mouseY < height - 20
  ) {
    pantallaqueestoy = 1; 
  }
}
