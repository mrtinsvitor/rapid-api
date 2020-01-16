import express from 'express';
import httpStatus from 'http-status';

import baseController from './baseController.controller';

import { Event, EventCourse, sequelize } from '../models';

const router = express.Router();

/* Find Events by Course */
router.get('/find-by-course/:courseId', (req, res, next) => {
  return EventCourse.findOne({
    where: { courseId: req.params.courseId },
    include: [{ all: true, nested: true }],
  })
    .then(content => res.status(httpStatus.OK).json(content.event))
    .catch(err =>
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ sucess: 0, error: err })
    );
});

/* Create a new event */
router.post('/create-event', async (req, res, next) => {
  try {
    const response = await sequelize.transaction(async (t) => {
      const newEvent = await Event.create(req.body, { transaction: t })
        .then(content => content);

      const newEventCourse = {
        eventId: newEvent.id,
        courseId: req.body.courseId,
        ...req.body
      };

      await EventCourse.create(newEventCourse, { transaction: t })
        .then(content => content)

      return newEvent;
    });
    return res.status(httpStatus.OK)
      .json({ success: 1, message: 'Operation succeed', response });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: 0, message: err })
  }

});

/* Generic CRUD methods. Implement new methods above */
baseController.setAllCrudMethods(router, Event);

export default router;