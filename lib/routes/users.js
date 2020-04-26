require('dotenv').config();
const express = require('express');
const router = express.Router();
const User = require('../models/User');

/* ---post--- */

router.post('/', async (request, response) => {
  try {
    const {
      body: { username },
    } = request;
    const existingUser = await User.findOne({
      username: username.toLowerCase(),
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

    await newUser.save();
    response.send('got the new user, thank you');
    console.log(`got the new user ${username}`);
  } catch {
    console.log('post did not work');
  }
});

router.post('/login', async (request, response) => {
  const {
    body: { username, password },
  } = request;
  try {
    const existingUser = await User.findOne({
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
    response.status(500).send({ error: error });
  }
});

router.post('/signup', async (request, response) => {
  const {
    body: { username, password },
  } = request;
  try {
    const existingUser = await User.findOne({
      username: username.toLowerCase(),
    });

    if (existingUser) {
      return response.status(400).send({ error: `Username already exists.` });
    }

    const newUser = new User({
      username: username,
      password: password,
      coins: {},
    });

    await newUser.save();
    response.status(200).send();
  } catch (error) {
    response.status(500).send({ error: error });
  }
});

router.post('/addCrypto', async (request, response) => {
  const {
    body: { username, searchResult },
  } = request;

  try {
    const currentUser = await User.findOne({ username });
    const currentUserCoins = currentUser.coins;
    const updatedUser = await User.findOneAndUpdate(
      { username: username },
      { coins: { ...currentUserCoins, [searchResult]: 0 } },
      {
        new: true,
        upsert: true,
      }
    );
    console.log('current user:', currentUser);

    console.log('updated user:', updatedUser);
    response.status(200).send();
  } catch (error) {
    response.status(400).send({ error: error });
  }
});

/* ---get--- */

router.get('/', async (request, response) => {
  try {
    const users = await User.find();
    console.log(users);
    response.send(users);
    console.log('get all users work');
  } catch (error) {
    console.log('get all did not work');
    response.send(error);
  }
});

router.get('/:username', async (request, response) => {
  try {
    const username = request.params.username;
    const user = await User.findOne({ username: username });

    if (user === null) {
      response.send(`There is no user ${username}.`);
      return console.log(`There is no user ${username}.`);
    }

    console.log(user);
    response.send(user);
    console.log(`got the user ${username}`);
  } catch {
    console.log('get one did not work');
  }
});

module.exports = router;
