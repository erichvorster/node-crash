const fs = require("fs");

// reading files - this method is assynchronous . Non blocking
fs.readFile("./docs/blogs.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// writing files - Also assynchronous
fs.writeFile("./docs/blogs.txt", "hello, world", () => {
  console.log("file was writtenn");
});

// directories
if (fs.existsSync("./images"))
  fs.mkdir("./images1", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });
// deleting files
if(fs.existsSync('./docs/deleteMe.txt')){
  fs.unlink('./docs/deleteMe.txt', (err) => {
    if(err) {
      console.log(err)
    }
    console.log('file deleted')
  })
}