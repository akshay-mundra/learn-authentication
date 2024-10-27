const commonHelpers = require('./common.helper.js');

function validateRequest(req, res, next, schema, reqParameter) {
	let requestData = {};

	if (reqParameter === 'body') {
		requestData = req.body;
	} else if (reqParameter === 'query') {
		requestData = req.query;
	} else {
		requestData = req.params;
	}

	const { value, error } = schema.validate(requestData);

	if (!error) {
		if (requestData === 'body') {
			req.body = value;
		} else if (requestData === 'query') {
			req.query = value;
		} else {
			req.params = value;
		}
		return next();
	}

	return commonHelpers.throwCustomError(error.message.replace(/"/g, ''), 422);
}

module.exports = { validateRequest };
