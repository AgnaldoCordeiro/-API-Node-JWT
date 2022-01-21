const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;
mongoose.connect(url);
mongoose.Promise = global.Promise
module.exports = mongoose;

