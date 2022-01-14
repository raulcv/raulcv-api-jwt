const mongoose = require("mongoose");
const colors = require('colors');
const serverConfig = require("./serverconfig")
// console.log(serverConfig)
const MongoDBConectionString = serverConfig.db.host + serverConfig.db.port + serverConfig.db.name;
console.log(MongoDBConectionString)

const conexion =  () => {
     mongoose.connect(MongoDBConectionString, { useNewUrlParser: true })
        .then(() => {
            console.log("Successfully connect to MongoDB!!!".green);
            // initial();
        })
        .catch(err => {
            console.error("Connection error".red, err);
            process.exit();
        });
};
conexion();