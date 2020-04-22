require('dotenv').config();
const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
const User = require('../models/User');

let client = null;
let db = null;

/* ---post--- */

router.post('/', async (request, response) => {
  try {
    client = new MongoClient(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect().then(console.log('DB connected'));
    db = client.db(process.env.DB_NAME);
    const usersCollection = db.collection('users');

    const existingUser = await usersCollection.findOne({
      username: request.body.username,
    });

    if (existingUser) {
      response.send(`Username ${request.body.username} is already taken.`);
      return console.log(`Username ${request.body.username} is already taken.`);
    }

    const newUser = await new User({
      username: request.body.username,
      password: request.body.password,
      coins: request.body.coins,
    });

    const user = await usersCollection.insertOne(newUser);
    response.send('got the new user, thank you');
    console.log(`got the new user ${user}`);
  } catch {
    console.log('post did not work');
  }
});

router.post('/login', async (request, response) => {
  const {
    body: { username, password },
  } = request;
  try {
    client = new MongoClient(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect().then(console.log('DB connected'));
    db = client.db(process.env.DB_NAME);
    const usersCollection = db.collection('users');

    const existingUser = await usersCollection.findOne({
      username: username.toLowerCase(),
    });

    if (!existingUser) {
      return response.status(404).send({ error: `Username doesn't exist` });
    }

    const existingUserPassword = existingUser.password;

    if (existingUserPassword === password) {
      return response.status(200).send();
    } else {
      return response.status(401).send();
    }
  } catch (error) {
    console.log('post did not work', error);
  }
});

/* ---get--- */

router.get('/', async (request, response) => {
  try {
    client = new MongoClient(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect().then(console.log('DB connected'));
    db = client.db(process.env.DB_NAME);
    const usersCollection = db.collection('users');
    const users = await usersCollection.find().toArray();
    console.log(users);
    response.send(users);
    console.log('get all users work');
  } catch {
    console.log('get all did not work');
  }
});

router.get('/:username', async (request, response) => {
  try {
    client = new MongoClient(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect().then(console.log('DB connected'));
    db = client.db(process.env.DB_NAME);
    const usersCollection = db.collection('users');
    const username = request.params.username;
    const user = await usersCollection.findOne({ username: username });

    if (user === null) {
      response.send(`There is no user ${request.params.username}.`);
      return console.log(`There is no user ${request.params.username}.`);
    }

    console.log(user);
    response.send(user);
    console.log(`got the user ${username}`);
  } catch {
    console.log('get one did not work');
  }
});

module.exports = router;
