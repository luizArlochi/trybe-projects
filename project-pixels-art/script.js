// Adiciona à página o título "Paleta de Cores"

const title = document.createElement('h1');
title.id = 'title';
const text = document.createTextNode('Paleta de Cores');
title.appendChild(text);
document.body.appendChild(title);

// Adiciona à página uma paleta contendo quatro cores distintas

const palette = document.createElement('div');
palette.id = 'color-palette';
document.body.appendChild(palette);

const colors = ['red', 'green', 'blue', 'yellow'];

// Adiciona a cor preta como a primeira cor da paleta de cores e
// defina a cor preta como cor inicial da paleta de cores.
function allColors() {
  colors.unshift('black');
  colors.slice(0, 4).forEach(color => {
    const colorPalette = document.createElement('div');
    colorPalette.className = 'color';
    colorPalette.style.backgroundColor = color;

    if (color === 'black') {
      colorPalette.classList.add('selected');
    }
    palette.appendChild(colorPalette);
  });
}
allColors();

// Adiciona um botão para gerar cores aleatórias para a paleta de cores.

const randomColorBtn = document.createElement('button');
randomColorBtn.id = 'button-random-color';
randomColorBtn.innerHTML = 'Cores aleatórias';
document.body.appendChild(randomColorBtn);

// Cria um botão que retorne a cor do quadro para a cor inicial.

const clearBoardBtn = document.createElement('button');
clearBoardBtn.id = 'clear-board';
clearBoardBtn.innerHTML = 'Limpar quadro';
document.body.appendChild(clearBoardBtn);

// Implementa uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página.

function savePalette(colors) {
  localStorage.setItem('colorPalette', JSON.stringify(colors));
}

randomColorBtn.addEventListener('click', () => {
  const randomColors = ['black'];
  for (let index = 0; index < 3; index += 1) {
    const randomHex = Math.floor(Math.random() * 16777216).toString(16);
    randomColors.push(`#${randomHex}`);
  }
  palette.innerHTML = '';
  randomColors.forEach((color) => {
    const colorPalette = document.createElement('div');
    colorPalette.className = 'color';
    colorPalette.style.backgroundColor = color;
    palette.appendChild(colorPalette);
  });

  savePalette(randomColors);
});

window.addEventListener('load', () => {
  const savedPalette = localStorage.getItem('colorPalette');
  if (savedPalette) {
    const colors = JSON.parse(savedPalette);
    palette.innerHTML = '';
    colors.forEach((color) => {
      const colorPalette = document.createElement('div');
      colorPalette.className = 'color';
      colorPalette.style.backgroundColor = color;
      palette.appendChild(colorPalette);
    });
  }
});

// Adiciona à página um quadro contendo 25 pixels e
// faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.

const pixelBoard = document.createElement('div');
pixelBoard.id = 'pixel-board';
document.body.appendChild(pixelBoard);

for (let index = 0; index < 5; index += 1) {
  for (let index2 = 0; index2 < 5; index2 += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    pixel.style.backgroundColor = 'white';
    pixelBoard.appendChild(pixel);
  }
}

// Cria uma função para selecionar uma cor na paleta de cores.

const colorElements = document.querySelectorAll('.color');

colorElements.forEach((colorElement) => {
  colorElement.addEventListener('click', (event) => {
    const selectedColor = event.currentTarget;
    if (!selectedColor.classList.contains('selected')) {
      colorElements.forEach((color) => {
        color.classList.remove('selected');
      });
      selectedColor.classList.add('selected');
    }
  });
});

// Cria uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.

const pixelElements = document.querySelectorAll('.pixel');
let selectedColor = document.querySelector('.selected');

colorElements.forEach((colorElement) => {
  colorElement.addEventListener('click', () => {
    selectedColor.classList.remove('selected');
    selectedColor = event.currentTarget;
    selectedColor.classList.add('selected');
  });
});

pixelElements.forEach((pixelElement) => {
  pixelElement.addEventListener('click', () => {
    pixelElement.style.backgroundColor = selectedColor.style.backgroundColor;
  });
});

// Cria um botão que retorne a cor do quadro para a cor inicial.

clearBoardBtn.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = 'white';
  });
});

// Cria uma função para salvar e recuperar o seu desenho atual no localStorage.

function saveBoard(pixelElements) {
  const pixels = [];
  pixelElements.forEach((pixel) => {
    pixels.push({
      color: pixel.style.backgroundColor,
      left: pixel.offsetLeft,
      top: pixel.offsetTop,
    });
  });
  localStorage.setItem('pixelBoard', JSON.stringify(pixels));
}

pixelElements.forEach((pixelElement) => {
  pixelElement.addEventListener('click', () => {
    pixelElement.style.backgroundColor = selectedColor.style.backgroundColor;
    saveBoard(pixelElements);
  });
});

window.addEventListener('load', () => {
  const savedDrawing = localStorage.getItem('pixelBoard');
  if (savedDrawing) {
    const pixels = JSON.parse(savedDrawing);
    pixels.forEach((pixel) => {
      const pixelElement = document.elementFromPoint(pixel.left, pixel.top);
      pixelElement.style.backgroundColor = pixel.color;
    });
  }
});
