const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/courseController');

// CRUD endpoints for courses
router.get('/', ctrl.getCourses);          // GET all
router.get('/:id', ctrl.getCourseById);    // GET by ID
router.post('/', ctrl.createCourse);       // POST create
router.put('/:id', ctrl.updateCourse);     // PUT update
router.delete('/:id', ctrl.deleteCourse);  // DELETE

module.exports = router;
