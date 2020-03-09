import express from 'express';
import httpStatus from 'http-status';

import baseController from './baseController.controller';

import { Student } from '../models';

import studentService from '../services/student.service';

const router = express.Router();

router.get('/find-by-email', async (req, res, next) => {
  try {
    const data = await studentService.findByEmail(req.query.email);

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