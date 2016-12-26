module.exports = function() {
    if (process.env.NODE_ENV === 'production') {
        return {
            dbUrl: '',
            dbName: 'braIde'
        };
    }
    return {
        dbUrl: 'mongodb://localhost',
        dbName: 'braIde'
    }
}
