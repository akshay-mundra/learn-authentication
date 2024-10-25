const commonHelpers = require('../helpers/common.helper');
const jwtHelpers = require('../helpers/jwt.helper');

function authCheck(req, res, next) {
	try {
		const token = req.headers['authorization']?.split(' ')[1];
		if (!token) {
			commonHelpers.throwCustomError('Access denied', 401);
		}

		const data = jwtHelpers.verifyToken(token);
		req.id = data._id;
		next();
	} catch (err) {
		console.log('auth middleware', err);
		commonHelpers.errorHandler(req, res, err.message, err.statusCode);
	}
}

module.exports = { authCheck };
