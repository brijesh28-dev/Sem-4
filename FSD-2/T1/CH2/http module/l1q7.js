const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1 style="color:blue; font-size: 24px;">welcome to login page</h1>');
    } else if (req.url === '/login') {
        fs.readFile('login.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Error: login.html not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/gallery') {
        fs.readFile('hello.png', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Error: hello.png not found');
            } else {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('Server is on');
});
