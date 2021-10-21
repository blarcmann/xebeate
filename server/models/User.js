const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: false,
  },
  creator: {
    type: Boolean,
    default: false,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  followers: [{ type: ObjectId, ref: "users" }],
  following: [{ type: ObjectId, ref: "users" }],
}, { timestamps: true });

const UserModel = mongoose.model('users', userSchema)
module.exports = UserModel;