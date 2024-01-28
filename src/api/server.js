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
  await page.goto('https://www.google.com/search?q=vagas+para+programador&sca_esv=602159809&sxsrf=ACQVn09iGCbvc8GPXURznLrtWoPXNTG6mQ:1706452578898&ei=Yma2ZeaqNpvW1sQP3eGV8AY&uact=5&oq=vagas+para+programador&gs_lp=Egxnd3Mtd2l6LXNlcnAiFnZhZ2FzIHBhcmEgcHJvZ3JhbWFkb3JItwlQ2gNYoQdwAXgBkAEAmAGSAaABnwKqAQMwLjK4AQPIAQD4AQHCAgoQABhHGNYEGLAD4gMEGAAgQYgGAZAGAw&sclient=gws-wiz-serp&ibp=htl;jobs&sa=X&ved=2ahUKEwj9s5Wgp4CEAxWvpZUCHUT7B38QudcGKAF6BAgVECk#htivrt=jobs&fpstate=tldetail&htilrad=-1.0&htichips=date_posted:today&htischips=date_posted;today&htidocid=eMZIKi4cPsl1AzYFAAAAAA%3D%3D');
  await page.setViewport({width: 1080, height: 1024});
  await page.waitForSelector('ul'); 
  const liElements = await page.$$('ul li');

  // Itera sobre cada li e extrai o texto do elemento com a classe "BjJfJf"
  for (const liElement of liElements) {
    const nomeDaVaga = await liElement.$eval('.BjJfJf', element => element.textContent.trim());
    const nomeDaEmpresa = await liElement.$eval('.vNEEBe', element => element.textContent.trim());
    const viaSite = await liElement.$eval('.Qk80Jf', element => element.textContent.trim());
    const publicado = await liElement.$eval('.LL4CDc', element => element.textContent.trim());
    // const salario = await spanElement.$eval('.bSuYSc', element => element.textContent.trim());
    // const tempo = await spanElement.$eval('.LL4CDc', element => element.textContent.trim());
    const link = "https://www.google.com/search?q=vagas+para+programador&sca_esv=602159809&sxsrf=ACQVn09iGCbvc8GPXURznLrtWoPXNTG6mQ:1706452578898&ei=Yma2ZeaqNpvW1sQP3eGV8AY&uact=5&oq=vagas+para+programador&gs_lp=Egxnd3Mtd2l6LXNlcnAiFnZhZ2FzIHBhcmEgcHJvZ3JhbWFkb3JItwlQ2gNYoQdwAXgBkAEAmAGSAaABnwKqAQMwLjK4AQPIAQD4AQHCAgoQABhHGNYEGLAD4gMEGAAgQYgGAZAGAw&sclient=gws-wiz-serp&ibp=htl;jobs&sa=X&ved=2ahUKEwj9s5Wgp4CEAxWvpZUCHUT7B38QudcGKAF6BAgVECk#htivrt=jobs&fpstate=tldetail&htilrad=-1.0&htichips=date_posted:today&htischips=date_posted;today&htidocid=eMZIKi4cPsl1AzYFAAAAAA%3D%3D"
      
        vagasArray.push({
            nomeDaVaga,
            nomeDaEmpresa,
            viaSite,
            publicado,
            link,
        });

      console.log(vagasArray)
   
  }

  await browser.close();

  res.json(vagasArray);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
