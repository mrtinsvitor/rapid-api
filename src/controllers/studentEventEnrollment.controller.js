import express from 'express';

import baseController from './baseController.controller';

import { StudentEventEnrollment } from '../models';

const router = express.Router();

/* Generic CRUD methods. Implement new methods above */
baseController.setAllCrudMethods(router, StudentEventEnrollment);

export default router;