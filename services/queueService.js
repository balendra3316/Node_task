// // services/queueService.js
// const fs = require('fs');
// const path = require('path');
// const logFilePath = path.join(__dirname, '../logs/task.log');

// const queue = new Map();

// // Function to log tasks to task.log file
// async function logTask(user_id) {
//   const logMessage = `${user_id} - task completed at - ${new Date().toISOString()}\n`;
  
//   fs.appendFile(logFilePath, logMessage, (err) => {
//     if (err) throw err;
//     console.log(logMessage.trim());
//   });
// }

// // Add task to queue for each user
// exports.addTask = (user_id) => {
//   if (!queue.has(user_id)) {
//     queue.set(user_id, []);
//   }

//   const userQueue = queue.get(user_id);
//   userQueue.push(async () => {
//     await logTask(user_id);
//   });

//   // Process task queue with rate limiting (1 task per second)
//   if (userQueue.length === 1) {
//     processQueue(user_id);
//   }
// };

// // Helper function to process the user's task queue
// function processQueue(user_id) {
//   const userQueue = queue.get(user_id);

//   if (!userQueue || userQueue.length === 0) {
//     queue.delete(user_id);
//     return;
//   }

//   const task = userQueue.shift();
//   task();

//   // Wait 1 second before processing the next task
//   setTimeout(() => processQueue(user_id), 1000);
// }






const fs = require('fs');
const path = require('path');
const logFilePath = path.join(__dirname, '../logs/task.log');

const queue = new Map();

// Function to log tasks to task.log file
async function logTask(user_id) {
  const logMessage = `${user_id} - task completed at - ${new Date().toISOString()}\n`;
  
  // Use appendFileSync for synchronous logging (optional)
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Error writing to log file:', err); // Log the error instead of throwing
    } else {
      console.log(logMessage.trim());
    }
  });
}

// Add task to queue for each user
exports.addTask = (user_id) => {
  if (!queue.has(user_id)) {
    queue.set(user_id, []);
  }

  const userQueue = queue.get(user_id);
  userQueue.push(async () => {
    await logTask(user_id);
  });

  // Process task queue with rate limiting (1 task per second)
  if (userQueue.length === 1) {
    processQueue(user_id);
  }
};

// Helper function to process the user's task queue
function processQueue(user_id) {
  const userQueue = queue.get(user_id);

  if (!userQueue || userQueue.length === 0) {
    queue.delete(user_id);
    return;
  }

  const task = userQueue.shift();
  task(); // Call the task function

  // Wait 1 second before processing the next task
  setTimeout(() => processQueue(user_id), 1000);
}
