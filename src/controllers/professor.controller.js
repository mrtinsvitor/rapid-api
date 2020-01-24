import express from 'express';
import httpStatus from 'http-status';

import baseController from './baseController.controller';

import { Professor } from '../models';

import professorService from '../services/professor.service';

const router = express.Router();

router.get('/find-by-course/:courseId', async (req, res, next) => {
  try {
    const data = await professorService.findByCourseId(req.params.courseId);

    return res.status(httpStatus.OK).json(data);
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: e });
  }
});

router.post('/new-professor', async (req, res, next) => {
  try {
    const data = await professorService.registerProfessor(req.body);

    return res.status(httpStatus.OK)
      .json({ message: 'Operation completed with success', data });
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: e });
  }
});

/* Generic CRUD methods. Implement new methods above */
baseController.findAll(router, Professor);
baseController.findOne(router, Professor);
baseController.update(router, Professor);

export default router;