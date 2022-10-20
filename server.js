const net = require('net');

const server = net.createServer();
const PORT = 5000;

server.listen(PORT, () => {
    console.log('Listening on port:', PORT);
});

const votes = {
    yes: 0,
    no: 0
};

server.on('connection', (connection) => {
    console.log('A client has connected.');
    connection.setEncoding('utf-8');
    // Ask the question!
    connection.write('Do you like JavaScript?');
    // Wait for data!
    connection.on('data', (data) => {
        const answer = String(data).trim().toLowerCase();
        console.log('data received:', answer);

        if (answer === 'yes') {
            votes.yes++;
        } else if (answer === 'no') {
            votes.no++;
        } else {
            connection.write('Invalid answer, please type "yes" or "no".');
        }

        console.log('Latest Vote Count:', votes);
    });
});
