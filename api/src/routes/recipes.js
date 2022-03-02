const server = require('express').Router()
const { Recipe } = require('../db.js')
const axios = require('axios')
const { API } = process.env

server.get('/', (req, res, next) => {

  console.log(req.params)

    res.sendStatus(200)
})

module.exports = server
