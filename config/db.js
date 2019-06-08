const mongoose = require("mongoose");
const config = require("./default");

const connectToDb = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
		console.log("Connected to MongoDB Server");
	} catch (error) {
		console.error(error.message, process.env.MONGODB_URI);

		mongoose.disconnect();

		process.exit(1);
	}
};

module.exports = connectToDb;
