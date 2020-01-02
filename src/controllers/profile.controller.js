import express from 'express';

import baseController from './baseController.controller';

import { Profile } from '../models';

const router = express.Router();

/* Generic CRUD methods. Implement new methods above */
baseController.setAllCrudMethods(router, Profile);

export default router;