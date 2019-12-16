import { eventsSchema } from '../config/constants';

export default (sequelize, DataTypes) => {
  const EventCourse = sequelize.define('EventCourse',
    {
      id: {
        field: 'id_event',
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
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
      tableName: 'tb_event_course'
    }
  );

  EventCourse.associate = function (models) {
    /* Pertence */
    EventCourse.belongsTo(models.Event, {
      foreignKey: {
        field: 'id_event',
        allowNull: false
      },
      as: 'event'
    });

    EventCourse.belongsTo(models.Course, {
      foreignKey: {
        field: 'id_course',
        allowNull: true
      },
      as: 'course'
    });
  }

  return EventCourse;
}