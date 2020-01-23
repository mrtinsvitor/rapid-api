import {
  Event,
  EventCourse,
  Student,
  StudentEventEnrollment,
  sequelize
} from '../models';

const eventService = {
  findByCourse: async (courseId) => {
    const event = await EventCourse.findOne({
      where: { courseId },
      include: [{ all: true, nested: true }],
    })
      .then(content => content.event)

    return event;
  },
  createEvent: async (createEventObj) => {
    const content = await sequelize.transaction(async (transaction) => {
      const newEvent = await Event.create(createEventObj, { transaction })
        .then(res => res);

      const newEventCourse = {
        eventId: newEvent.id,
        courseId: createEventObj.courseId,
        ...createEventObj
      };

      await EventCourse.create(newEventCourse, { transaction })
        .then(res => res)

      return newEvent;
    });

    return content;
  },
  enrollEvent: async (obj) => {
    const studentEventEnrollmentObj = {
      enrollmentDate: new Date(),
      ...obj
    };

    return await StudentEventEnrollment.create(studentEventEnrollmentObj).then(res => res);
  },
  completeEvent: async (reqObj) => {
    const transaction = await sequelize.transaction(async (t) => {
      const studentEventEnrollment = await StudentEventEnrollment.findOne({
        where: { eventId: reqObj.eventId, studentId: reqObj.studentId },
        include: [],
      });

      if (!studentEventEnrollment) {
        return await StudentEventEnrollment
          .create(reqObj, { transaction: t });
      }

      if (studentEventEnrollment.participationDate) {
        throw { error: 'Participation already checked.' };
      }

      return await StudentEventEnrollment.update(
        {
          reqObj
        },
        {
          where: { id: studentEventEnrollment.id }
        }, { transaction: t }
      )

    });
  }
};

export default eventService;