import express from 'express';

import baseController from './baseController.controller';

import ProfessorCourse from '../models';

const router = express.Router();

/* Generic CRUD methods. Implement new methods above */
baseController.setAllCrudMethods(router, ProfessorCourse);

export default router;