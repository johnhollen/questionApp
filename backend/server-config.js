module.exports = () => {
    if (process.env.NODE_ENV === 'production') {
        return {
            dbUrl: `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ds033607.mlab.com:33607`,
            dbName: 'questionapp'
        };
    }
    return {
        dbUrl: 'mongodb://localhost',
        dbName: 'questionapp'
    }
};
