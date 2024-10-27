const User = require('../models/user');
const commonHelpers = require('../helpers/common.helper');
const bcrypt = require('bcrypt');

// create user and save to db
async function create(payload) {
	const { username, email, password } = payload;

	console.log(payload);

	const userExists = await User.findOne({ email });
	if (userExists) {
		commonHelpers.throwCustomError('Email or Username already exists', 409);
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	const userDetails = {
		username,
		email,
		password: hashedPassword,
	};
	const newUser = new User(userDetails);
	await newUser.save();

	return {
		newUser,
	};
}

// get the current user by its id
async function get(id) {
	const userDetails = await User.findById(id);
	if (!userDetails) {
		commonHelpers.throwCustomError('User not found', 404);
	}

	return userDetails;
}

module.exports = { create, get };
