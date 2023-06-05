const WebSocket = require('ws');

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 3000 });

// Handle WebSocket connections
wss.on('connection', (ws) => {
  // Handle incoming messages
  ws.on('message', (message) => {
    console.log('Received:', message);
    // You can perform any desired logic here
  });

  // Send a message to the client
  ws.send('Hello, client!');

  // Handle WebSocket disconnections
  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});
