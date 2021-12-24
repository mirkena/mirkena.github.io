const express = require('express')
const app = express()
const PORT = 8081

const sequences = [
  '3, 1, 4, 1, 5',
  '1, 1, 2, 3, 5',
  '1, 4, 9, 16, 25',
  '2, 3, 5, 7, 11',
  '1, 2, 4, 8, 16'
]
const answers = [9, 8, 36, 13, 32]
let index = 0, score

app.use(express.urlencoded({extended: false}))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  score = 0
  res.render('guesNumber', {title: 'The Number Quiz', message: 0, sequence: sequences[index]})
})

app.post('/guess', (req, res) => {
  if (Number.parseInt(req.body.nextNumber) === answers[index]) {
    score += 1
  }
  if (index < sequences.length - 1) {
    index++
    res.render('guesNumber', {title: 'The Number Quiz', message: score, sequence: sequences[index]})
  } else {
    index = 0
    res.render('scorePage',
      {title: 'The Number Quiz', message: score, sequencesLength: sequences.length})
  }
})

app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}...`)
})
