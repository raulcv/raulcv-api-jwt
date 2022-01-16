const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.role = require("./role");
db.user = require("./user");

db.roles = ["user", "admin", "moderator"];

module.exports = db;