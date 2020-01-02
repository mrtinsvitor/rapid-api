import express from 'express';

import baseController from './baseController.controller';

import { Local } from '../models';

const router = express.Router();

/* Generic CRUD methods. Implement new methods above */
baseController.setAllCrudMethods(router, Local);

export default router;