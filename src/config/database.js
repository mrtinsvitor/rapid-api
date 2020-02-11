require('dotenv').config();

export default {
  local: {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: '',
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: false
    },
    define: {
      timestamps: true,
      freezeTableName: true,
      createdAt: 'dh_insertion',
      updatedAt: 'dh_update',
      defaultScope: {
        attributes: { exclude: ['dh_insertion', 'dh_update'] },
      },
      scopes: {}
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
  development: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: true
    },
    define: {
      timestamps: true,
      freezeTableName: true,
      createdAt: 'dh_insertion',
      updatedAt: false,
      defaultScope: {
        attributes: { exclude: ['insertionUserId', 'dh_insertion'] },
      },
      scopes: {}
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
}