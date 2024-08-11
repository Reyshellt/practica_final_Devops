const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('La página tiene un título y un mensaje Hola Mundo', () => {
  // Cargar el archivo HTML
  const filePath = path.join(__dirname, '..', 'index.html');
  const htmlContent = fs.readFileSync(filePath, 'utf-8');
  
  // Crear un DOM simulado
  const dom = new JSDOM(htmlContent);
  const { document } = dom.window;
  
  // Verificar el título de la página
  const title = document.querySelector('title').textContent;
  expect(title).toBe('Hola Mundo');

  // Verificar el contenido de la etiqueta h1
  const h1Content = document.querySelector('h1').textContent;
  expect(h1Content).toBe('Hola Mundo');
});
