const express = require('express');
const dotenv = require('dotenv').config();
const { connectDb } = require('./config/database.js');

const app = express();
const PORT = process.env.PORT || 3000;

connectDb(); // database connection

app.use(express.json());

app.use('/health-check', (req, res) => {
	res.send('health check successfull ');
});

app.listen(PORT, () => {
	console.log(`Server is running on port : ${PORT}`);
});

module.exports = app;
