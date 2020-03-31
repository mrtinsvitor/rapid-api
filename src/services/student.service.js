import {
  Student,
  Course,
  Term,
  StudentEventEnrollment,
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

  /* Find enrollment by Student ID and Event ID */
  findEnrollment: async (studentId, eventId) => {
    return await StudentEventEnrollment.findOne({
      where: { studentId, eventId },
      include: []
    });
  },
};

export default service;