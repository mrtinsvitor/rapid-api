import { eventsSchema } from '../config/constants';

export default (sequelize, DataTypes) => {
  const StudentEventEnrollment = sequelize.define('StudentEventEnrollment',
    {
      id: {
        field: 'id_student_event_enrollment',
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      enrollmentDate: {
        field: 'dh_enrollment',
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.NOW,
      },
      participationDate: {
        field: 'dh_participation',
        type: DataTypes.DATE,
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
      tableName: 'tb_student_event_enrollment'
    }
  );

  StudentEventEnrollment.associate = function (models) {
    /* Pertence */
    StudentEventEnrollment.belongsTo(models.Student, {
      foreignKey: {
        field: 'id_student',
        allowNull: false
      },
      as: 'student'
    });

    StudentEventEnrollment.belongsTo(models.Event, {
      foreignKey: {
        field: 'id_event',
        allowNull: false
      },
      as: 'event'
    });
  }

  return StudentEventEnrollment;
}