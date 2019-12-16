import express from 'express';

import baseController from './baseController.controller';

import { Course as model } from '../models';

const router = express.Router();

baseController.findAll(router, model);
baseController.findByPk(router, model);
baseController.insert(router, model);
baseController.delete(router, model);

export default router;