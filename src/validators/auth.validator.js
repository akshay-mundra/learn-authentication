const Joi = require('joi');
const validateHelpers = require('../helpers/validation.helper');
const commonHelpers = require('../helpers/common.helper');

async function registerSchema(req, res, next) {
	const schema = Joi.object({
		username: Joi.string().min(3).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(8).required(),
	});

	try {
		validateHelpers.validateRequest(req, res, next, schema, 'body');
	} catch (err) {
		console.log('login schema', err);
		commonHelpers.errorHandler(req, res, err.message, err.statusCode);
	}
}

module.exports = { registerSchema };
