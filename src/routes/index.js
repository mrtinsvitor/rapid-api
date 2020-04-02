import express from 'express';

import course from '../controllers/course.controller';
import event from '../controllers/event.controller';
import local from '../controllers/local.controller';
import professor from '../controllers/professor.controller';
import student from '../controllers/student.controller';
import term from '../controllers/term.controller';
import studyField from '../controllers/studyField.controller';

const router = express();

router.get('/', (req, res) => res.send('Hello World!'));

router.use('/courses', course);
router.use('/events', event);
router.use('/locals', local);
router.use('/professors', professor);
router.use('/students', student);
router.use('/terms', term);
router.use('/study-fields', studyField);

export default router;