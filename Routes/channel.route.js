const express = require('express')
const router = express.Router()
const controller = require('../Controllers/channel.controller')

module.exports = function () {
  router.post('/create', controller.createSlot)
  router.get('/', controller.getAllSlots)
  router.get('/:id', controller.specificSlot)
  router.delete('/delete/:id', controller.deleteSpecificSlot)
  router.put('/update/:id', controller.updateSlot)
  return router
}
