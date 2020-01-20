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
  development: {
    uri: 'postgres://xncnzcvxhmllnl:768ff59024f4ccf4edecfa48af2fe4500b34e74d174352a4ca68a7673f97f2cd@ec2-174-129-234-111.compute-1.amazonaws.com:5432/d79vlv570h31q1',
    host: 'ec2-174-129-234-111.compute-1.amazonaws.com',
    port: 5432,
    database: 'd79vlv570h31q1',
    username: 'xncnzcvxhmllnl',
    password: '768ff59024f4ccf4edecfa48af2fe4500b34e74d174352a4ca68a7673f97f2cd',
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