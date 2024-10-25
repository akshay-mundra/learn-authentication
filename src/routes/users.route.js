const express = require('express');
const router = express.Router();
const commonHelpers = require('../helpers/common.helper');
const userControllers = require('../controllers/users.controller');

router.get('/:id', userControllers.get, commonHelpers.responseHandler);

module.exports = router;
