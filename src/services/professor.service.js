import { Professor, ProfessorCourse, User, Course, sequelize } from '../models';

const service = {
  findByCourseId: async (courseId) => {
    return await ProfessorCourse.findAll({
      where: { courseId },
      include: [
        {
          model: Professor,
          as: 'professor',
          include: [{ model: User, as: 'user' }]
        },
        {
          model: Course,
          as: 'course'
        }
      ],
    });
  },
  registerProfessor: async (obj) => {
    return await sequelize.transaction(async (transaction) => {
      const newUser = await User.create({ profileId: 3, ...obj }, { transaction });

      return await Professor.create(
        { userId: newUser.id, ...obj },
        { transaction }
      );
    });
  },
};

export default service;