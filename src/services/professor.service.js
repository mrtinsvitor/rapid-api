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
    })
      .then(data => data)
  },
  registerProfessor: async (obj) => {
    return await sequelize.transaction(async (transaction) => {
      const newProfessor = await Professor.create(obj, { transaction });

      if (obj.courseId === 0) {
        return newProfessor;
      }

      const objProfessorCourse = {
        professorId: newProfessor.id,
        courseId: obj.courseId,
        ...obj
      };

      await ProfessorCourse.create(objProfessorCourse, { transaction });

      return newProfessor;
    });
  },
  // putProfessorCourses: async (obj) => {
  //   return await sequelize.transaction(async (transaction) => {
  //     obj.courses.map((course, i) => {
  //       await ProfessorCourse.create(objProfessorCourse, { transaction })
  //         .then(res => res)
  //     });
  //   })
  // }
};

export default service;