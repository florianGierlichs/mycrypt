require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

//Import Routes
app.use(express.json());

const usersRoute = require('./lib/routes/users');

app.use('/users', usersRoute);

//
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
