import express from 'express';

import baseController from './baseController.controller';

import { StudyField } from '../models';

const router = express.Router();

/* Generic CRUD methods. Implement new methods above */
baseController.findAll(router, StudyField);
baseController.findOne(router, StudyField);

export default router;