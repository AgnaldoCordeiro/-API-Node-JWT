const mongoose = require('mongoose');
require('dotenv/config');

const urlBase = process.env.MONGODB_URL
mongoose.connect(urlBase);
mongoose.Promise = global.Promise
module.exports = mongoose;

