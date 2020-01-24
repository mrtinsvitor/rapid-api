import { eventsSchema } from '../config/constants';

export default (sequelize, DataTypes) => {
  const Course = sequelize.define('Course',
    {
      id: {
        field: 'id_course',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        field: 'nm_course',
        type: DataTypes.STRING(80),
        allowNull: false,
        validate: {
          notNull: { msg: 'É necessário informar o nome do curso.' }
        }
      },
      insertionUserId: {
        field: 'id_insertion_user',
        type: DataTypes.BIGINT,
        allowNull: false,
      }
    },
    {
      schema: eventsSchema,
      tableName: 'tb_course'
    }
  );

  Course.associate = function (models) {
    /* Pertence */
    Course.belongsTo(models.Professor, {
      foreignKey: {
        field: 'id_coordinator',
        allowNull: false,
        validate: {
          notNull: { msg: 'É necessário informar o coordenador do curso.' }
        }
      },
      as: 'coordinator'
    });
  }

  return Course;
}