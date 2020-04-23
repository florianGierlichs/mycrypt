require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME,
  },

  () => console.log('connected to db!')
);

//Import Routes
app.use(express.json());

const usersRoute = require('./lib/routes/users');

app.use('/api/users', usersRoute);

//
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
