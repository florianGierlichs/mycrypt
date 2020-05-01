const express = require('express');
const User = require('../models/User');
const { getCoinsFromCoincap } = require('../utils/coins');

const router = express.Router();

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
      response
        .status(403)
        .send(`Username ${request.body.username} is already taken.`);
      return console.log(`Username ${request.body.username} is already taken.`);
    }

    const newUser = new User({
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
      return response.status(404).json({ error: `Username doesn't exist` });
    }

    const existingUserPassword = existingUser.password;

    if (existingUserPassword !== password) {
      return response.status(401).send();
    }

    return response.status(200).send();
  } catch (error) {
    response.status(500).json({ error: error });
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
      username: username.toLowerCase(),
      password: password,
      coins: [],
    });

    await newUser.save();
    response.status(200).send();
  } catch (error) {
    response.status(500).send({ error: error });
  }
});

router.post('/coins', async (request, response) => {
  const {
    body: { username, searchResult },
  } = request;

  try {
    const currentUser = await User.findOne({ username });
    console.log('current user :', currentUser);
    const currentUserCoins = currentUser.coins;
    console.log('current user coins :', currentUserCoins);
    const updatedUser = await User.findOneAndUpdate(
      { username: username },
      { coins: [...currentUserCoins, { name: searchResult.name, stock: 0 }] },
      {
        new: true,
        upsert: true,
      }
    );
    console.log('current user:', currentUser);

    console.log('updated user:', updatedUser);
    response.status(201).send();
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

router.get('/:username/coins', async (request, response) => {
  try {
    const username = request.params.username;
    const user = await User.findOne({ username: username });

    const coincapCoins = await getCoinsFromCoincap();

    let filteredCoins = [];
    user.coins.forEach((coin) => {
      coincapCoins.forEach((item) => {
        if (item.name === coin.name) {
          filteredCoins = [...filteredCoins, { ...coin, ...item }];
        }
      });
    });

    return response.json(filteredCoins);
  } catch (error) {
    console.error(error);
    response.status(400).send(error.message);
  }
});

module.exports = router;
