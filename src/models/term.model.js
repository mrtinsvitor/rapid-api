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
      },
      name: {
        field: 'nm_term',
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      insertionUserId: {
        field: 'id_insertion_user',
        type: DataTypes.BIGINT,
        allowNull: false,
      }
    },
    {
      schema: eventsSchema,
      tableName: 'tb_term'
    }
  );

  return Term;
}