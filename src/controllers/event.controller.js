import express from 'express';
import httpStatus from 'http-status';

import baseController from './baseController.controller';

import { removeEmpty } from '../utils/JsonUtils';

import { Event } from '../models';

import eventService from '../services/event.service';
import studentEventEnrollment from '../services/studentEventEnrollment.service';

const router = express.Router();

/* Find All */
router.get('/', async (req, res, next) => {
  try {
    const data = await eventService.findAll();

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    next(e);
  }
});

/* Find Event by ID */
router.get('/:id', async (req, res, next) => {
  try {
    const data = await eventService.findById(req.params.id);

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    next(e);
  }
});

/* Find Up Next Events by Study Field */
router.get('/find-by-field/:fieldId/up-next', async (req, res, next) => {
  try {
    const data = await eventService.findByStudyFieldUpNext(req.params.fieldId);
    
    if (!data) {
      return res.status(httpStatus.NO_CONTENT).json(data);
    }

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    next(e);
  }
});

/* Find Events by Study Field and With Student enrollment */
router.get('/find-by-field/:fieldId/student-enrollment/:userId', async (req, res, next) => {
  try {
    const data = await eventService.findByStudyFieldWithEnrollment(req.params.fieldId, req.params.userId);
    
    if (!data) {
      return res.status(httpStatus.NO_CONTENT).json(data);
    }

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    next(e);
  }
});

/* Find Events by Course */
router.get('/find-by-course/:courseId', async (req, res, next) => {
  try {
    const data = await eventService.findByCourse(req.params.courseId);

    if (!data) {
      return res.status(httpStatus.NO_CONTENT).json(data);
    }

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    next(e);
  }
});

/* Create a new event */
router.post('/create-event', async (req, res, next) => {
  try {
    const data = await eventService.createEvent(removeEmpty(req.body));

    return res.status(httpStatus.OK)
      .json({ message: 'Evento criado com sucesso', data });
  } catch (e) {
    next(e);
  }
});

/* Enroll Event for Students */
router.post('/enroll', async (req, res, next) => {
  try {
    const data = await eventService.enrollEvent(req.body);

    if (data.error) {
      return res.status(httpStatus.BAD_REQUEST).json(data);
    }

    return res.status(httpStatus.OK)
      .json({ message: 'Student enrolled with success', data });
  } catch (e) {
    next(e);
  }
});

/* Participation Check for Students */
router.post('/participation-check', async (req, res, next) => {
  try {
    const data = await eventService.completeEvent(req.body);

    if (data.error) {
      return res.status(httpStatus.BAD_REQUEST).json(data);
    }

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

    if (!data) {
      return res.status(httpStatus.NO_CONTENT).json(data);
    }

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    next(e);
  }
});

/* Find student enrollment in given event */
router.get('/find-one/event/:eventId/student/:studentId', async (req, res, next) => {
  try {
    const data = await studentEventEnrollment.findByEventAndStudent(req.params.eventId, req.params.studentId);

    if (!data) {
      return res.status(httpStatus.NO_CONTENT).json(data);
    }

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    next(e);
  }
});

/* Find all Events by Host Professor */
router.get('/find-all/professor/host/:professorId', async (req, res, next) => {
  try {
    const data = await eventService.findByHostProfessor(req.params.professorId);

    if (!data) {
      return res.status(httpStatus.NO_CONTENT).json(data);
    }

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    next(e);
  }
});

baseController.update(router, Event);

export default router;