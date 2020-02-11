import { eventsSchema } from '../config/constants';

export default (sequelize, DataTypes) => {
  const StudyField = sequelize.define('StudyField',
    {
      id: {
        field: 'id_study_field',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        field: 'nm_study_field',
        type: DataTypes.STRING(80),
        allowNull: false,
        validate: {
          notNull: { msg: 'É necessário informar o nome da área de conhecimento.' }
        }
      }
    },
    {
      schema: eventsSchema,
      tableName: 'tb_study_field'
    }
  );

  StudyField.associate = function (models) {
  }

  return StudyField;
}