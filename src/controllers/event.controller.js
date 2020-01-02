import express from 'express';
import httpStatus from 'http-status';

import baseController from './baseController.controller';

import { Event, EventCourse } from '../models';

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

/* Generic CRUD methods. Implement new methods above */ 
baseController.setAllCrudMethods(router, Event);

export default router;