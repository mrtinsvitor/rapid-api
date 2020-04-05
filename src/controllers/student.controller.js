import express from 'express';
import httpStatus from 'http-status';

import baseController from './baseController.controller';

import { Student } from '../models';

import studentService from '../services/student.service';

const router = express.Router();

/* Find Student by Email */
router.get('/find-by-email', async (req, res, next) => {
  try {
    const data = await studentService.findByEmail(req.query.email);

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    next(e);
  }
});

/* Find Enrollment for Student by Event Id */
router.get('/find-enrollment/userid/:studentId/eventid/:eventId', async (req, res, next) => {
  try {
    const data = await studentService.findEnrollment(req.params.studentId, req.params.eventId);

    if (!data) {
      return res.status(httpStatus.NO_CONTENT).json(data);
    }

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    next(e);
  }
});

/* Find All Student's enrollments */
router.get('/find-all-enrollments/student/:studentId', async (req, res, next) => {
  try {
    const data = await studentService.findAllEnrollments(req.params.studentId, req.params.eventId);

    if (!data) {
      return res.status(httpStatus.NO_CONTENT).json(data);
    }

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    next(e);
  }
});

/* Generic CRUD methods. Implement new methods above */
baseController.findAll(router, Student);
baseController.findOne(router, Student);
baseController.insert(router, Student);
baseController.update(router, Student);

export default router;