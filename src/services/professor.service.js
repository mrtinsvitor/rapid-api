import { Professor, ProfessorCourse, Course, sequelize } from '../models';

const service = {
  findByCourseId: async (courseId) => {
    return await ProfessorCourse.findAll({
      where: { courseId },
      include: [
        {
          model: Professor,
          as: 'professor',
        },
        {
          model: Course,
          as: 'course'
        }
      ],
    });
  },
  findByEmail: async (email) => {
    return await Professor.findOne({
      where: { email },
    });
  },
};

export default service;