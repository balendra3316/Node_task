const express = require('express');
const cluster = require('cluster'); // Import the cluster module
const taskRoutes = require('./routes/taskRoutes');
const app = express();

app.use(express.json());

// Register routes
app.use('/api/tasks', taskRoutes);

// Dynamically assign a port for each worker, or use a default port for the master
const PORT = process.env.PORT || (cluster.isWorker ? (5000 + cluster.worker.id) : 5000); // Master on 5000, workers on 5001, 5002, etc.

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, PID: ${process.pid}`);
});
