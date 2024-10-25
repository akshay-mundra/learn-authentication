const User = require('../models/user');
const commonHelpers = require('../helpers/common.helper');
const bcrypt = require('bcrypt');

async function create(payload) {
	const { username, password } = payload;

	const usernameExists = await User.findOne({ username });
	if (usernameExists) {
		commonHelpers.throwCustomError('Username already exists', 409);
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	const userDetails = {
		username,
		password: hashedPassword,
	};
	const newUser = new User(userDetails);
	await newUser.save();

	return {
		username: newUser.username,
	};
}

module.exports = { create };
