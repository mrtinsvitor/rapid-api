import express from 'express';

import baseController from './baseController.controller';

import { User } from '../models';

const router = express.Router();

/* Generic CRUD methods. Implement new methods above */
baseController.setAllCrudMethods(router, User);

export default router;