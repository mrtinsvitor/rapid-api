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
      firstName: {
        field: 'nm_first_name',
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
          notNull: { msg: 'É necessário informar o primeiro nome. ' },
          notEmpty: true
        }
      },
      lastName: {
        field: 'nm_last_name',
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      enrollment: {
        field: 'cd_enrollment',
        type: DataTypes.STRING(60),
        allowNull: false,
        // autoIncrement: true,
      },
      email: {
        field: 'tx_email',
        type: DataTypes.STRING(254),
        allowNull: false,
        validate: {
          notNull: { msg: 'É necessário informar o e-mail. ' },
          notEmpty: true,
          isEmail: true
        }
      },
      complementaryHours: {
        field: 'qt_complementary_hours',
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          isNumeric: { msg: 'A quantidade de horas não é um número.' }
        }
      }
    },
    {
      schema: eventsSchema,
      tableName: 'tb_student',
      defaultScope: {
        attributes: { exclude: [] }
      }
    }
  );

  Student.associate = function (models) {
    Student.belongsTo(models.Course, {
      foreignKey: {
        field: 'id_course',
        allowNull: false,
        validate: {
          notNull: { msg: 'É necessário informar o curso.' }
        }
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