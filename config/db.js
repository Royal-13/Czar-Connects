const mongoose = require('mongoose');
const config =  require('config');
const db = "mongodb+srv://MetaMan123:T7hS9khfJyR6uGXn@cluster0.fpnzqqu.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
