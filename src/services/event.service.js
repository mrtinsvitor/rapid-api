import { Op } from 'sequelize';

import {
  Event,
  StudentEventEnrollment,
  Course,
  StudyField,
  Local,
  sequelize
} from '../models';

import studentEventEnrollmentService from '../services/studentEventEnrollment.service';

const eventService = {
  findById: async (id) => {
    return await Event.findByPk(id, {
      include: [{ all: true, nested: true }],
    });
  },
  findByStudyFieldUpNext: async (studyFieldId) => {
    try {
      const eventList = await Event.findAll({
        where: { studyFieldId },
        include: [
          {
            model: Local,
            as: 'local'
          },
          {
            model: StudyField,
            as: 'studyField'
          }
        ]
      });

      if (!eventList.length) {
        return;
      }

      return eventList.filter(event => new Date(event.eventDate) >= new Date())
        .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));
    } catch (e) {
      throw e;
    }
  },
  findByStudyFieldWithEnrollment: async (studyFieldId, userId) => {
    try {
      const eventList = await Event.findAll({
        where: { studyFieldId },
        include: [
          {
            model: Local,
            as: 'local'
          },
          {
            model: StudyField,
            as: 'studyField'
          }
        ]
      }).map(event => event.toJSON());

      if (!eventList.length) return;

      let promises = []
      for (let i = 0; i < eventList.length; i++) {
        const enrollment = studentEventEnrollmentService.findByEventAndStudent(eventList[i].id, userId);
        promises.push(enrollment);
      };

      return Promise.all(promises).then(function (enrollmentList) {
        const filteredEnrollmentList = enrollmentList.filter(enrollment => enrollment !== null);

        const eventsWithEnrollment = [];

        eventList.map(event => {
          const enrollment = filteredEnrollmentList.find(enrollment => enrollment.eventId === event.id);
          if (!enrollment) return;

          eventsWithEnrollment.push({ ...event, studentEventEnrollment: enrollment.toJSON() });
        });

        return eventsWithEnrollment;
      });
    } catch (e) {
      throw e;
    }
  },
  findByCourse: async (courseId) => {
    const course = await Course.findOne({
      where: { id: courseId },
      include: []
    });

    if (!course) {
      return;
    }

    return await Event.findAll({
      where: { studyFieldId: course.studyFieldId },
      include: [{ all: true, nested: true }],
    });
  },
  findByHostProfessor: async (professorId) => {
    return await Event.findAll({
      where: { professorId },
      include: [],
    });
  },
  createEvent: async (eventObj) => {
    try {
      // TODO: Check if there's any existing event at the same date, time and place 
      return await Event.create(eventObj);
    } catch (error) {
      throw error;
    }
  },
  enrollEvent: async (obj) => {
    const existingEnrollment = await StudentEventEnrollment.findOne(
      { where: { eventId: obj.eventId, studentId: obj.studentId } }
    );

    if (existingEnrollment) {
      return { code: '001', error: 'Aluno já está inscrito.' };
    }

    const studentEventEnrollmentObj = {
      enrollmentDate: new Date(),
      ...obj
    };

    return await StudentEventEnrollment.create(studentEventEnrollmentObj).then(data => data);
  },
  completeEvent: async (reqObj) => {
    return await sequelize.transaction(async (t) => {
      const studentEventEnrollment = await StudentEventEnrollment.findOne({
        where: { eventId: reqObj.eventId, studentId: reqObj.studentId },
        include: [],
      });

      if (!studentEventEnrollment) {
        return await StudentEventEnrollment
          .create(
            { enrollmentDate: new Date(), participationDate: new Date(), ...reqObj },
            { transaction: t }
          );
      }

      if (studentEventEnrollment.participationDate) {
        return { code: '002', error: 'Presença já confirmada.' };
      }

      return await StudentEventEnrollment.update(
        { participationDate: new Date() },
        { where: { id: studentEventEnrollment.id } },
        { transaction: t }
      );
    });
  }
};

export default eventService;