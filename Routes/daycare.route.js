const express = require('express');

const router = express.Router();

const controller = require('../controllers/daycare.controller');

module.exports = function () {
    router.post('/create', controller.createDaycare);
    router.get('/', controller.getAllDaycares);
    router.get('/:id', controller.getDaycareById);
    return router;
}