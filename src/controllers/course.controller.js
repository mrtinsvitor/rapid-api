import express from 'express';

import baseController from './baseController.controller';

import { Course } from '../models';

const router = express.Router();

/* Generic CRUD methods. Implement new methods above */
baseController.findAll(router, Course);
baseController.findOne(router, Course);

export default router;