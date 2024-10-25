const userService = require('../services/users.service.js');
const commonHelpers = require('../helpers/common.helper');

// get current user
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

module.exports = { get };
