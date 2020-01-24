import { User, Student, sequelize } from '../models';

const service = {
  registerStudent: async (reqObj) => {
    return await sequelize.transaction(async (transaction) => {
      const newUser = await User.create({ profileId: 4, ...reqObj }, { transaction });

      return await Student.create(
        {
          userId: newUser.id,
          ...reqObj
        },
        { transaction }
      );
    })
  },
};

export default service;