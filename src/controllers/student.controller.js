import express from 'express';

import baseController from './baseController.controller';

import { Student } from '../models';

const router = express.Router();

/* Generic CRUD methods. Implement new methods above */
baseController.findAll(router, Student);
baseController.findOne(router, Student);
baseController.insert(router, Student);
baseController.update(router, Student);

export default router;