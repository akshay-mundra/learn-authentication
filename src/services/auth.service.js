const User = require('../models/user');
const commonHelpers = require('../helpers/common.helper');
const bcrypt = require('bcrypt');
const jwtHelpers = require('../helpers/jwt.helper');
const userServices = require('./users.service');

async function login(payload) {
	const { username, password } = payload;

	const userDetails = await User.findOne({ username });
	if (!userDetails) {
		commonHelpers.throwCustomError('Username do not exist', 401);
	}

	const isPasswordCorrect = await bcrypt.compare(
		password,
		userDetails.password,
	);
	if (!isPasswordCorrect) {
		commonHelpers.throwCustomError('Invalid password', 401);
	}

	const token = jwtHelpers.signToken(
		{ _id: userDetails._id },
		{ expiresIn: '2hr' },
	);

	return {
		user: userDetails,
		token,
	};
}

async function register(payload) {
	return await userServices.create(payload);
}

async function logout() {
	return 1;
}

module.exports = { login, register, logout };
