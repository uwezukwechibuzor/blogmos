require('dotenv').config();
const mongoose = require('mongoose');
console.log(process.env.MONGO_URI);
//connect to mongodb
mongoose.connect(process.env.MONGO_URI, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//show a message if connected 
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error:'));
database.once('open', () => {
  console.log('Connected to MongoDB database...');
});

module.exports = database;