import express from 'express';
import httpStatus from 'http-status';

import baseController from './baseController.controller';

import { Event } from '../models';
import eventService from '../services/event.service';

const router = express.Router();

/* Find Events by Course */
router.get('/find-by-course/:courseId', async (req, res, next) => {
  try {
    const data = await eventService.findByCourse(req.params.courseId);

    return res.status(httpStatus.OK).json({ success: 1, data });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ sucess: 0, error });
  }
});

/* Create a new event */
router.post('/create-event', async (req, res, next) => {
  try {
    const data = await eventService.createEvent(req.body);

    return res.status(httpStatus.OK)
      .json({ success: 1, data });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: 0, error })
  }

});

/* Enroll Event for Students */
router.post('/enroll', async (req, res, next) => {
  try {
    const data = await eventService.enrollEvent(req.body);

    return res.status(httpStatus.OK)
      .json({ success: 1, data });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: 0, error });
  }
});

/* Participation Check for Students */
router.post('/participation-check', async (req, res, next) => {
  try {
    const data = await eventService.completeEvent(req.body);

    return res.status(httpStatus.OK)
      .json({ success: 1, data });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: 0, error });
  }
});

baseController.findAll(router, Event);
baseController.findOne(router, Event);

export default router;