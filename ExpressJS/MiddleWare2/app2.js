const express = require('express')
const app = express()

app.get('/', middleware, (req, res) => {
  console.log('Inside Home Page')
  console.log('Inside Home Page 2nd')
  res.send('Home Page')
})

function middleware(req, res, next) {
  console.log('Before Next')
  next()
  console.log('After Next')
  next()
  console.log('After Next 2nd')
}

app.listen(4000, () => console.log('Server Started'))