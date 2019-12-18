import express from 'express';
import httpStatus from 'http-status';

import baseController from './baseController.controller';

import { Event, EventCourse } from '../models';

const router = express.Router();

baseController.findAll(router, Event);
baseController.findByPk(router, Event);
baseController.insert(router, Event);
baseController.delete(router, Event);

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

export default router;