require('dotenv').config();
const express = require('express')
const app = express()
require('./config/db');
const { loginCheck } = require('./middleware/auth');



const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');
const userRoute = require('./routes/user');


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// routes
app.use('/', authRoute)
app.use('/', loginCheck, postRoute)
app.use('/', loginCheck, userRoute)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`up on ${process.env.PORT}`)
})