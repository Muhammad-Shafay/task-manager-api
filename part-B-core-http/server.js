
const http = require('http');

let tasks = [
    { id: 1, title: "Learn Node.js" },
    { id: 2, title: "Learn Express.js" }
];

const server = http.createServer((req, res) => {

    // GET All Tasks
    if (req.method === 'GET' && req.url === '/tasks') {

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(tasks));
    }

    // GET Task By ID
    else if (req.method === 'GET' && req.url.startsWith('/tasks/')) {

        const id = Number(req.url.split('/')[2]);

        const task = tasks.find((t) => t.id === id);

        if (!task) {
            res.writeHead(404, {
                'Content-Type': 'application/json'
            });

            return res.end(JSON.stringify({
                message: "Task not found"
            }));
        }

        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify(task));
    }

    // POST Create Task
    else if (req.method === 'POST' && req.url === '/tasks') {

        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {

            const data = JSON.parse(body);

            const newTask = {
                id: Date.now(),
                title: data.title
            };

            tasks.push(newTask);

            res.writeHead(201, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify({
                message: "Task created successfully",
                task: newTask
            }));
        });
    }

    // Invalid Route
    else {
        res.writeHead(404, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            message: "Route not found"
        }));
    }

});

server.listen(3001, () => {
    console.log("Server running on port 3001");
});
