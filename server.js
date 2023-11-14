console.log("hello");
// Using Node.js `require()`
const mongoose = require('mongoose');
const express = require('express')
const app = express()
const port = 3000


const url = "mongodb://localhost:27017"; 
mongoose.connect(url , {})
  .then(result => console.log('Connected!'))
  .catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})