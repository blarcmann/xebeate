const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gallery: {
    type: Array,
    required: true,
  },
  by: {
    type: ObjectId,
    ref: "users"
  },
  avi: {
    type: String,
    required: true,
  },
  likes: [{ type: ObjectId, ref: "users" }],
  comments: [{
    text: String,
    by: { type: ObjectId, ref: "users" }
  }],
}, { timestamps: true })

const postModel = mongoose.model('posts', PostSchema)
module.exports = postModel;