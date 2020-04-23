const mongoose = require('mongoose');

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
      type: Date,
      default: Date.now,
    },
    coins: {
      type: Object,
      required: true,
    },
  },
  { collection: 'users', minimize: false }
);

module.exports = mongoose.model('Users', UserSchema);
