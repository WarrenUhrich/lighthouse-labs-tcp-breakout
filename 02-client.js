const net = require('net');

const client = net.createConnection({
    host: 'localhost',
    port: 54321
});

// client.write('Hello, I am a client!');

client.setEncoding('utf-8');

// If we type into the command line...
process.stdin.on('data', (data) => {
    const enteredString = String(data).trim(); // Trim removes extra white space at the beginning / end of a string.
    
    // Print to client.
    console.log('You entered:', enteredString);
    
    // Server will see written string.
    client.write(enteredString); 
});

// If data is received from the server...
client.on('data', (data) => {
    console.log(data);
});
