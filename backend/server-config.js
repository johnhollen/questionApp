module.exports = function() {
    if (process.env.NODE_ENV === 'production') {
        return {
            dbUrl: 'mongodb://questionappuser:questionapptest@ds033607.mlab.com:33607',
            dbName: 'questionapp'
        };
    }
    return {
        dbUrl: 'mongodb://localhost',
        dbName: 'questionapp'
    }
}
