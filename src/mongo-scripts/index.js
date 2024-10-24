const { MongoClient } = require('mongodb');

let url = process.argv[2];

// script function import
const { findAccountCountForRoles } = require('./task-3.js');
const { upateRolesToNewRoles } = require('./task-1.js');

const client = new MongoClient(url);

async function main() {
	await client.connect();
	console.log('Connected successfully to server');
	const db = client.db('pillpal');
	const collection = db.collection('accounts');

	// await findAccountCountForRoles(collection);

	// await upateRolesToNewRoles(collection);

	return 'done.';
}

main()
	.then(console.log)
	.catch(console.error)
	.finally(() => client.close());
