const express = require('express');
const app = express();

const connectToDb = require('./config/db');

connectToDb();

app.use(express.json({ extended: false }));
app.use('/api', require('./routes/players'));

module.exports = app;
