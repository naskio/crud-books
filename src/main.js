require('dotenv').config()
const MilleFeuille = require('@frenchpastries/millefeuille')
const { client, connect } = require('./db')

console.log(process.env.COUCOU)
connect()
const helloWorldHandler = (request) => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'application/json',
  },
  body: 'Hello World from MilleFeuille!',
})

MilleFeuille.create(helloWorldHandler)
