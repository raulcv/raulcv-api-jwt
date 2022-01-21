const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// const db = {};

// db.mongoose = mongoose;

// db.role = require("./role");
// db.user = require("./user");

// db.roles = ["user", "admin", "moderator"];

// module.exports = db;


const fs = require('fs')
const modelsPath = `${__dirname}/`
const { removeExtensionFromFile } = require('../middlewares/utils')

module.exports = () => {
  /*
   * Load models dynamically
   */

  // Loop models path and loads every file as a model except this file
  fs.readdirSync(modelsPath).filter((file) => {
    // Take filename and remove last part (extension)
    const modelFile = removeExtensionFromFile(file)
    // Prevents loading of this file
    return modelFile !== 'index' ? require(`./${modelFile}`) : ''
  })
}