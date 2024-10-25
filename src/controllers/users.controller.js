const userService = require('../services/users.service.js');
const commonHelpers = require('../helpers/common.helper');

// create user
async function create(req, res, next) {
	try {
		const { body: payload } = req;
		const result = await userService.create(payload);
		res.data = result;
		res.statusCode = 201;
		next();
	} catch (err) {
		console.log(err);
		commonHelpers.errorHandler(req, res, err.message, err.statusCode);
	}
}

async function get(req, res, next) {
	try {
		const { id } = req.params;
		const result = await userService.get(id);
		res.data = result;
		res.statusCode = 200;
		next();
	} catch (err) {
		console.log('get user error', err);
		commonHelpers.errorHandler(req, res, err.message, err.statusCode);
	}
}

module.exports = { create, get };
