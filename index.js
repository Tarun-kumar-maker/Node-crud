const bodyParser = require("body-parser");
const router = require('./routes/movie.route')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000;
app.use(bodyParser.json());
app.use(router)

const connectionParams={
   useNewUrlParser: true,
   useUnifiedTopology: true 
}

mongoose.connect('mongodb+srv://dbtest:dbtest@cluster0.duw6pjj.mongodb.net/', connectionParams)
  .then(() => {
    app.listen(port,(err) => {
        if(err) console.log("error occur while listening", port)
        console.log("server running successfully")
    })
  })
  .catch((error) => {
    console.log('error in mongoConnection',error)
  })
