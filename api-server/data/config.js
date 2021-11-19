'use strict';
module.exports = {
    "server": {
        "port": 3000
    },
    "token": {
        "expiry": "3d",
        "iss": "API Server"
    },
    "database": {
        "host": process.env.DB_HOST,
        "user": process.env.DB_USER,
        "password": process.env.DB_PWD,
        "database": process.env.DB,
        "connectionLimit": 5
    },
    "log_level": "info",
    "error_log": __dirname + '/error.log',
    "normal_log": __dirname + "/out.log"
}