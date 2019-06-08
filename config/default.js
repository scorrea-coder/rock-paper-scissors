const result = require('dotenv').config({ path: './config/.env' });

if (result.error) {
	throw result.error;
}

module.exports = result;
