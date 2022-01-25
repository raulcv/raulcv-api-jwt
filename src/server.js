const express = require('express');
const app = express();
const morgan = require('morgan');
const colors = require('colors');
const path = require('path');
const initMongoDB = require('./config/database.js');
const Routes = require('./routes');
const serverConfig = require('./config/serverconfig.js');

// console.log(serverConfig)
const appport = serverConfig.app.port;
const hostname = serverConfig.app.host;

//settings
app.set("port", appport);
app.set("json spaces", 2);

//Middleware
app.use(morgan('dev')); //tiny
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

// app.use(require("./routes/index"));
app.use(Routes)
// app.use("/api/user", require("./routes/user"));

//starting server
app.listen(app.get("port"), () => {
  console.log(`server listeting on port http://${hostname}:${app.get("port")}/`.yellow);
});

//Initialization MongoDB
initMongoDB();