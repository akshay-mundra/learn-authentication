const { getRolesAsKeyValue } = require('./roles.js');

async function upateRolesToNewRoles(accounts, roles) {
	//get all roles and accounts data
	let [accountsData, rolesData] = await Promise.all([
		accounts.find({}, { _id: 1, roles: 1 }).toArray(),
		getRolesAsKeyValue(roles),
	]);

	// for each account update the format of roles
	accountsData = accountsData.map(acc => {
		return {
			_id: acc._id,
			roles: Object.keys(acc.roles).map(key => rolesData[key]),
		};
	});

	console.log(accountsData[2]);

	// now set new roles as the formated roles as new field in the document of account collection
	await Promise.all(
		accountsData.map(async acc => {
			return await accounts.updateOne(
				{ _id: acc._id },
				{ $set: { new_role: acc.roles } },
			);
		}),
	);
}

module.exports = { upateRolesToNewRoles };
