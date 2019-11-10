const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.post('/submit-form', (req, res) => {
  const item = req.body.item
  //...
  res.end()
})