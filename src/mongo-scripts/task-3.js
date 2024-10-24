async function findAccountCountForRoles(accounts) {
	const data = await accounts
		.aggregate([
			{
				$project: {
					roles_array: { $objectToArray: '$roles' },
				},
			},
			{
				$unwind: '$roles_array',
			},
			{
				$group: {
					_id: '$roles_array.k',
					count: { $count: {} },
				},
			},
		])
		.toArray();

	console.log('Data', data);
}

module.exports = { findAccountCountForRoles };
