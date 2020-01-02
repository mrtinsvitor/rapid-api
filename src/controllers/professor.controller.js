import express from 'express';

import baseController from './baseController.controller';

import Professor from '../models';

const router = express.Router();

/* Generic CRUD methods. Implement new methods above */
baseController.setAllCrudMethods(router, Professor);

export default router;