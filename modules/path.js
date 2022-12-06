const path = require("path");

// Only current file name
console.log(path.basename(__filename));

// Name of current path/directory
console.log(path.dirname(__filename));

// File extention
console.log(path.extname(__filename));

// Create an object path
console.log(path.parse(__filename));

// Merge file paths
console.log(path.join(__dirname, "/teste", "teste.html"));