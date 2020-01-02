import express from 'express';

import baseController from './baseController.controller';

import { EventCourse } from '../models';

const router = express.Router();

/* Generic CRUD methods. Implement new methods above */
baseController.setAllCrudMethods(router, EventCourse);

export default router;