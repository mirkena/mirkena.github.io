//import express from 'express'
const express=require('express')
//import data from './MockData/data.json'
const data=require('./MockData/data.json')
const app = express()
const PORT = 3000

app.use('/something', express.static('public'))

app.use('/images', express.static('images'))

app.get('/', (req, res) => {
  res.json(data)
  res.send(`Get request from '/' from port ${PORT}`)
})

app.get('/videos', (req, res) => {
  //res.json(data)
  res.send(`This returnds videos`)
})

app.get('/item', (req, res, next) => {
  // data is response form server
  res.json(data)
  //res.send(`GET request from '/item' from port ${PORT}`)
})

let func = function(req, res, next) {
  console.log('Call this?? This is middle ware Function Updated1')
}

app.get('/item/:id', function(req, res, next) {
  const user = Number(req.params.id)
  console.log('user ', user)
  res.send(data[user])
  next()
}, func)

// Id of user inside a category sub object
app.get('/item/:category/:id', (req, res, next) => {
  const user = Number(req.params.id)
  //res.send(data[user])
})

// This will download the image/file provided in res.download()
app.get('/getImage', (req, res, next) => {
  res.download('./images/rocket.jpg')
})

// Requests going to the same route can be chained like follows
app.route('/item')
  .post((req, res, next) => {
    res.send(`POST request from '/item' from port ${PORT}`)
  })
  .put((req, res, next) => {
    res.send(`PUT request from '/item' from port ${PORT}`)
  })
  .patch((req, res, next) => {
    res.send(`PATCH request from '/item' from port ${PORT}`)
  })
  .delete((req, res, next) => {
    res.send(`DELETE request from '/item' from port ${PORT}`)
  })

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  //console.log(`Data: ${data}`)
})

