const mongoose = require('mongoose')
try {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("*************db connected*************")
} catch (err) {
  console.log("*************db not connected*************")
}