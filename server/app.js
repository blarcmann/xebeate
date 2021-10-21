require('dotenv').config();
const express = require('express')
const app = express()
require('./config/db');
const { authCheck } = require('./middlewares/auth');



const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');
const userRoute = require('./routes/user');


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


// routes
app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use('/auth', authRoute)
app.use('/post', postRoute)
app.use('/user', authCheck, userRoute)

app.listen(process.env.PORT, () => {
  console.log(`up on ${process.env.PORT}`)
})