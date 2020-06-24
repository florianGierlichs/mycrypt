const mongoose = require('mongoose');

const getCurrentDateAndTime = () => {
  const today = new Date();

  const date =
    today.getFullYear() +
    '-' +
    ('0' + (today.getMonth() + 1)).slice(-2) +
    '-' +
    ('0' + today.getDate()).slice(-2);

  const time =
    ('0' + today.getHours()).slice(-2) +
    ':' +
    ('0' + today.getMinutes()).slice(-2) +
    ':' +
    ('0' + today.getSeconds()).slice(-2);

  const dateTime = `${date} ${time}`;

  return dateTime;
};

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: String,
      default: getCurrentDateAndTime(),
    },
    coins: {
      type: Array,
      required: true,
    },
  },
  { collection: 'users', minimize: false }
);

module.exports = mongoose.model('Users', UserSchema);
