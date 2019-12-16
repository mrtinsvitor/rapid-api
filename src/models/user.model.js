import { eventsSchema } from '../config/constants';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User',
    {
      id: {
        field: 'id_user',
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      firstName: {
        field: 'nm_first_name',
        type: DataTypes.STRING(20),
        allowNull: false,
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
      },
      email: {
        field: 'tx_email',
        type: DataTypes.STRING(320),
        allowNull: false,
      },
      password: {
        field: 'tx_password',
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      schema: eventsSchema,
      tableName: 'tb_user'
    }
  );

  User.associate = function (models) {
    /* Pertence */
    User.belongsTo(models.Profile, {
      foreignKey: {
        field: 'id_profile',
        allowNull: false
      },
      as: 'profile'
    });

    /* Possui */
    // models.Usuario.hasMany(models.Pergunta, {
    //   foreignKey: {
    //     name: 'idUsuario',
    //     field: 'id_usuario'
    //   },
    //   as: 'perguntas'
    // });

    // models.Usuario.hasMany(models.UsuarioTitulo, {
    //   foreignKey: {
    //     name: 'idUsuario',
    //     field: 'id_usuario'
    //   },
    //   as: 'usuarioTitulo'
    // });
  }

  return User;
}