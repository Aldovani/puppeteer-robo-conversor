const puppeteer = require("puppeteer");
const readlineSync = require("readline-sync");

async function robo() {
  const moedaBase = readlineSync.question("Moeda base: ") || "dolar";
  const moedaFinal = readlineSync.question("Moeda final: ") || "real";
  const valor = readlineSync.question("Valor a ser convertido:  ") || "1";
  const URL = `https://www.google.com/search?q=0+${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&aqs=chrome..69i57j0i10i433j0l8.4720j1j7&sourceid=chrome&ie=UTF-8`;

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(URL);
  await page.click(".ZEB7Fb.vk_gy.vk_sh.Hg3mWc");
  await page.type(".ZEB7Fb.vk_gy.vk_sh.Hg3mWc", valor);

  const resultado = await page.evaluate(() => {
    return {
      moedaBase: document.querySelector(".ZEB7Fb.vk_gy.vk_sh.Hg3mWc").value,
      moedaFinal: document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value,
    };
  });

  
 
    await browser.close();
  }
  robo();
  