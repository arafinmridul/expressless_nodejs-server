const path = require("path"); // it's a core module, so it doesn't need to be installed
// console.log(typeof path);

// Base file name
console.log(path.basename(__filename)); // path_directives.js
console.log(path.basename(__dirname)); // reference

// Directory name
console.log(path.dirname(__filename)); // .../reference
console.log(path.dirname(__dirname)); // .../dirname

// File extension
console.log(path.extname(__filename)); // .js

// Create entire path object
console.log(path.parse(__filename));

// Concatenate paths
// ../test/hello.html
// folder test and file hello.html
console.log(path.join(__dirname, "test", "hello.html"));
