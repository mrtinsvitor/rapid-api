import { eventsSchema } from '../config/constants';

export default (sequelize, DataTypes) => {
  const Event = sequelize.define('Event',
    {
      id: {
        field: 'id_event',
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        field: 'nm_event',
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      description: {
        field: 'tx_description',
        type: DataTypes.TEXT,
        allowNull: false,
      },
      targetAudience: {
        field: 'tx_target_audience',
        type: DataTypes.STRING(160),
        allowNull: true,
      },
      vacancy: {
        field: 'qt_vacancy',
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      complementaryHours: {
        field: 'qt_hours',
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      enrollmentValue: {
        field: 'vl_enrollment',
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      coverPhoto: {
        field: 'ph_cover',
        type: DataTypes.BLOB('medium'),
        allowNull: true,
      },
      eventDate: {
        field: 'dt_event',
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      enrollmentEndingDate: {
        field: 'dt_enrollment_ending',
        type: DataTypes.DATE,
        allowNull: true,
      },
      openingHour: {
        field: 'hr_opening',
        type: DataTypes.TIME,
        allowNull: false,
      },
      endingHour: {
        field: 'hr_ending',
        type: DataTypes.TIME,
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
      tableName: 'tb_event',
    },
  );

  Event.associate = function (models) {
    /* Pertence */
    Event.belongsTo(models.Local, {
      foreignKey: {
        field: 'id_local',
        allowNull: false
      },
      as: 'local'
    });

    Event.belongsTo(models.Professor, {
      foreignKey: {
        field: 'id_professor',
        allowNull: true
      },
      as: 'professor'
    });
  }

  return Event;
}