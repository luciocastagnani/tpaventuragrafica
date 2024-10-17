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
  mostrarPantallaConCursor();
  dibujarBotonesSegunPantalla();
}

function dibujarPantalla() {
  let pantallaActual = pantallas[pantallaqueestoy];
  if (pantallaActual) {
    image(pantallaActual, 0, 0, width, height);
  }
}

function dibujarBotonesSegunPantalla() {
  if (pantallaqueestoy === 0) {
    dibujarBotonInicio();
  } else if ([2, 4, 11, 17, 23].includes(pantallaqueestoy)) {
    dibujarBotonOpcion('Sí', width / 4 - 50, height - 60);
    dibujarBotonOpcion('No', (3 * width) / 4 - 50, height - 60);
  } else if (pantallaqueestoy === 18) {
    dibujarBotonReiniciar();
    dibujarBotonOpcion('Continuar', (3 * width) / 4 - 50, height - 60);
  } else if ([19, 5, 24, 26].includes(pantallaqueestoy)) {
    dibujarBotonReiniciar();
    dibujarBotonCreditos();
  } else if (pantallaqueestoy === 27) {
    dibujarBotonReiniciar();
  } else {
    dibujarBotonSiguiente();
  }
}

function dibujarBotonInicio() {
  let botonX = width / 2 - 50;
  let botonY = height - 60;
  fill(0, 150, 0);
  rect(botonX, botonY, 100, 40);
  fill(255);
  textAlign(CENTER, CENTER);
  text('Inicio', botonX + 50, botonY + 20);
}

function dibujarBotonSiguiente() {
  fill(0, 150, 0);
  rect(width - 120, height - 60, 100, 40);
  fill(255);
  textAlign(CENTER, CENTER);
  text('Siguiente', width - 70, height - 40);
}

function dibujarBotonOpcion(texto, x, y) {
  fill(0, 100, 255);
  rect(x, y, 100, 40);
  fill(255);
  textAlign(CENTER, CENTER);
  text(texto, x + 50, y + 20);
}

function dibujarBotonReiniciar() {
  fill(255, 140, 0);
  rect(width / 2 - 110, height - 60, 100, 40);
  fill(255);
  textAlign(CENTER, CENTER);
  text('Reiniciar', width / 2 - 60, height - 40);
}

function dibujarBotonCreditos() {
  fill(0, 0, 255);
  rect(width / 2 + 10, height - 60, 100, 40);
  fill(255);
  textAlign(CENTER, CENTER);
  text('Créditos', width / 2 + 60, height - 40);
}

function mousePressed() {
  if (pantallaqueestoy === 0 && clicEnBoton(width / 2 - 50, height - 60, 100, 40)) {
    pantallaqueestoy = 1;
  } else if (pantallaqueestoy === 18) {
    if (clicEnBoton(width / 2 - 110, height - 60, 100, 40)) {
      pantallaqueestoy = 0;
    } else if (clicEnBoton((3 * width) / 4 - 50, height - 60, 100, 40)) {
      pantallaqueestoy = 19;
    }
  } else if ([19, 5, 24, 26].includes(pantallaqueestoy)) {
    if (clicEnBoton(width / 2 - 110, height - 60, 100, 40)) {
      pantallaqueestoy = 0;
    } else if (clicEnBoton(width / 2 + 10, height - 60, 100, 40)) {
      pantallaqueestoy = totaldepantallas;
    }
  } else if (pantallaqueestoy === 27 && clicEnBoton(width / 2 - 110, height - 60, 100, 40)) {
    pantallaqueestoy = 0;
  } else if (clicEnBoton(width - 120, height - 60, 100, 40)) {
    avanzarPantalla();
  } else {
    verificarOpciones();
  }
}

function avanzarPantalla() {
  const siguiente = {
    3: 6, 6: 7, 7: 8, 8: 9, 9: 10, 10: 11,
    15: 16, 16: 17, 20: 21, 21: 22, 22: 23
  };
  pantallaqueestoy = siguiente[pantallaqueestoy] || pantallaqueestoy + 1;
}

function verificarOpciones() {
  const opciones = {
    2: [3, 4], 4: [3, 5], 11: [14, 12], 12: [13, 15],
    17: [18, 20], 23: [24, 25]
  };

  if (opciones[pantallaqueestoy]) {
    const [op1, op2] = opciones[pantallaqueestoy];
    if (clicEnBoton(width / 4 - 50, height - 60, 100, 40)) {
      pantallaqueestoy = op1;
    } else if (clicEnBoton((3 * width) / 4 - 50, height - 60, 100, 40)) {
      pantallaqueestoy = op2;
    }
  }
}

function clicEnBoton(x, y, w, h) {
  return mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h;
}

function mostrarPantallaConCursor() {
  fill(255);
  textSize(16);
  textAlign(LEFT, TOP);
  text(`Pantalla ${pantallaqueestoy}`, mouseX + 10, mouseY + 10);
}
