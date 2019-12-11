const pgp = require('pg-promise') ({
    query: function(e) {
        console.log(e);
    }
});

const options = {
    host: "localhost",
    database: "CRM"
};

const db = pgp(options);

module.exports = db;