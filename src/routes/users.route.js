const express = require('express');
const router = express.Router();
const commonHelpers = require('../helpers/common.helper');
const userControllers = require('../controllers/users.controller');

router.post('/', userControllers.create, commonHelpers.responseHandler);

router.get('/:id', userControllers.get, commonHelpers.responseHandler);

module.exports = router;
