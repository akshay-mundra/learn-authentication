require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/health-check', (req, res) => {
	res.send('hello ');
});

app.listen(PORT, () => {
	console.log(`Server is running on port : ${PORT}`);
});

module.exports = app;
