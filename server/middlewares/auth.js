const jwt = require('jsonwebtoken');

exports.authCheck = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.replace("Bearer ", "")
    decode = jwt.verify(token, process.env.JWT_SECRET)
    req.userDetails = decode
    next();
  } catch (err) {
    res.json({
      error: "Authentication failed"
    })
  }
}
