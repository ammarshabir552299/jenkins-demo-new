const http = require('http');

const PORT = 3002;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <h1>Hello from Jenkins CI/CD!</h1>
        <p>Version 2</p>
    `);
});

server.listen(PORT, () => {
    console.log(`Application running on http://localhost:${PORT}`);
});
