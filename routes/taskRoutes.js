// routes/taskRoutes.js
const express = require('express');
const { processTask } = require('../controllers/taskController');
const { taskLimiter, secondLimiter } = require('../middlewares/rate-limiter');

const router = express.Router();

// POST /api/tasks
router.post('/', secondLimiter, taskLimiter, processTask);

module.exports = router;
