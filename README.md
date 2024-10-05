# Node.js Task Queuing with Rate Limiting

## Overview

This project implements a Node.js API that handles task processing with rate limiting and queuing mechanisms. Each user can submit tasks with a limit of one task per second and 20 tasks per minute. Exceeding these limits will result in requests being queued for processing.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Testing](#api-testing)
- [Log File](#log-file)


## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js to handle API requests.
- **Rate Limiting**: Implemented to control the rate of incoming requests per user.
- **Logging**: Task completion logs are stored in a file for persistence.
- **Cluster Module**: Utilized for creating a multi-core server for improved performance.

## Folder Structure

RateLimitTask/ │  │ ├── controllers/ │ │ └── taskController.js # Handles task processing logic │ ├── middlewares/ │ │ └── rate-limiter.js # Middleware for rate limiting │ ├── services/ │ │ └── queueService.js # Task queuing and logging service │ ├── config/ │ │ └── cluster.js # Cluster configuration for multi-core processing │ ├── routes/ │ │ └── taskRoutes.js # API route definitions │ └── server.js # Main server file │ ─logs/ │ └── task.log # Log file for task completion messages │ ├── package.json # Project metadata and dependencies ├── package-lock.json # Exact versions of dependencies ├── .gitignore # Files to ignore in Git └── README.md # Project documentation




## Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** (Node Package Manager)

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone <repository-url>
   cd RateLimitTask
   
   or extract folder

   npm install



### Running the Application

npm start


### API Testing

You can test the API using Postman or any other API client. For the best experience, we recommend using the Postman app on your local system.

### Testing the API Endpoint

- **Endpoint**: `POST http://localhost:5000/api/tasks`

#### Steps to Test the API

1. Open Postman on your local machine.
2. Set the request method to **POST**.
3. Enter the URL: `http://localhost:5000/api/tasks`.
4. In the request body, select **Raw** and choose **JSON** from the dropdown menu.
5. Enter the following JSON payload in the body:

    ```json
    {
        "user_id": "17776767"
    }
  

6. Click on the **Send** button.

#### Expected Response

Upon successful request, you will receive a response like:

json
{
    "message": "Task queued for user 17776767"
}


### Log File
Task completion logs are stored in logs/task.log. Each entry will look like
17776767 - task completed at - 2024-10-05T13:38:12.475Z
