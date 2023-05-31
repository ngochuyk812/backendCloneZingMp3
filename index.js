const express = require('express')
const app = express()
const router = express.Router()
const apiRoute = require('./routes/api')
const authRoute = require('./routes/auth')
const connect = require('./connect/connect')
const multer  = require('multer');

require('dotenv').config();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', apiRoute);
app.use('/auth', authRoute);
app.get('/', (req,res)=>{
  res.send("Hello")
});

const port = process.env.POST || 3008

app.listen(port, "0.0.0.0", function () {
  console.log(`Example app listening on port ${port}`)
});