// adds a roles collection in mongodb containing a name and description of role
async function addRolesCollection(db) {
	await db.createCollection('roles', {
		validator: {
			$jsonSchema: {
				bsonType: 'object',
				required: ['name'],
				properties: {
					name: {
						bsonType: 'string',
						description: 'must be a string and is required',
					},
					description: {
						bsonType: 'string',
						description: 'must be a string',
					},
				},
			},
		},
		collation: { locale: 'en', strength: 2 },
	});
}

async function addRoleDataToRoles(roles) {
	await roles.insertMany(rolesData);
}

async function getAllRoles(roles) {
	return await roles.find().toArray();
}

async function getRolesAsKeyValue(roles) {
	const rolesData = await getAllRoles(roles);

	let rolesObject = {};

	rolesData.forEach(role => {
		rolesObject[role.name] = role._id;
	});

	return rolesObject;
}

const rolesData = [
	{
		name: 'admin',
		description: 'Admin has access to all the important resources',
	},
	{
		name: 'superadmin',
		description: 'Superadmin has access to all the resources',
	},
	{
		name: 'physician',
		description: 'Physician has limited access',
	},
];

module.exports = {
	addRolesCollection,
	addRoleDataToRoles,
	getAllRoles,
	getRolesAsKeyValue,
};
