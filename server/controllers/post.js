const Formidable = require('formidable');
const cloudinary = require("cloudinary");
const PostModel = require('../models/Post');
const UserModel = require('../models/User');


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
      const { title, description, by } = fields;
      if (!title || !description || !files.images || !by) {
        return res.status(400).json({
          success: false,
          message: "All fields are compulsory.",
        });
      }
      cloudinary.uploader.upload(files.images.path, (result, error) => {
        if (error) {
          return res.status(500).json({
            success: false,
          });
        }
        const newPost = new PostModel({
          title,
          description,
          images: [],
          by: by,
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
    let posts = PostModel.find({})
      .populate("by", "_id username")
      .populate("comments.by", "_id username")
      .sort({ _id: -1 })
    posts.exec((error, posts) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: 'Error occured. Cannot retrieve posts now',
        });
      }
      res.json({
        success: true,
        posts
      })
    })

  }

  async circlePosts(req, res) {
    try {
      let users = await UserModel.findOne({ _id: req.params.id })
        .select("followers following")
      const posts = PostModel.find({ by: { $in: users.following } })
        .populate("by", "_id username")
        .populate("comments.by", "_id name profile_pic")
        .sort({ _id: -1 })
      posts.exec((error, posts) => {
        console.log('postsssss', posts);
        if (error) {
          return res.status(500).json({
            success: false,
            message: 'Error occured. Cannot retrieve posts now',
          });
        }
        return res.json({
          success: true,
          posts
        })
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: 'Error occured. Cannot retrieve posts now',
      });
    }

  }

  allPostByUser(req, res) {
    let posts = PostModel.find({ postedBy: req.params.id })
      .populate("by", "_id username")
      .sort({ _id: -1 });
    posts.exec((error, posts) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: 'Error occured. Cannot retrieve posts now',
        });
      }
      return res.status(200).json({
        success: true,
        posts,
      })
    })
  }

  like(req, res) {
    PostModel.findByIdAndUpdate(req.body.postId, {
      $push: { likes: req.body.userId }
    }, {
      new: true
    }).exec((error, result) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: 'Error occured. Operation not successful',
        });
      }
      return res.status(200).json({
        success: true,
      })
    })
  }

  unlike(req, res) {
    PostModel.findByIdAndUpdate(req.body.postId, {
      $pull: { likes: req.body.userId }
    }, {
      new: true
    }).exec((error, result) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: 'Error occured. Operation not successful',
        });
      }
      return res.status(200).json({
        success: true,
      })
    })
  }

  comment(req, res) {
    PostModel.findByIdAndUpdate(req.body.postId, {
      $push: {
        comments: {
          by: req.body.userId,
          body: req.body.body,
        }
      }
    }).populate("comments.by", "_id username").exec((error, result) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: 'Error occured. Operation not successful',
        });
      }
      res.status(200).json({
        success: true
      })
    })
  }

  deletePost(req, res) {
    let del = PostModel.findByIdAndDelete(req.body.postId)
    if (req.body.userId === req.userDetails._id) {
      del.exec((error, result) => {
        if (error) {
          return res.status(500).json({
            success: false,
            message: 'Error occured. Operation not successful',
          });
        }
        return res.status(200).json({
          success: true,
          message: "Post deleted successfully"
        })
      })
    }
  }
}

const postController = new Post
module.exports = postController;