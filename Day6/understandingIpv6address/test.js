const http = require("http");

// Create the server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello, World! IPv6 is working i am ineshS!" }));
});

// THIS IS THE KEY LINE → Listen on both IPv4 and IPv6
server.listen(8080, "::", () => {
  console.log("HTTP server is running!");
  console.log("   Local:     http://localhost:8080");
  console.log("   IPv4:      http://127.0.0.1:8080");
  console.log("   IPv4 LAN:  http://192.168.1.66:8080");
  console.log("   IPv6 Loop: http://[::1]:8080");
  console.log("   IPv6 LAN:  http://[2400:1a00:4b28:7d29:ffc1:319e:2e68:f073]:8080");
  console.log("   All IPv6:  http://[::]:8080");
});