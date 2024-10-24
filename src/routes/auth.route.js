const express = require('express');

const router = express.Router();

router.post('/login', (req, res) => {
	res.send('user logged in');
});

router.post('/logout', (req, res) => {
	res.send('user logged out');
});

module.exports = router;
