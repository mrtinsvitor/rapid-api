import {
  Event,
  EventCourse,
  StudentEventEnrollment,
  sequelize
} from '../models';
import ErrorHandler from '../helpers/ErrorHandler';

const eventService = {
  findByCourse: async (courseId) => {
    return await EventCourse.findAll({
      where: { courseId },
      include: [{ all: true, nested: true }],
    });
  },
  createEvent: async (createEventObj) => {
    const transaction = await sequelize.transaction(async (t) => {
      const newEvent = await Event.create(createEventObj, { transaction: t })
        .then(data => data);

      const newEventCourse = {
        eventId: newEvent.id,
        courseId: createEventObj.courseId,
        ...createEventObj
      };

      await EventCourse.create(newEventCourse, { transaction: t })
        .then(data => data)

      return newEvent;
    });

    return transaction;
  },
  enrollEvent: async (obj) => {
    const existingEnrollment = await StudentEventEnrollment.findOne(
      { where: { eventId: obj.eventId, studentId: obj.studentId } }
    );

    if (existingEnrollment) {
      throw 'Student already enrolled';
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
          .create(reqObj, { transaction: t });
      }

      if (studentEventEnrollment.participationDate) {
        throw 'Participation already checked.';
      }


      return await StudentEventEnrollment.update(
        { participationDate: reqObj.participationDate },
        { where: { id: studentEventEnrollment.id } },
        { transaction: t }
      );
    });
  }
};

export default eventService;