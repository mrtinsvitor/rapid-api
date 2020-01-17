import { Event, EventCourse, sequelize } from '../models';

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
  }
};

export default eventService;