const pgp = require('pg-promise') ({
    query: function(e) {
        
    }
});

const options = {
    host: "localhost",
    database: "CRM"
};

const db = pgp(options);

module.exports = db;