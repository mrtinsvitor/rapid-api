import { eventsSchema } from '../config/constants';

export default (sequelize, DataTypes) => {
  const Local = sequelize.define('Local',
    {
      id: {
        field: 'id_professor',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      localName: {
        field: 'nm_local',
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      room: {
        field: 'cd_room',
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      floor: {
        field: 'cd_floor',
        type: DataTypes.CHAR(1),
        allowNull: true,
      },
      cep: {
        field: 'cd_zip_code',
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      number: {
        field: 'cd_location_number',
        type: DataTypes.STRING(6),
        allowNull: true,
      },
      complement: {
        field: 'tx_complement',
        type: DataTypes.STRING(220),
        allowNull: true,
      },
    },
    {
      schema: eventsSchema,
      tableName: 'tb_local'
    }
  );

  Local.associate = function (models) {
    /* Pertence */
  }

  return Local;
}