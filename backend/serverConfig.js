const serverConfig = {
    production: {
        dbUrl: `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds033607.mlab.com:33607`,
        dbName: 'questionapp'
    },
    development: {
        dbUrl: 'mongodb://localhost',
        dbName: 'questionapp'
    }
};

const environment = process.env.NODE_ENV || 'development';
module.exports = serverConfig[environment];
