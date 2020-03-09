import {
  Student,
  Course,
  Term,
  sequelize
} from '../models';

const service = {
  findByEmail: async (email) => {
    return await Student.findOne({
      where: { email },
      include: [
        {
          model: Term,
          as: 'term'
        },
        {
          model: Course,
          as: 'course'
        }
      ],
    });
  },
};

export default service;