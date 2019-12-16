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
      updatedAt: false
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
  development: {
    uri: 'postgres://omlaaryscxxbfr:882a70ec7ccbd02a8407c5542ae0be792398e913cff11cac19f133b3b7c5a563@ec2-54-83-201-84.compute-1.amazonaws.com:5432/d8ll4o1ibiui0b',
    host: 'ec2-54-83-201-84.compute-1.amazonaws.com',
    port: 5432,
    database: 'd8ll4o1ibiui0b',
    username: 'omlaaryscxxbfr',
    password: '882a70ec7ccbd02a8407c5542ae0be792398e913cff11cac19f133b3b7c5a563',
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: true
    },
    define: {
      timestamps: false,
      freezeTableName: true,
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  },
}