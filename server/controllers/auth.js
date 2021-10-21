const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');


class Auth {
  async signup(req, res) {
    let { firstname, lastname, username, email, password, creator = false } = req.body;
    if (!firstname || !lastname || !email || !password || !username) {
      return res.status(400).json({
        error: "All fields are compulsory",
      })
    }
    try {
      const data = await UserModel.findOne({ email: email })
      if (data) {
        return res.status(400).json({
          success: false,
          error: "email address already exists, please log in"
        })
      } else {
        password = await bcrypt.hashSync(password, 10);
        const newUser = new UserModel({
          firstname,
          lastname,
          username,
          email,
          password,
          creator,
        });
        try {
          const response = await newUser.save();
          console.log('response', response);
          if (response) {
            return res.json({
              success: true,
              message: "User registration successful"
            });
          }
        } catch (error) {
          if (error) {
            return res.status(500).json({
              success: false,
              message: 'Error occured. registration failed',
            });
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  async signin(req, res) {
    let { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: "All fields are compulsory",
      })
    }
    try {
      const data = await UserModel.findOne({ email: email })
        .select("name email followers following password")
      if (!data) {
        return res.status(400).json({
          success: false,
          error: "Your email or password was wrong"
        })
      } else {
        const login = await bcrypt.compare(password, data.password)
        if (login) {
          const token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET);
          const decode = jwt.verify(token, process.env.JWT_SECRET);
          return res.json({
            success: true,
            token: token,
            user: decode
          });
        } else {
          return res.status(500).json({
            success: false,
            error: "Something went wrong, please retry"
          })
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

}

const authController = new Auth
module.exports = authController;