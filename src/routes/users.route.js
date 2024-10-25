const express = require('express');
const router = express.Router();
const commonHelpers = require('../helpers/common.helper');
const userControllers = require('../controllers/users.controller');
const authMiddlewares = require('../middlewares/auth.middleware');

router.get(
	'/:id',
	authMiddlewares.authCheck,
	userControllers.get,
	commonHelpers.responseHandler,
);

module.exports = router;
