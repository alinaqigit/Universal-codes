const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Css grid</title>
      <style>
          .container{
              display: grid;
              grid-template-columns: repeat(5,1fr );
              grid-template-rows: repeat(4,1fr);
              grid-column-gap:7rem;
              grid-gap:1rem;
          }
          .box{
              border: 2px solid black;
              background-color: red;
              padding: 23px;
          }
          .box:first-child{
              /* grid-column-start: 1;
              grid-column-end: 3;
              grid-row-start: 1;
              grid-row-end: 3; */
              grid-column: 1 / span 3;
              grid-row: 1 / span 3;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="box">item1</div>
          <div class="box">item2</div>
          <div class="box">item3</div>
          <div class="box">item4</div>
          <div class="box">item5</div>
          <div class="box">item6</div>
          <div class="box">item7</div>
          <div class="box">item8</div>
          <div class="box">item8</div>
          <div class="box">item8</div>
          <div class="box">item8</div>
          <div class="box">item8</div>
          <div class="box">item8</div>
          <div class="box">item8</div>
          <div class="box">item8</div>
      </div>
  </body>
  </html>'`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});