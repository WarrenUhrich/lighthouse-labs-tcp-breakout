const net = require('net');

const server = net.createServer();
const PORT = 5000;

server.listen(PORT, () => {
    console.log('Listening on port:', PORT);
});

server.on('connection', (connection) => {
    console.log('A client has connected.');
    connection.setEncoding('utf-8');
    // Ask the question!
    connection.write('Do you like JavaScript?');
    // Wait for data!
    connection.on('data', (data) => {
        console.log('data received:', data);
    });
});
