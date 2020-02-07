import express from 'express';
import httpStatus from 'http-status';

import baseController from './baseController.controller';

import { Student } from '../models';

import studentService from '../services/student.service';

const router = express.Router();

router.post('/new-student', async (req, res, next) => {
  try {
    const data = await studentService.registerStudent(req.body);

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    next(e);
  }
});

/* Generic CRUD methods. Implement new methods above */
baseController.findAll(router, Student);
baseController.findOne(router, Student);
baseController.update(router, Student);

export default router;