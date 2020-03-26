import {
  Event,
  EventCourse,
  StudentEventEnrollment,
  Course,
  StudyField,
  Local,
  sequelize
} from '../models';


const eventService = {
  findById: async (id) => {
    return await Event.findByPk(id, {
      include: [{ all: true, nested: true }],
    });
  },
  findByStudyField: async (studyFieldId) => {
    try {
      const studyFieldCourses = await Course.findAll({
        where: { studyFieldId: studyFieldId },
        include: []
      });

      const courseIds = studyFieldCourses.map(course => course.id);

      const eventList = await EventCourse.findAll({
        where: { courseId: courseIds },
        include: [
          {
            model: Event,
            as: 'event',
            include: [{ model: Local, as: 'local' }]
          },
          {
            model: Course,
            as: 'course',
            include: [{ model: StudyField, as: 'studyField' }]
          }
        ],
      });

      return eventList.sort((a, b) => new Date(a.event.eventDate) - new Date(b.event.eventDate));
    } catch (e) {
      throw e;
    }
  },
  findByCourse: async (courseId) => {
    return await EventCourse.findAll({
      where: { courseId },
      include: [{ all: true, nested: true }],
    });
  },
  findByHostProfessor: async (professorId) => {
    return await Event.findAll({
      where: { professorId },
      include: [],
    });
  },
  createEvent: async (createEventObj) => {
    const transaction = await sequelize.transaction(async (t) => {
      const newEvent = await Event.create(createEventObj, { transaction: t })

      let promises = []
      for (let i = 0; i < createEventObj.courseList.length; i++) {
        const newEventCourse = {
          eventId: newEvent.id,
          courseId: createEventObj.courseList[i].id,
        };

        const newPromise = EventCourse.create(newEventCourse, { transaction: t });
        promises.push(newPromise);
      };

      return Promise.all(promises).then(function (event) { return newEvent });
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
          .create(
            { participationDate: new Date(), ...reqObj },
            { transaction: t }
          );
      }

      if (studentEventEnrollment.participationDate) {
        throw 'Participation already checked.';
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