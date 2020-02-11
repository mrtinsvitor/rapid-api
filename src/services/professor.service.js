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
};

export default service;