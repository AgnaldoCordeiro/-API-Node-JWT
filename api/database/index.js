const mongoose = require('mongoose');

const urlBase = process.env.MONGODB_URI;
mongoose.connect(urlBase);
mongoose.Promise = global.Promise
module.exports = mongoose;

