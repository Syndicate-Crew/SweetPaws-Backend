const express = require('express')
const router = express.Router()
const controller = require('../Controllers/appointment.controller')

module.exports = function () {
  router.post('/create', controller.createApp)
  router.get('/', controller.getAllApps)
  return router
}
