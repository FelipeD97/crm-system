const pgp = require('pg-promise') ({
    query: function(e) {
        console.log('query query')
    }
});

const options = {
    host: "localhost",
    database: "crm"
};

const db = pgp(options);

module.exports = db;