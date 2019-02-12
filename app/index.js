import path from 'path';
import express from 'express';
import { json, urlencoded } from 'body-parser';
import { connect, set } from 'mongoose';


const app = express();

connect(process.env.MONGO_URL, {
  useNewUrlParser: true
})
.then(() => {
  console.log('Connected to database!');
})
.catch(() => {
  console.log('Connection failed!');
});

set('useCreateIndex', true);

app.use(json());
app.use(urlencoded({extended: false}));
app.use('/images', express.static(path.join('static/images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

module.exports = app;
