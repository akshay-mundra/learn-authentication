const express = require('express');
const dotenv = require('dotenv').config();
const { connectDb } = require('./config/database.js');
const { redisClient } = require('./config/redis.js');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDb(); // database connection

app.use(express.json());

routes.registerRoutes(app);

app.use('/health-check', (req, res) => {
	res.send('health check successfull ');
});

app.listen(PORT, () => {
	console.log(`Server is running on port : ${PORT}`);
});

module.exports = app;
