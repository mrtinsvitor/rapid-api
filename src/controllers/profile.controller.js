import express from 'express';

import baseController from './baseController.controller';

import { Profile as model } from '../models';

const router = express.Router();

baseController(router, model);

export default router;