import express from 'express';

import baseController from './baseController.controller';

import { Term } from '../models';

const router = express.Router();

/* Generic CRUD methods. Implement new methods above */
baseController.setAllCrudMethods(router, Term);
baseController.findAll(router, Term);
baseController.findOne(router, Term);

export default router;