const User = require('../models/user');
const commonHelpers = require('../helpers/common.helper');

async function create(payload) {
	const { username, password } = payload;

	const usernameExists = await User.find({ username });

	if (usernameExists) {
		commonHelpers.throwCustomError('Username already exists', 409);
	}

	// const hashedPassword =
}

module.exports = { create };
