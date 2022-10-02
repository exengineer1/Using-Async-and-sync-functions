var fs = require('fs');

// start of Synchronus Processing
const data = fs.readFileSync('./file.txt', 'utf8');
fs.writeFileSync('./file1.txt', data, 'utf8');
//End of the function


// Start of AsyncResource Processing
fs.readFile('./file.txt', 'utf8', (err, data) => {
  console.log("Here the content \n\n\n\n" + data)
  fs.writeFile('./file1.txt', data, 'utf8', (err) => {
    console.log("\n\n\n\nData written on file1.txt file\n\n\n")
  });
});