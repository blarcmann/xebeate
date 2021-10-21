const Formidable = require('formidable');
const cloudinary = require("cloudinary");
const PostModel = require('../models/Post');
const UserModel = require('../models/User');
const fs = require('fs');


// configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

class Post {
  createNewPost(req, res) {
    const formData = new Formidable({ multiples: true });
    formData.parse(req, (error, fields, files) => {
      if (error) {
        res.status(500).json({
          success: false
        })
      }
      const { title, description } = fields;
      if (!title || !description || !files.images) {
        return res.status(400).json({
          success: false,
          message: "All fields are compulsory.",
        });
      }
      cloudinary.uploader.upload(files.images[0].path, (result, error) => {
        if (error) {
          return res.status(500).json({
            success: false,
          });
        }
        const newPost = new PostModel({
          title,
          description,
          images: [],
          avi: result.secure_url,
        });
        newPost.save((error, response) => {
          if (error) {
            return res.status(500).json({
              message: 'failed to save new post',
              success: false
            });
          }
          return res.json({
            post: response,
            message: "Your post is being published."
          });
        });
      });
    });
  }
  // add an image to a post gallery
  async addImageToPost(req, res) {
    const formData = new Formidable();
    formData.parse(req, (error, fields, file) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: 'Error occured. Your post is not updated',
        });
      }
      cloudinary.uploader.upload(file.image.path, (result, error) => {
        if (error) {
          return res.status(500).json({
            success: false,
            message: 'Error occured. Your post is not updated',
          });
        }
        PostModel.findOneAndUpdate({ _id: fields.postId }, {
          $push: { gallery: result.secure_url }
        }, { new: true }).exec((err, result) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: 'Error occured. Your post is not updated',
            });
          }
          return res.status(200).json({
            success: true,
            post: result,
          })
        })
      })
    })
  }

  // All post global
  allPost(req, res) {
    let posts = PostModel.find({}).populate("postedBy", "_id name profile_pic").populate("comments.postedBy", "_id name").sort({ _id: -1 })
    posts.exec((err, posts) => {
      if (err) { console.log(err) };
      res.json({
        posts
      })
    })

  }

  //  Post by following
  async allPostByFollowing(req, res) {
    let loggedInUserId = req.params.id
    try {
      let logData = await UserModel.findOne({ _id: loggedInUserId }).select("followers following")
      let posts = PostModel.find({ postedBy: { $in: logData.following } }).populate("postedBy", "_id name profile_pic").populate("comments.postedBy", "_id name profile_pic").sort({ _id: -1 })
      posts.exec((err, posts) => {
        if (err) { console.log(err) };
        res.json({
          posts
        })
      })
    } catch (err) {
      console.log(err)
    }

  }

  // Paticuler post a user
  allPostByUser(req, res) {
    const userId = req.params.id
    let posts = PostModel.find({ postedBy: userId }).populate("postedBy", "_id name profile_pic").sort({ _id: -1 });
    posts.exec((err, posts) => {
      if (err) { console.log(err) };
      return res.json({ posts })
    })
  }

  like(req, res) {
    PostModel.findByIdAndUpdate(req.body.postId, {
      $push: { likes: req.userDetails._id }
    }, {
      new: true
    }).exec((err, result) => {
      if (err) { console.log(err) }
      return res.json(result)
    })
  }

  unlike(req, res) {
    PostModel.findByIdAndUpdate(req.body.postId, {
      $pull: { likes: req.userDetails._id }
    }, {
      new: true
    }).exec((err, result) => {
      if (err) { console.log(err) }
      return res.json(result)
    })
  }

  comment(req, res) {
    PostModel.findByIdAndUpdate(req.body.postId, {
      $push: {
        comments: {
          text: req.body.text,
          postedBy: req.userDetails._id
        }
      }
    }).populate("comments.postedBy", "_id name").exec((err, result) => {
      if (err) { console.log(err) }
      res.json({ result })
    })
  }

  deletePost(req, res) {
    const filePath = `../server/public/uploads/${req.body.filename}`;
    let del = PostModel.findByIdAndDelete(req.body.postId)
    if (req.body.loggedInUser === req.userDetails._id) {
      del.exec((err, result) => {
        if (err) { console.log(err) }
        fs.unlink(filePath, (err) => {
          if (err) { console.log(err) }
          return res.json({ result: "Post delete successfully" })
        })
      })
    }
  }
}

const postController = new Post
module.exports = postController;