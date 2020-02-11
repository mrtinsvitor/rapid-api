import { eventsSchema } from '../config/constants';

export default (sequelize, DataTypes) => {
  const Term = sequelize.define('Term',
    {
      id: {
        field: 'id_term',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      code: {
        field: 'cd_term',
        type: DataTypes.STRING(2),
        allowNull: false,
        validate: {
          notNull: { msg: 'É necessário informar o código do período. ' },
          notEmpty: true
        }
      },
      name: {
        field: 'nm_term',
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          notNull: { msg: 'É necessário informar o nome do período. ' },
          notEmpty: true
        }
      }
    },
    {
      schema: eventsSchema,
      tableName: 'tb_term'
    }
  );

  return Term;
}