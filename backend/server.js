// Install babel packages bcs node only understands ES5 version and our code is in ES6, to convert ES6 to ES5 we need babel
import express from 'express';
import data from './data';
const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(5000, () => {
  console.log('Listening on http://localhost:5000');
});
