import express from 'express';

import user from '../controllers/user.controller';
import profile from '../controllers/profile.controller';

const router = express();

router.get('/', (req, res) => res.send('Hello World!'));

router.use('/users', user);
router.use('/profiles', profile);

export default router;