
const express = require('express');
const app = express();

app.use(express.json());

let tasks = [];

// GET All Tasks
app.get('/api/v1/tasks', (req, res) => {
    res.json(tasks);
});

// GET Task By ID
app.get('/api/v1/tasks/:id', (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find((t) => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.json({
        message: "Task found successfully",
        task: task
    });
});

// POST Create Task
app.post('/api/v1/tasks', (req, res) => {
    if (!req.body.title || !req.body.title.trim()) {
        return res.status(400).json({
            message: "Task title is required"
        });
    }

    tasks.push({
        id: Date.now(),
        title: req.body.title
    });

    res.status(201).json({
        message: "Task created successfully",
        tasks: tasks
    });
});

// PUT Update Task
app.put('/api/v1/tasks/:id', (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find((t) => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    if (!req.body.title || !req.body.title.trim()) {
        return res.status(400).json({
            message: "Task title is required"
        });
    }

    task.title = req.body.title;

    res.json({
        message: "Task updated successfully",
        task: task
    });
});

// DELETE Task
app.delete('/api/v1/tasks/:id', (req, res) => {
    const id = Number(req.params.id);

    const taskIndex = tasks.findIndex((t) => t.id === id);

    if (taskIndex === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    tasks.splice(taskIndex, 1);

    res.json({
        message: "Task deleted successfully"
    });
});

// Start Server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
