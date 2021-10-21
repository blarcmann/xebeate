const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');


class Auth {
  async signup(req, res) {
    let { firstname, lastname, email, password } = req.body;
    if (!firstname || !lastname || !email || !password) {
      return res.status(400).json({
        error: "All fields are compulsory",
      })
    }
    try {
      const data = await UserModel.findOne({ email: email })
      if (data) {
        return res.json({
          error: "User with this email address already exists"
        })
      } else {
        password = await bcrypt.hashSync(password, 10);
        const newUser = new UserModel({
          firstname,
          lastname,
          email,
          password,
        });
        try {
          const response = await newUser.save();
          if (response) {
            return res.json({
              message: "User registration successful"
            });
          }
        } catch (error) {
          console.log('error', error);
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
        error: "All fields are compulsory",
      })
    }
    try {
      const data = await UserModel.findOne({ email: email })
        .select("name email followers following password")
      if (!data) {
        return res.status(400).json({
          error: "Your email or password was wrong"
        })
      } else {
        const login = await bcrypt.compare(password, data.password)
        if (login) {
          const token = jwt.sign({ _id: data._id }, process.env.JWT_SECRET);
          const decode = jwt.verify(token, process.env.JWT_SECRET);
          return res.json({
            message: "sign in succesfully",
            token: token,
            user: decode
          })
        } else {
          return res.status(500).json({
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