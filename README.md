## Desafio
Criar uma API com um endpoint para acessar o site "https://webscraper.io/test-sites/e-commerce/static/computers/laptops" e retornar todos os laptops da marca Lenovo ordenando do mais barato para o mais caro.  

Observação: não utilizar Puppeteer ou Selenium.

## Solução
A solução pode ser encontrada no endpoint: 
```
http://localhost:3000/api/laptop?brand=Lenovo&order=asc
```

## Passo a Passo
- Clonar o repositório
```
git clone git@github.com:Lemersom/ScraperLaptopsTest.git
```

- Navegar até a pasta do projeto
```
cd ScraperLaptopsTest
```

- Instalar dependências
```
npm install
```

- Iniciar servidor
```
npm start
```

- Acessar a URL do desafio
```
http://localhost:3000/api/laptop?brand=Lenovo&order=asc
```