const http = require('http');
const server = http.createServer((req, res) => {
    req.url === '/' ? res.end('Home Page') : req.url === '/about' ? res.end('About Page') : res.end('Error Page');
});
server.listen(5000, () => console.log('Server listening on port : 5000....'));