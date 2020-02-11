import { eventsSchema } from '../config/constants';

export default (sequelize, DataTypes) => {
  const ProfessorCourse = sequelize.define('ProfessorCourse',
    {
      id: {
        field: 'id_professor_course',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      }
    },
    {
      schema: eventsSchema,
      tableName: 'tb_professor_course',
      // defaultScope: {
      //   attributes: { exclude: ['professorId', 'courseId'] },
      // },
    }
  );

  ProfessorCourse.associate = function (models) {
    ProfessorCourse.belongsTo(models.Professor, {
      foreignKey: {
        field: 'id_professor',
        allowNull: false
      },
      as: 'professor'
    });

    ProfessorCourse.belongsTo(models.Course, {
      foreignKey: {
        field: 'id_course',
        allowNull: false
      },
      as: 'course'
    });
  }

  return ProfessorCourse;
}