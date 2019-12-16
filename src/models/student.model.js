import { eventsSchema } from '../config/constants';

export default (sequelize, DataTypes) => {
  const Student = sequelize.define('Student',
    {
      id: {
        field: 'id_student',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      complementaryHours: {
        field: 'qt_complementary_hours',
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      insertionUserId: {
        field: 'id_insertion_user',
        type: DataTypes.BIGINT,
        allowNull: false,
      }
    },
    {
      schema: eventsSchema,
      tableName: 'tb_student'
    }
  );

  Student.associate = function (models) {
    /* Pertence */
    Student.belongsTo(models.User, {
      foreignKey: {
        field: 'id_user',
        allowNull: false
      },
      as: 'user'
    });

    Student.belongsTo(models.Course, {
      foreignKey: {
        field: 'id_course',
        allowNull: false
      },
      as: 'course'
    });

    Student.belongsTo(models.Term, {
      foreignKey: {
        field: 'id_term',
        allowNull: true
      },
      as: 'term'
    });
  }

  return Student;
}