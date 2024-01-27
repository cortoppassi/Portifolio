const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
const port = 3001;
app.use(cors());
app.get('/api/vagas', async (req, res) => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  const vagasArray = [];

  // Navigate the page to a URL
  await page.goto('https://www.google.com/search?q=vagas+de+trabalho+programador+em+salvador&oq=vagas+de+trabalho+programador+em+salvador&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDc2MzBqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8&ibp=htl;jobs&sa=X&ved=2ahUKEwiFu9bC1P2DAxXGrZUCHYqhDxgQudcGKAF6BAgVECM&sxsrf=ACQVn08ahCWbLn1Ape9xqxqwfqZ5o6h1xg:1706361655506#htivrt=jobs&fpstate=tldetail&htichips=date_posted:today&htischips=date_posted;today&htidocid=TxPNbTOxpf8PIDncAAAAAA%3D%3D');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Espera até que a página esteja totalmente carregada
  await page.waitForSelector('ul'); // Você pode ajustar o seletor conforme necessário

  // Extrai todas as li's do elemento ul
  const liElements = await page.$$('ul li'); // Seleciona todos os elementos li dentro da ul

  // Itera sobre cada li e extrai o texto do elemento com a classe "BjJfJf"
  for (const liElement of liElements) {
    const nomeDaVaga = await liElement.$eval('.BjJfJf', element => element.textContent.trim());
    const nomeDaEmpresa = await liElement.$eval('.vNEEBe', element => element.textContent.trim());
    const viaSite = await liElement.$eval('.Qk80Jf', element => element.textContent.trim());
    const publicado = await liElement.$eval('.LL4CDc', element => element.textContent.trim());
    // const salario = await spanElement.$eval('.bSuYSc', element => element.textContent.trim());
    // const tempo = await spanElement.$eval('.LL4CDc', element => element.textContent.trim());
    // const link = await liElement.$eval('.BjJfJf a', anchor => anchor.href);
      
        vagasArray.push({
            nomeDaVaga,
            nomeDaEmpresa,
            viaSite,
            publicado,
        });

      console.log(vagasArray)
   
  }

  await browser.close();

  res.json(vagasArray);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
