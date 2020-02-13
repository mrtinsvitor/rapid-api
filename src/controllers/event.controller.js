import express from 'express';
import httpStatus from 'http-status';

import baseController from './baseController.controller';

import { Event } from '../models';
import eventService from '../services/event.service';
import studentEventEnrollment from '../services/studentEventEnrollment.service';

const router = express.Router();

/* Find Events by Course */
router.get('/find-by-course/:courseId', async (req, res, next) => {
  try {
    const data = await eventService.findByCourse(req.params.courseId);

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    next(e);
  }
});

/* Create a new event */
router.post('/create-event', async (req, res, next) => {
  try {
    const data = await eventService.createEvent(req.body);

    return res.status(httpStatus.OK)
      .json({ message: 'Event created', data });
  } catch (e) {
    next(e);
  }

});

/* Enroll Event for Students */
router.post('/enroll', async (req, res, next) => {
  try {
    const data = await eventService.enrollEvent(req.body);

    return res.status(httpStatus.OK)
      .json({ message: 'Operation completed with success', data });
  } catch (e) {
    next(e);
  }
});

/* Participation Check for Students */
router.post('/participation-check', async (req, res, next) => {
  try {
    const data = await eventService.completeEvent(req.body);

    return res.status(httpStatus.OK)
      .json({ message: 'Operation completed with success', updatedValues: data });
  } catch (e) {
    next(e);
  }
});

/* Find all Students enrolled in an given event */
router.get('/find-all/students/enrolled/:eventId', async (req, res, next) => {
  try {
    const data = await studentEventEnrollment.findByEvent(req.params.eventId);

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    next(e);
  }
});

baseController.findAll(router, Event);
baseController.findOne(router, Event);
baseController.update(router, Event);

export default router;