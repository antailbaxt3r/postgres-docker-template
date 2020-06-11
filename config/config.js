require('dotenv').config()

var db = {
    DATABASE_HOST: 'localhost',
    DATABASE_NAME: 'postgres',
    DATABASE_USERNAME: 'postgres',
    DATABASE_PASSWORD: 'eatsleepcode',
    DATABASE_PORT: 5432,
    DATABASE_DIALECT: 'postgres',
    NODE_ENV: process.env.NODE_ENV || 'development',
    SCHEMA: "public",
}

var config = {
    db: {
        env: db
    }
}

module.exports = config
