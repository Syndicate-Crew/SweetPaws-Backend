const express = require('express')
const router = express.Router()
const controller = require('../Controllers/channelpay.controller')

module.exports = function () {
  router.post('/create', controller.createPay)
  router.get('/', controller.getAllPays)
  router.get('/month/:one&:two', controller.getmonthPays)
  return router
}
