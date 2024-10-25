const authService = require('../services/auth.service.js');
const commonHelpers = require('../helpers/common.helper');

// register new user
async function register(req, res, next) {
	try {
		const { body: payload } = req;
		const result = await authService.register(payload);
		res.data = result;
		res.statusCode = 201;
		next();
	} catch (err) {
		console.log('register', err);
		commonHelpers.errorHandler(req, res, err.message, err.statusCode);
	}
}

// login user
async function login(req, res, next) {
	try {
		const { body: payload } = req;
		const result = await authService.login(payload);
		res.data = result;
		res.statusCode = 200;
		next();
	} catch (err) {
		console.log('login', err);
		commonHelpers.errorHandler(req, res, err.message, err.statusCode);
	}
}

// logout user
async function logout(req, res, next) {
	try {
		const result = authService.logout();
		res.data = result;
		res.statusCode = 200;
		next();
	} catch (err) {
		console.log('logout', err);
		commonHelpers.errorHandler(req, res, err.message, err.statusCode);
	}
}

module.exports = { login, logout, register };
