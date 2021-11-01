const UserModel = require('../models/User');
const PostModel = require('../models/Post');

class User {

  async userDetails(req, res) {
    try {
      const detail = await UserModel.findOne({ _id: req.params.user_id })
        .select("-password")
        .populate("following", "firstname lastname username")
        .populate("followers", "firstname lastname username")

      const posts = await PostModel.find({ by: req.params.user_id })
        .populate("by", "username email followers following")
        .populate("comments.by", "username profile_pic followers following");

      return res.status(200).json({
        success: true,
        detail,
        posts,
      });
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        success: false,
        message: 'Some error occured'
      })
    }
  }

  async getCircle(req, res) {
    try {
      const detail = await UserModel.findOne({ _id: req.params.user_id })
        .select("followers following")
      return res.json({
        followers: detail.followers,
        following: detail.following
      })
    } catch (err) {
      console.log(err)
    }
  }


  // 61717bfb054103a601af66f4

  async follow(req, res) {
    let { followingId, userId } = req.body;
    if (!followingId || !userId) {
      return res.status(400).json({
        success: false,
        message: 'Invalid data, userId and followindId is compulsory'
      })
    }
    UserModel.findByIdAndUpdate(followingId, {
      $push: { followers: userId }
    }, {
      new: true
    }).exec((error) => {
      if (error) {
        console.log('error', error);
        return res.status(500).json({
          success: false,
          message: 'Please retry. Can\'t follow user atm'
        });
      }
      UserModel.findByIdAndUpdate(userId, {
        $push: { following: followingId }
      }, {
        new: true
      }).exec((error) => {
        if (error) {
          console.log('error', error);
          return res.status(500).json({
            success: false,
            message: 'Please retry. Can\'t follow user atm'
          })
        }
        res.json({
          success: true,
          message: "followed"
        })
      })
    })
  }

  unfollow(req, res) {
    let { followingId, userId } = req.body
    UserModel.findByIdAndUpdate(followingId, {
      $pull: { followers: userId }
    }, {
      new: true
    }).exec((error) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: 'Please retry. Can\'t unfollow user atm'
        })
      }
      UserModel.findByIdAndUpdate(userId, {
        $pull: { following: followingId }
      }, {
        new: true
      }).exec((error) => {
        if (error) {
          console.log(error);
          return res.status(500).json({
            success: false,
            message: 'Please retry. Can\'t unfollow user atm'
          })
        }
        res.json({
          success: true,
          message: "Unfollowed"
        })
      })
    })
  }

  async search(req, res) {
    const query = req.body.query
    const srchPattern = new RegExp("^" + query)
    if (!query.length > 0) {
      return res.status(400).json({
        success: false,
        message: "What are you looking for?",
      })
    }
    try {
      let searchUser = await UserModel.find({ username: { $regex: srchPattern } })
        .select("username firstname lastname followers following")
      res.json({
        success: true,
        result: searchUser
      });
    } catch (err) {
      console.log(err);
      res.json({
        success: false,
        message: "Not found :|"
      })
    }
  }

}

const userController = new User
module.exports = userController;