const express = require("express")
const router = express.Router()

router.post('/pairs', async (req, res) => {


    res.status(200).json({ping : "pong"})
  })

  router.post('/traditional', async (req, res) => {


    res.status(200).json({ping : "pong"})
  })

  module.exports = router