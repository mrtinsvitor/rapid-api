import { eventsSchema } from '../config/constants';

export default (sequelize, DataTypes) => {
  const Professor = sequelize.define('Professor',
    {
      id: {
        field: 'id_professor',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      }
    },
    {
      schema: eventsSchema,
      tableName: 'tb_professor'
    }
  );

  Professor.associate = function (models) {
    /* Pertence */
    Professor.belongsTo(models.User, {
      foreignKey: {
        field: 'id_user',
        allowNull: true
      },
      as: 'user'
    });
  }

  return Professor;
}