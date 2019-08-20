require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./src/routes');
const { saveRequest } = require('./src/middlewares/LogMiddleware');

const app = express();

app.use(express.json());
app.use(saveRequest);
app.use(routes);

async function start(){
  try{
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-9uoaa.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
      { useNewUrlParser: true }
    );

    await app.listen(process.env.PORT);

    console.log(`server listen on port ${process.env.PORT}`)
  }catch(error){
    console.log(error);
  }
}

start();
