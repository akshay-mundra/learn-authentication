async function findAccountCountForRoles(collection) {
	const data = await collection
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
