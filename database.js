const config = require('./config.json');
const db = require('monk')(config.mongodb);
module.exports = db;