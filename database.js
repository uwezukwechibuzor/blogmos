const mongoose = require('mongoose');

//connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/blog_mosDB', 
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