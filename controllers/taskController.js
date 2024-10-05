// controllers/taskController.js
const queueService = require('../services/queueService');

exports.processTask = async (req, res) => {
  const { user_id } = req.body;

  if (!user_id) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  // Add task to queue
  queueService.addTask(user_id);
  res.status(200).json({ message: `Task queued for user ${user_id}` });
};
