const http = require("http");

// Create Server Object
http
  .createServer((req, res) => {
    // Write response
    res.write("Server response");
    res.end();
  })
  .listen(5000, () => console.log("Server running..."));
