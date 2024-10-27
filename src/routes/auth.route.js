const express = require('express');
const router = express.Router();

const authControllers = require('../controllers/auth.controller');
const commonHelpers = require('../helpers/common.helper');
const authMiddlewares = require('../middlewares/auth.middleware');
const authValidators = require('../validators/auth.validator');

router.post('/login', authControllers.login, commonHelpers.responseHandler);

router.get(
	'/logout',
	authMiddlewares.authCheck,
	authControllers.logout,
	commonHelpers.responseHandler,
);

router.post(
	'/register',
	authValidators.registerSchema,
	authControllers.register,
	commonHelpers.responseHandler,
);

module.exports = router;
