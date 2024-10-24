const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
	res.send('user created');
});

router.get('/:id', (req, res) => {
	res.send('current user data');
});

module.exports = router;
