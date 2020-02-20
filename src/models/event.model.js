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
        validate: {
          notNull: { msg: 'É necessário informar o nome do evento.' },
          notEmpty: true,
        }
      },
      description: {
        field: 'tx_description',
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: 'É necessário informar a descrição do evento.' },
          notEmpty: true,
        }
      },
      targetAudience: {
        field: 'tx_target_audience',
        type: DataTypes.STRING(220),
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
        allowNull: true,
      },
      enrollmentValue: {
        field: 'vl_enrollment',
        type: DataTypes.DECIMAL,
        allowNull: true,
        // validate: {
        //   isDecimal: { msg: 'O valor deve ser no formato decimal.' }
        // }
      },
      coverPhoto: {
        field: 'ph_cover',
        type: DataTypes.TEXT,
        allowNull: true,
      },
      eventDate: {
        field: 'dt_event',
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull: { msg: 'É necessário informar a data do evento.' },
        }
      },
      enrollmentEndingDate: {
        field: 'dt_enrollment_ending',
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
          isAfter: new Date()
        }
      },
      openingHour: {
        field: 'hr_opening',
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notNull: { msg: 'É necessário informar a hora de abertura do evento.' }
        }
      },
      endingHour: {
        field: 'hr_ending',
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notNull: { msg: 'É necessário informar a hora de fechamento do evento.' }
        }
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
        allowNull: false,
        validate: {
          notNull: { msg: 'É necessário informar o local do evento.' }
        }
      },
      as: 'local'
    });

    Event.belongsTo(models.Professor, {
      foreignKey: {
        field: 'id_host_professor',
        allowNull: false,
        validate: {
          notNull: { msg: 'É necessário informar o professor organizador.' }
        }
      },
      as: 'professor'
    });
  }

  return Event;
}