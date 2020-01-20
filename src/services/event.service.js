import { Event, EventCourse } from '../models';

const eventService = {
  findByCourse: async (courseId) => {
    const event = await EventCourse.findOne({
      where: { courseId },
      include: [{ all: true, nested: true }],
    })
      .then(content => content.event)

    return event;
  }
};

export default eventService;