import express from 'express';

import course from '../controllers/course.controller';
import event from '../controllers/event.controller';
import eventCourse from '../controllers/eventCourse.controller';
import local from '../controllers/local.controller';
import professor from '../controllers/professor.controller';
import professorCourse from '../controllers/professorCourse.controller';
import profile from '../controllers/profile.controller';
import student from '../controllers/student.controller';
import studentEventEnrollment from '../controllers/studentEventEnrollment.controller';
import term from '../controllers/term.controller';
import user from '../controllers/user.controller';

const router = express();

router.get('/', (req, res) => res.send('Hello World!'));

router.use('/courses', course);
router.use('/events', event);
router.use('/event-courses', eventCourse);
router.use('/locals', local);
router.use('/professors', professor);
router.use('/professor-courses', professorCourse);
router.use('/profiles', profile);
router.use('/students', student);
router.use('/student-event-enrollments', studentEventEnrollment);
router.use('/terms', term);
router.use('/users', user);

export default router;