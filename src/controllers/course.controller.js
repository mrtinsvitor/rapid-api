import express from 'express';

import baseController from './baseController.controller';

import { Course } from '../models';

const router = express.Router();

/* Generic CRUD methods. Implement new methods above */
baseController.setAllCrudMethods(router, Course);

export default router;