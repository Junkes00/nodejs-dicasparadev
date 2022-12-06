const fs = require('fs');
const path = require('path')
const pathJoin = path.join(__dirname, "/test", "test.txt");

// Create a folder
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Error: ", error);
  }

  console.log("Create folder with success!");
})

// Create a file
fs.writeFile(pathJoin, "Hello node!", (error) => {
  if (error) {
    return console.log("Error: ", error);
  }

  console.log("Create file with success!");

  // Add to a file
  fs.appendFile(pathJoin, " Hello world", (error) => {
    if (error) {
      return console.log("Error: ", error);
    }

    console.log("File changed with success!");
  })

  // Read file
  fs.readFile(pathJoin, 'utf8', (error, data) => {
    if (error) {
      return console.log('Error:', error)
    }

    console.log(data);
  })
})



