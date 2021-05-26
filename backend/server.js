// Install babel packages bcs node only understands ES5 version and our code is in ES6, to convert ES6 to ES5 we need babel
import express from 'express';
import data from './data';
import dotenv from '../frontend/node_modules/dotenv';
import mongoose from 'mongoose';
import config from './config';
import userRoutes from './routes/userRoutes';

const app = express();
dotenv.config();
const mongodbURL = config.MONGODB_URL;

mongoose
  .connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((error) => console.log(error.reason));

app.use('/api/users', userRoutes);
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = data.products.find((x) => x._id === productId);

  if (!product) {
    console.log('server.js if condition');
    return res.status(404).send({ msg: 'Product not found...' });
  } else {
    console.log('server.js else condition');
    res.send(product);
  }
});

app.listen(5000, () => {
  console.log('Listening on http://localhost:5000');
});
