let pantallaqueestoy = 0;
const totaldepantallas = 25;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(150);
  drawButton();
  mostrarPantallaConCursor();
}

function mousePressed() {
  if (mouseX > width - 120 && mouseX < width - 20 && mouseY > height - 60 && mouseY < height - 20) {
    pantallaqueestoy = (pantallaqueestoy + 1) % totaldepantallas;
  }
}
