require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const usersRoute = require('./lib/routes/users');
const coinsRoute = require('./lib/routes/coins');

const app = express();
const port = process.env.PORT || 8080;

//Import Routes
app.use(express.json());

app.use('/api/users', usersRoute);
app.use('/api/coins', coinsRoute);

//
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build/index.html'));
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME,
    useFindAndModify: false,
  },
  () => {
    console.log('connected to db!');

    app.listen(port, () => {
      console.log(`server is running http://localhost:${port}`);
    });
  }
);
