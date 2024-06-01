const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Set the content type based on the file extension
  const contentType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    // Add more content types for other file types as needed
  };

  // Parse the requested file path
  let filePath;
  if (req.url === "/") {
    filePath = path.join(__dirname, "index.html");
  } else if (req.url === "/about") {
    filePath = path.join(__dirname, "about.html");
  } else if (req.url === "/contact") {
    filePath = path.join(__dirname, "contact.html");
  } else if (req.url === "/portfolio") {
    filePath = path.join(__dirname, "portfolio.html");
  } else {
    filePath = path.join(__dirname, req.url);
  }
  let extname = path.extname(filePath);

  // Check if the requested file exists
  fs.exists(filePath, (exists) => {
    if (!exists) {
      // If the file does not exist, return a 404 Not Found response
      res.writeHead(404);
      return res.end("404 Not Found");
    }

    // Read the content of the requested file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // If there's an error reading the file, return a 500 Internal Server Error
        res.writeHead(500);
        return res.end("500 Internal Server Error");
      }

      // Set the content type header based on the file extension
      res.writeHead(200, {
        "Content-Type": contentType[extname] || "text/plain",
      });

      // Send the content of the requested file as the response
      res.end(data);
    });
  });
});

// Server listens on port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
