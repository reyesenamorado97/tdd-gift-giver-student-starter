const giftExchangeRouter = require("./routes/gift-exchange")
const express = require("express")
var morgan = require('morgan')
var bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.json())
app.use("/gift-exchange", giftExchangeRouter)


app.use(morgan('tiny'))



app.get('/', async (req, res) => {


    res.status(200).json({ping : "pong"})
  })


/*
  app.post('/', (req, res) => {

    console.log(req.body)
    res.send('This is the home page POST!')
  })
*/

// I MADE DAT
/*
app.get('/blogpost', (req, res) => {


  res.send('This is the ID page!')
})
*/
module.exports = app