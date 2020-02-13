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
    },
    {
      schema: eventsSchema,
      tableName: 'tb_professor'
    }
  );

  return Professor;
}