import express from 'express';

import baseController from './baseController.controller';

import { StudyField } from '../models';

const router = express.Router();

/* Generic CRUD methods. Implement new methods above */
baseController.setAllCrudMethods(router, StudyField);

export default router;