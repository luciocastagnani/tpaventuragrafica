function dibujarBoton() {
  if (pantallaqueestoy > 0) {
    fill(0, 150, 0);
    rect(width - 120, height - 60, 100, 40);
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text('Siguiente', width - 70, height - 40);
  }
  
  if (pantallaqueestoy === 0) {
    fill(0, 0, 150);
    rect(width / 2 - 50, height - 60, 100, 40);
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text('Inicio', width / 2, height - 40);
  }
}

function mostrarPantallaConCursor() {
  fill(255);
  textSize(16);
  textAlign(LEFT, TOP);
  text(`Pantalla ${pantallaqueestoy + 1}`, mouseX + 10, mouseY + 10);
}
function dibujarPantalla() {
  let pantallaActual = pantallas[pantallaqueestoy];
  if (pantallaActual) {
    image(pantallaActual, 0, 0, width, height);
  } 
}
