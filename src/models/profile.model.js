import { eventsSchema } from '../config/constants';

export default (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile',
    {
      id: {
        field: 'id_profile',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        field: 'nm_profile',
        type: DataTypes.STRING(40),
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
      tableName: 'tb_profile',
    }
  );

  return Profile;
}