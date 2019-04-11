const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
var path = require('path')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(express.static('public'))


app.get('/', (request, response) => {
   response.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/suggestions', db.getSuggestions)

app.get('/drug', db.getDrug)
app.get('/dlist', db.getDruglist)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})