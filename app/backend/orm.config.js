const { Migration } = require('typeorm');

require('dotenv').config();

module.exports = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities: [
        './backend/src/models/*.model.js',
    ],
    migrations: [
        './backend/src/database/migrations/*.js',
    ],
    cli: {
        entitiesDir: './backend/src/models',
        migrationsDir: './backend/src/database/migrations',
    },

    // Subscribers: Path to you subscriber fields (optimal , for event listeners)

    subscribers: [
        './backend/src/database/subscribers/*.js'
    ]
};