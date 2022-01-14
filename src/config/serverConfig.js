const env = process.env.NODE_ENV; // 'dev' or 'test'
// console.log(env)
const dev = {
    app: {
        host: process.env.APP_HOST || 'localhost',
        port: process.env.APP_PORT || 8081
    },
    db: {
    }
};

const test = {
    app: {
        port: 3000
    },
    db: {
    }
};

const serverConfig = {
    dev,
    test
};
module.exports = serverConfig[env];