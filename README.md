# Task Manager API

A simple Task Manager project built using Node.js Core Modules and Express.js. This project demonstrates CLI applications, HTTP server creation, REST API development, CRUD operations, and request validation.

## Features

- Create tasks using Node.js CLI.
- Build a server using the Core HTTP module.
- Get all tasks.
- Get a specific task by ID.
- Create new tasks.
- Update existing tasks.
- Delete tasks.
- Validate task titles.
- Handle errors using HTTP status codes.

## Technologies Used

- Node.js
- Core HTTP Module
- Express.js
- JavaScript
- Postman
- VS Code

## Project Structure

```text
task-manager-api/
│
├── part-A-cli/
│   └── cli.js
│
├── part-B-core-http/
│   └── server.js
│
├── part-C-express/
│   └── server.js
│
├── package.json
├── package-lock.json
└── README.md
```

## Installation

1. Clone or download this project.
2. Open the project folder in VS Code.
3. Open the terminal.
4. Install dependencies:

```bash
npm install
```

## Part A: Task Manager CLI

This part uses Node.js `process.argv` to accept a task title from the command line.

### Run the Application

```bash
node part-A-cli/cli.js "Learn Node.js"
```

### Example Output

```text
Your Task: Learn Node.js
```

If no task title is provided:

```bash
node part-A-cli/cli.js
```

Output:

```text
Please enter a task
```

## Part B: Core HTTP Server

This part uses Node.js built-in HTTP module without Express.js.

### Run the Server

```bash
node part-B-core-http/server.js
```

Server runs on:

http://localhost:3001

### Available Routes

| Method | Endpoint | Description |
|---|---|---|
| GET | `/tasks` | Get all tasks |
| GET | `/tasks/:id` | Get task by ID |
| POST | `/tasks` | Create a new task |

### Example POST Request

URL:

`http://localhost:3001/tasks`

Body (JSON):

```json
{
  "title": "Learn React"
}
```

## Part C: Express.js CRUD API

This part uses Express.js to build REST API endpoints for managing tasks.

### Run the Server

```bash
npm run dev
```

Server runs on:

http://localhost:3001

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/tasks` | Get all tasks |
| POST | `/api/v1/tasks` | Create a task |
| PUT | `/api/v1/tasks/:id` | Update a task |
| DELETE | `/api/v1/tasks/:id` | Delete a task |

### 1. Get All Tasks

```http
GET /api/v1/tasks
```

Returns all available tasks.

### 2. Create a Task

```http
POST /api/v1/tasks
```

Request Body:

```json
{
  "title": "Learn Node.js"
}
```

### 3. Update a Task

```http
PUT /api/v1/tasks/123456
```

Request Body:

```json
{
  "title": "Learn React"
}
```

Replace `123456` with an actual task ID returned by the API.

### 4. Delete a Task

```http
DELETE /api/v1/tasks/123456
```

Replace `123456` with an actual task ID.

## Part D: Validation and HTTP Status Codes

The Express API uses validation and appropriate HTTP status codes.

| Status Code | Meaning | Usage |
|---|---|---|
| 200 | OK | Successful GET, PUT and DELETE |
| 201 | Created | Task successfully created |
| 400 | Bad Request | Missing or empty task title |
| 404 | Not Found | Task does not exist |

### Validation

The API checks whether the task title is provided and is not empty.

```javascript
if (!req.body.title || !req.body.title.trim()) {
    return res.status(400).json({
        message: "Task title is required"
    });
}
```

## Testing

All API endpoints can be tested using Postman.

1. Start the server.
2. Open Postman.
3. Select the HTTP method.
4. Enter the API URL.
5. For POST and PUT, select Body → raw → JSON.
6. Send the request and check the response.

## Data Storage

Tasks are stored in JavaScript arrays. No database is connected to this project.

**Note:** Data is temporary and resets when the server restarts.

## Author

Developed as a Node.js Backend Development assignment.
