// Create web server
// Create a Web Server that listens for requests on port 3000. When requests are received, the server will send back a response with the following content:
// "Hello, World!"

// Use the createServer method of the http module to create the server.

// The createServer method takes a callback function that accepts two arguments, request and response.

// The request object contains information about the incoming request such as headers, URL, and more.

// The response object is used to send data back to the client that made the request.

// Use the writeHead method of the response object to set the status code and content type in the response header.

// Use the end method of the response object to send the response.

// The server should listen for requests on port 3000.

// You can start the server by running node comments.js in the terminal. You can then make requests to the server using a web browser, Postman, or another tool of your choice.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});