const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
require('dotenv').config();
const DB = process.env.MONGO_URL;

mongoose.connect(DB, {
	useNewUrlParser: true,
  	useUnifiedTopology: true,
	writeConcern: { w: 'majority' },
 	
 }).then(() => {
	console.log('connection successfully to db');
}).catch((err) => console.log('no connection',err));

module.exports = mongoose;