const puppeteer = require('puppeteer');

test('La página tiene un título y un mensaje Hola Mundo', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${__dirname}/../index.html`);
  const title = await page.title();
  const content = await page.$eval('h1', el => el.textContent);

  expect(title).toBe('Hola Mundo');
  expect(content).toBe('Hola Mundo');

  await browser.close();
});
