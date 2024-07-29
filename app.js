const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('./app.js')
})

app.listen(port, () => {
  console.log(`http://localhost:3000/`)
})