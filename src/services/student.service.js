import {
  Student,
  Course,
  Term,
  StudentEventEnrollment,
  Event,
  Local,
  StudyField,
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

  findAllEnrollments: async (studentId) => {
    return await StudentEventEnrollment.findAll({
      where: { studentId },
      include: [
        {
          model: Event,
          as: 'event',
          include: [
            { model: StudyField, as: 'studyField' },
            { model: Local, as: 'local' }
          ]
        }
      ],
      attributes: { exclude: ['eventId', 'studentId'] }
    });
  },
  findLastEvents: async (studentId) => {
    const events = await StudentEventEnrollment.findAll({
      where: { studentId },
      include: [
        {
          model: Event,
          as: 'event',
          include: [
            { model: StudyField, as: 'studyField' },
            { model: Local, as: 'local' }
          ]
        }
      ],
      attributes: { exclude: ['eventId', 'studentId'] }
    });

    return events.filter(event => event.participationDate);
  },
};

export default service;