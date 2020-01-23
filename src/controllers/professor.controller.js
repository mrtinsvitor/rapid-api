import express from 'express';
import httpStatus from 'http-status';

import baseController from './baseController.controller';

import { Professor } from '../models';

import professorService from '../services/professor.service';

const router = express.Router();

router.get('/find-by-course/:courseId', async (req, res, next) => {
  try {
    const content = await professorService.findByCourseId(req.params.courseId);

    return res.status(httpStatus.OK).json(content);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ success: 0, error });
  }
});

/* Generic CRUD methods. Implement new methods above */
baseController.findAll(router, Professor);
baseController.findOne(router, Professor);
baseController.update(router, Professor);

export default router;